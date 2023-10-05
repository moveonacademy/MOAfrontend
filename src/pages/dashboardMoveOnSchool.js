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
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */
import Chip from '@mui/material/Chip';

import { useCallback,  useState,useEffect } from 'react';
import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DataGrid } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Grid } from '@mui/material';
import { useMoralis } from 'react-moralis';
import {  
  TextField,
} from '@mui/material';

import {useDropzone} from 'react-dropzone'
import Alert from '@mui/material/Alert';

import Autocomplete from '@mui/material/Autocomplete';

const Page = () => {
const {Moralis,user}=useMoralis()
  const [date, setDate] = useState(null);
  const [count, setCount] = useState(0);
  const [teachers,setTeachers]=useState([])
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getInputProps,open} = useDropzone({onDrop})
  
  const fetchDataTeachers = async () =>{

    try{
      
  

    const query2 = new Moralis.Query("Teachers");
    await  query2.equalTo("supportEmail",user.get("email"))

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

  const fetchData = async () =>{

    try{
      
      const query2 = new Moralis.Query("Programs");
      const query = new Moralis.Query("Courses");
  

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
  setValues({courseName:"",courseDescription:"",courseLevel:"",courseCity:"",teacherEmail:"",courseLevel:"",courseLenguage:"",courseRoom:""})  

    for(let i=0;i<rowstoDelete.length;i++){
  
      const DataFiles = Moralis.Object.extend('Courses');
      const query = new Moralis.Query(DataFiles);
     await query.equalTo("uid",rowstoDelete[i]);
      const count3 = await query.first();

      try {

        const file = await query.get(count3.id);
        await file.destroy();
      } catch (error) {
        console.error('Error deleting file:', error);
      }
 
    }
    
setChange(!change)
  
  }
const [error,setError]=useState('')

async function handleCourse(){

      

  const Courses=Moralis.Object.extend("Courses")

  const course=new Courses()

  const query = new Moralis.Query("Courses");


    query.equalTo("uid",stateID)
    let res=await query.first()

    if(res){
      if(values.courseName!==""){
  
      res.set("courseName",values.courseName)
    } else{
      setError("Falta el nombre del Curso")
  
      return
    }
    if(value!==""){
  
      res.set("courseName",values.courseName)
    } else{
      setError("Falta el nombre del Curso")
  
      return
    }
    if(values.courseCity!==""){
  
      res.set("courseCity",values.courseCity)
    } else{
      setError("Falta la ciudad del curso")
  
      return
    }
    if(values.courseLenguage===""){
      res.set("courseLenguage","Ingles")    
      leng= "Ingles"
    }else{
      res.set("courseLenguage",values.courseLenguage)    
      leng=values.courseLenguage
    }
    if(values.courseLevel===""){
      
      res.set("courseLevel","Kids") 
      unityLVL="Kids"
    }else {
      unityLVL=values.courseLevel
  
      res.set("courseLevel",values.courseLevel) 
  
    }
   
    if(values.courseRoom!==""){
  
      res.set("courseRoom",values.courseRoom)
    } else{
      setError("Falta las fechas del curso")
  
      return
    }  
    
    if(value!==""){
  
      res.set("programs",value)
    } else{
      setError("Falta los programas del curso")
  
      return
    }  
    await res.save()
  setValue([])
  setDate([])
    setValues({courseName:"",courseDescription:"",courseLevel:"",courseCity:"",teacherEmail:"",courseLevel:"",courseLenguage:"",courseRoom:""})  
    setChange(!change)

    return 
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
 
    if(values.courseName===""){
      
      setError("Falta el nombre del curso")
      return
    }
    if(values.courseCity===""){
      
      setError("Falta la ciudad del curso")
      return
    }

    if(values.courseLenguage===""){
      course.set("courseLenguage","Ingles")    
      leng= "Ingles"
    }else{
      course.set("courseLenguage",values.courseLenguage)    
      leng=values.courseLenguage
    }

    if(values.teacherEmail===""){
      course.set("teacherEmail",teachers[0].value)    

     
    }else{

      course.set("teacherEmail",values.teacherEmail)    

    }
    if(values.courseLevel===""){
      lvl="Kids"
      course.set("courseLevel","Kids")        

    }else{ 
      course.set("courseLevel",values.courseLevel)        
      lvl=values.courseLevel

    }
  
    if(value.length===0){
      
      setError("Falta el programa para curso")
      return
    }
    if(values.courseRoom===""){
      
      setError("Falta el Salon del curso")
      return
    }
    if(dates.length===0){
      
      setError("Falta las fechas del curso")
      return
    }
    course.set("courseName",values.courseName)       
    course.set("courseCity",values.courseCity)       
    course.set("programs",value)       

    course.set("supportEmail",user.get("email"))       
    course.set("courseRoom",values.courseRoom)   
     course.set("courseDates",[...dates])
     let uniqueID=parseInt((Date.now()+ Math.random()).toString())

    course.set("uid",uniqueID)

    await course.save()
    setChange(!change)

     setError("")

}
const [stateID,setStateID]=useState(null)


  
const handleCellClick = useCallback(
  async (event) => {
    console.log(JSON.stringify(event))  
        console.log(JSON.stringify(event.id))
  
        const query = new Moralis.Query("Courses");
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
const [programs, setPrograms] = useState([...fixedOptions]);
  const [values, setValues] = useState({
    courseName:"",
    courseCity: 'Merida',
    courseTeacher:"",
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
      console.log(event)

setRowsToDelete(event)
    },
    []
  );


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

  return (
    <>
      <Head>
        <title>
          Teacher Dashboard 
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
                Add New Course
        
              </Typography>
            
              
                <Grid container  style={{direction:"row",width:"100%",marginTop:10,marginBottom:10}}>
               
                <Grid container  style={{direction:"row",width:"30%",marginTop:10,marginBottom:10}}>
           
          <Typography variant="h6">
                Add Dates
        
              </Typography>

                <Box style={{marginTop:10,marginBottom:10}} >

                     <LocalizationProvider dateAdapter={AdapterDayjs}>

                     <DateTimePicker
                        label="Time Picker"
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
                  Add Date
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
      key={index}
        label={option.label}
        {...getTagProps({ index })}
        disabled={fixedOptions.indexOf(option) !== -1}
      />
    ))
  }
  style={{ width: 500 }}
  renderInput={(params) => (
    <TextField {...params} label="Unities" placeholder="Unities" />
  )}
/>

<Box style={{borderColor:"black",borderRadius:20,borderWidth:3}}>

      <input {...getInputProps()} />
      <Button  
                  variant="contained" type="button" onClick={open}>
        Upload PDF Course
      </Button>
   </Box>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  onClick={handleCourse}
                  variant="contained"
                >
                  Add Course
                </Button>
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
                  Courses
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
                  - Delete
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
