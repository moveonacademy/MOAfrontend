/* eslint-disable complexity */
/* eslint-disable arrow-spacing */
/* eslint-disable no-await-in-loop */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-spacing */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */
/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */

/* eslint-disable no-else-return */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */

import { useCallback,  useState,useEffect ,} from 'react';
import Head from 'next/head';
import { NFTStorage } from 'nft.storage'
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DataGrid } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Grid } from '@mui/material';
import {  useMoralis } from 'react-moralis';
import {
  TextField,} from '@mui/material';
import Save from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

import {useDropzone} from 'react-dropzone'
import Alert from '@mui/material/Alert';
const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE3YTEwQTE3MWIzNUUyYThkMTI2NTc0RjIzMDQ0N0U2NTJjMzBhYTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5MDgyMDc2Njg3MCwibmFtZSI6Ik1vdmVPbkFjYWRlbXkifQ.hJgbUMIjnyiHxNa8HLEGl9JLcbyq3qoNj8Fkrj3X-RU'



const Page = () => {
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

const {Moralis}=useMoralis()
  const [date, setDate] = useState(null);
  const [count, setCount] = useState(0);
  const [teachers,setTeachers]=useState([])
  const {
    acceptedFiles,
   
  } = useDropzone(  { accept: '.pdf, .doc, .docx'} );

 
  const fetchDataTeachers = async () =>{

    try{
      
      let user=await Moralis.User.current()


    const query2 = new Moralis.Query("TeachersMoveOn");
    if(user.get("email")!=="sistemamoa2023@gmail.com"){
      await  query2.equalTo("supportEmail",user.get("email"))

    }

      const object = await query2.find();
    let studiantes=[]
      for(let i=0;i<object.length;i++){
        
          studiantes=[...studiantes,{label:object[i].attributes.teacherEmail,value:object[i].attributes.teacherEmail}]
      }
setTeachers([...studiantes])
      
    } 
    catch(err){
      console.log(err);
    }
  
  }
  const [change, setChange] = useState(false);
  const [isLoading,setLoading]= useState(false)

  const fetchData = async () =>{

    try{
      
      const query2 = new Moralis.Query("Programs");
      const query = new Moralis.Query("CoursesMoveOn");
      let user=await Moralis.User.current()

  

    query.equalTo("supportEmail",user.get("email"))
      const object = await query.find();
      const object2 = await query2.find();


       let courses=[]
       let prom=[]
      for(let i=0;i<object2.length;i++){
      prom=[...prom,{label: object2[i].attributes.programName,value: object2[i].attributes.uid}]
          
      }
setPrograms(prom)
      for(let i=0;i<object.length;i++){
        courses=[...courses,{
          id:object[i].attributes.uid,
          courseName:object[i].attributes.courseName,
          courseCity:object[i].attributes.courseCity,   
          courseLevel:object[i].attributes.courseLevel,
          courseLenguage:object[i].attributes.courseLenguage,
         }]
      }
      
      setRowsCourse([...courses])
    } 
    catch(err){
      console.log(err);
    }
  
  }
  
  

  useEffect(()=>{
    fetchDataTeachers()
    fetchData()
},[change]);

function handleDate(){  
   console.log(date.$d)

   setRowsDate([...rowsDate,{
    id:count,
    date:date.$d.toString(),
   }])
   setCount(count+1)
}

async function handleErase(){  
  setValues({courseName:"",coursePrice:0,courseDescription:"",courseLevel:"",courseCity:"",teacherEmail:"",courseLevel:"",courseLenguage:"",courseRoom:""})  

    for(let i=0;i<rowstoDelete.length;i++){
  
      const DataFiles = Moralis.Object.extend('CoursesMoveOn');
      const query = new Moralis.Query(DataFiles);
     await query.equalTo("uid",rowstoDelete[i]);
      const count2 = await query.first();

      try {

        const file = await query.get(count2.id);
        await file.destroy();
      } catch (error) {
        console.error('Error deleting file:', error);
      }
 
    }
    
setChange(!change)
  
  }

const [error,setError]=useState('')

async function handleCourse(){
  const Courses=Moralis.Object.extend("CoursesMoveOn")

  const course=new Courses()

  const query = new Moralis.Query("CoursesMoveOn");


    query.equalTo("uid",stateID)
    let res=await query.first()
    let user=await Moralis.User.current()

    
    if(res){
      if(values.courseName!==""){
  
      res.set("courseName",values.courseName)
    } else{
      setError("Falta el nombre del Curso")
      setLoading(false)

      return
    }
    if(value.courseDescription!==""){
  
      res.set("courseDescription",values.courseDescription)
    } else{
      setError("Falta la descripcion del Curso")
      setLoading(false)

      return
    }
    if(values.courseCity!==""){
  
      res.set("courseCity",values.courseCity)
    } else{
      setError("Falta la ciudad del curso")
      setLoading(false)

      return
    }
    if(values.courseLenguage===""){
      res.set("courseLenguage","Ingles")    
    }else{
      res.set("courseLenguage",values.courseLenguage)    
    }
    if(values.courseLevel===""){
      
      res.set("courseLevel","Apresto") 
      unityLVL="Apresto"
    }else {
      unityLVL=values.courseLevel
  
      res.set("courseLevel",values.courseLevel) 
  
    }
    let dates=[]  

    for(let i=0;i<rowsDate.length;i++){
      dates=[...dates,rowsDate[i].date]
    }
    if(dates.length>0){
  
     

      res.set("courseDates",dates)        
    } else{
      setLoading(false)

      setError("Falta las Fechas del curso")
  
      return
    }  

    await res.save()
  setValue([])
  setDate([])
  setPrograms([])
    setValues({courseName:"",coursePrice:0,courseDescription:"",courseLevel:"",courseCity:"",teacherEmail:"",courseLevel:"",courseLenguage:"",courseRoom:""})  
    setChange(!change)

    return 
  }
  var imageFile=""
  if(acceptedFiles.length>0){
      
    acceptedFiles.forEach(async (file) => {
      const reader = new FileReader()
      
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = async () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
         imageFile = await new File([ binaryStr ], 'courses.pdf', { type: 'pdf' })

      }
      reader.readAsArrayBuffer(file)
    })
    
  }

    let dates=[]  

    for(let i=0;i<rowsDate.length;i++){
      dates=[...dates,rowsDate[i].date]
    }

    for(let i=0;i<rowsUnidad.length;i++){
      unities=[...dates,{
      actividad:rowsUnidad[i].actividad,
      competencia:rowsUnidad[i].competencia,
      unidad:rowsUnidad[i].unidad,
   }]

    }
 
      
    if(!user){
      setLoading(false)

      setError("Falta el usuario")
      return
    }else{
      course.set("supportEmail",user.get("email"))    

    }
    if(values.courseName===""){
      setLoading(false)

      setError("Falta el nombre del curso")
      return
    }else{
      course.set("courseName",values.courseName)    

    }
     if(values.courseDescription===""){
      setLoading(false)

      setError("Falta la Descripcion del Curso")
      return
    }else{
      course.set("courseDescription",values.courseDescription)    

    }
    if(imageFile){
      
const metadata = await client.store({
  name: values.courseName,
  description: values.courseDescription,
  image: imageFile
})
      course.set("pdfCourse",metadata)    

    }
    if(values.courseCity===""){
      course.set("courseCity",states[0].label)    

    }else{
      course.set("courseCity",values.courseCity)    

    }

    if(values.courseLenguage===""){
      course.set("courseLenguage","Ingles")    
    }else{
      course.set("courseLenguage",values.courseLenguage)    
    }

    if(values.teacherEmail===""){
      course.set("teacherEmail",teachers[0].value)    
    
    }else{

      course.set("teacherEmail",values.teacherEmail)    

    }
    if(values.courseLevel===""){
      course.set("courseLevel","Apresto")        

    }else{ 
      course.set("courseLevel",values.courseLevel)        

    }
   
    
    if(dates.length===0){
      setLoading(false)

      setError("Falta las fechas del curso")
      return
    }else{
      course.set("courseDates",dates)        

    }
     let uniqueID=parseInt((Date.now()+ Math.random()).toString())

     course.set("uid",uniqueID)

     await course.save()
     setChange(!change)
     setValues({courseName:"",courseDescription:"",courseLevel:"",courseCity:"",teacherEmail:"",courseLevel:"",courseLenguage:"",courseRoom:""})  
     setPrograms([])   
     setLoading(false)

     setError("")

}
const [stateID,setStateID]=useState(null)


  
const handleCellClick = useCallback(
  async (event) => {
    console.log(JSON.stringify(event))  
        console.log(JSON.stringify(event.id))
  
        const query = new Moralis.Query("CoursesMoveOn");
        query.equalTo("uid",event.id)

        let res= await query.first()
        setStateID(event.id)
        console.log(JSON.stringify(res))
        let count3=0
       for(let i=0;i<res.attributes.courseDates.length;i++){
        setRowsDate([...rowsDate,{
          id:count3,
          date:res.attributes.courseDates[i],
         }])
         count3++
       }
       if(res.attributes.programs){

        setValue(res.attributes.programs)
       }
    setValues({courseName:res.attributes.courseName,courseCity:res.attributes.courseCity,courseLenguage:res.attributes.courseLenguage,courseRoom:res.attributes.courseRoom,courseTeacher:res.attributes.teacherEmail,courseLevel:res.attributes.courseLevel})  

  },
  []
);

let fixedOptions=[]
const [value, setValue] = useState([...fixedOptions]);
const [, setPrograms] = useState([...fixedOptions]);
  const [values, setValues] = useState({
    courseName:"",
    courseCity: 'Merida',
    courseTeacher:"",
    coursePrice: 0,
    courseLenguage: '',
    teacherEmail: '',
    actividad: '',
    courseLevel: '',
    courseRoom: '',
    competencia: '',
  });

  const [rowstoDelete, setRowsToDelete] = useState([]);

  const handleDelete = useCallback(
    (event) => {
      setRowsToDelete(event)
    },
    []
  );

  const handleChange = useCallback(
   async (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
      if(event.target.name==="courseLevel"){
        console.log(event.target.value)
        const query = new Moralis.Query("Classrooms");
        await query.equalTo("classroomLevel",event.target.value)
        let res=await query.find()
        console.log(JSON.stringify(res))

        if(res){
          let solana=[]
          for(let i=0;i<res.length;i++){
            solana=[...solana,{label:res[i].attributes.classroomName,value:res[i].attributes.classroomName}]
          }

          setValues((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
          }));
          setClassrooms([...solana])
        }
        
      }
    
    },
    []
  );

  const levels = [
    {
      value: 'Apresto',
      label: 'Apresto'
    },
    {
      value: 'PreEscolar1',
      label: 'Pre Escolar 1'
    },
    {
      value: 'PreEscolar2',
      label: 'Pre Escolar 2'
    },
    {
      value: 'PreEscolar3',
      label: 'Pre Escolar 3'
    },{
      value: 'PrimerGrado',
      label: 'Primer Grado'
    },{
      value: 'SegundoGrado',
      label: 'Segundo Grado'
    },{
      value: 'TercerGrado',
      label: 'Tercer Grado'
    },{
      value: 'CuartoGrado',
      label: 'Cuarto Grado'
    },{
      value: 'QuintoGrado',
      label: 'Quinto Grado'
    },{
      value: 'SextoGrado',
      label: 'Sexto Grado'
    },{
      value: 'PrimerAño',
      label: 'Primer Año'
    },{
      value: 'SegundoAño',
      label: 'Segundo Año'
    },{
      value: 'TercerAño',
      label: 'Tercer Año'
    },{
      value: 'CuartoAño',
      label: 'Cuarto Año'
    },{
      value: 'Quinto Año',
      label: 'Quinto Año'
    },
  ];
  
  const states = [
    {
      value: 'Merida',
      label: 'Merida'
    },
    {
      value: 'SanCristobal',
      label: 'San Cristobal'
    },
    {
      value: 'LaGrita',
      label: 'La Grita'
    },
    {
      value: 'PtoLaCruz',
      label: 'Pto. La Cruz'
    },
    {
      value: 'Araure',
      label: 'Araure'
    },
    {
      value: 'ElTigre',
      label: 'El Tigre'
    },
    {
      value: 'Barquisimeto',
      label: 'Barquisimeto'
    },
    {
      value: 'Caracas',
      label: 'Caracas'
    }
  ];

  const lenguages = [
    {
      value: 'Ingles',
      label: 'Ingles'
    },
    {
      value: 'Italiano',
      label: 'Italiano'
    },
    {
      value: 'Aleman',
      label: 'Aleman'
    },
    {
      value: 'Español',
      label: 'Español'
    }
  ];

  const columnsDate = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'date', headerName: 'date', width: 500 },
   
  ];
  const columnsCourse = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'courseName', headerName: 'courseName', width: 200 },

    { field: 'courseLevel', headerName: 'courseLevel', width: 200 },

    { field: 'courseLenguage', headerName: 'courseLenguage', width: 200 },
  ];
  var [rowsDate,setRowsDate]=useState([]) 
   var [rowsUnidad,]=useState([])
   var [rowsCourse,setRowsCourse]=useState([])
   var [,setClassrooms]=useState([])

  return (
    <>
      <Head>
        <title>
          Cursos MoveOnSchool
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        
        <Container maxWidth="xl">
          <Stack spacing={3}>
          <div>
            
          <Typography variant="h6">
                Agrega un nuevo Curso MoveOnSchool
        
              </Typography>
              <TextField
                  fullWidth
                  label="Nombre del Curso"
                  name="courseName"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.courseName}
                />
                <TextField
                fullWidth
                label="Descripcion del Curso"
                name="courseDescription"
                onChange={handleChange}
                required
                style={{
                  marginTop:10,
                  marginBottom:10
                }}
                value={values.courseDescription}
              />
                   <TextField
                  fullWidth
                  label="Seleccione la Ciudad"
                  name="courseCity"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}

                  defaultValue={"Merida"}
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  
                  value={values.courseCity}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  label="Seleccione el Lenguage"
                  name="courseLenguage"
                  onChange={handleChange}
                  required
                  SelectProps={{ native: true }}

                  defaultValue={"Ingles"}
                  select
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  
                  value={values.courseLenguage}
                >
                  {lenguages.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
            
                  <TextField
                  fullWidth
                  label="Seleccione un Nivel"
                  name="courseLevel"
                  onChange={handleChange}
                  required
                  select      
                   SelectProps={{ native: true }}

                  defaultValue={"Kids"}
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  
                  value={values.courseLevel}
                >
                  {levels.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField> 
            
                <TextField
                  fullWidth
                  label="Seleccione un Profesor"
                  name="teacherEmail"
                  onChange={handleChange}
                  required
                  select
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}

                  value={values.teacherEmail}
                >
                  {teachers.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              
               
                <Grid container  style={{direction:"row",width:"100%",marginTop:10,marginBottom:10}}>
               
                <Grid container  style={{direction:"row",width:"30%",marginTop:10,marginBottom:10}}>
           
          <Typography variant="h6">
                Agrega Fechas del Curso
        
              </Typography>

                <Box style={{marginTop:10,marginBottom:10}} >

                     <LocalizationProvider dateAdapter={AdapterDayjs}>

                     <DateTimePicker
                        label="Calendario"
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                      />   

                    </LocalizationProvider>
                   
    
</Box>
    <Button 
    style={{marginTop:5,marginLeft:5,height:70,width:120}}
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  onClick={handleDate}
                  variant="contained"
                >
                  Agregar Fecha
                </Button>
               
</Grid>
<div style={{ height: 200, }}>
              
              <DataGrid
                rows={rowsDate}
                columns={columnsDate}
                
              />
            </div>
                  
</Grid>
              </div>
              
        {/*     
<Autocomplete
  multiple
  id="fixed-tags-demo"
  value={value}
  onChange={(event, newValue) => {
    setValue([
      ...fixedOptions,
      ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
    ]);
  }}
  options={programs}
  getOptionLabel={(option) => option.label}
  renderTags={(tagValue, getTagProps) =>
    tagValue.map((option, index) => (
      <Chip
        label={option.label}
        {...getTagProps({ index })}
        disabled={fixedOptions.indexOf(option) !== -1}
      />
    ))
  }
  style={{ width: 500 }}
  renderInput={(params) => (
    <TextField {...params} label="Programas" placeholder="Programas" />
  )}
/> */}
<LoadingButton
                         fullWidth
                         size="large"
                         sx={{ mt: 3 }}
                         
        loadingPosition="start"
        startIcon={<Save />}
        onClick={handleCourse}
        style={{color:"black",borderColor:"black"}}
                         loading={isLoading} variant="outlined">
                  Agrega un Curso

      </LoadingButton>

              
                {error!==""?  <Alert variant="outlined" severity="error">{error}</Alert>:null}

          </Stack>

       
        </Container>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Cursos
                </Typography>
               
              </Stack>
            </Stack>
            <div style={{ height: 400, width: '100%' }}>
              
      <DataGrid
        onCellDoubleClick={handleCellClick}
        checkboxSelection
        rows={rowsCourse}
        key={"rowsCourse"}
        columns={columnsCourse}
        onRowSelectionModelChange={handleDelete}

      />
            <Button
                 
                  
                  onClick={handleErase}
                  variant="contained"
                >
                  - Borrar
                </Button>
    </div>
          </Stack>
          
        </Container>
        
      </Box>
     
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
