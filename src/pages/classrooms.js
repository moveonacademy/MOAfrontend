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

import { useCallback, useState,useEffect } from 'react';
import Head from 'next/head';
import Save from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

import { Box, Button, Container, Stack,  Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DataGrid } from '@mui/x-data-grid';
import {  useMoralis } from 'react-moralis';
import {
  
  TextField,
} from '@mui/material';

import Alert from '@mui/material/Alert';


const Page = () => {
  
const {Moralis}=useMoralis()
const [isLoading,setLoading]= useState(false)

  const [stateID,setStateID]=useState(null)

  const handleCellClick = useCallback(
    async (event) => {
    
          const query = new Moralis.Query("Classrooms");
          query.equalTo("uid",event.id)
  
          let res=await query.first()
          setStateID(event.id)
      
      setValues({classroomName:res.attributes.classroomName,classroomDescription:res.attributes.classroomDescription,classroomLevel:res.attributes.classroomLevel})  
  
    },
    []
  );
  const fetchData = async () =>{

    try{
      
      const query = new Moralis.Query("Classrooms");      
   const userMetadata = await magic.user.getMetadata();



      query.equalTo("supportEmail",user.get("email"))

      const object = await query.find();
       let courses=[]
     
       let res=[]
        setLevels([...res])

      for(let i=0;i<object.length;i++){
        courses=[...courses,{
          id:object[i].attributes.uid,
          classroomName:object[i].attributes.classroomName,
          classroomDescription:object[i].attributes.classroomDescription,   
          classroomLevel:object[i].attributes.classroomLevel,
         }]
    
        
      }
    
      
      setRowsCourse([...courses])
    } 
    catch(err){
      console.log(err);
    }
  
  }
  
  const [change, setChange] = useState(false);

  useEffect(()=>{
    fetchData()
},[change]);



const [error,setError]=useState('')

async function handleProgram(){

  setLoading(true)
  const Classrooms=Moralis.Object.extend("Classrooms")

  const course=new Classrooms()

  const query = new Moralis.Query("Classrooms");

    query.equalTo("uid",stateID)
    let res=await query.first()
   if(res){
    if(values.classroomName!==""){

    res.set("classroomName",values.classroomName)
  } else{
    setError("Falta el nombre del classroom")

    return
  }
  if(values.classroomDescription!==""){

    res.set("classroomDescription",values.classroomDescription)
  } else{
    setError("Falta la descripcion del classroom")

    return
  }
  
  if(values.programLevel===""){
    
    res.set("classroomLevel","Kids") 
    unityLVL="Kids"
  }else {
    unityLVL=values.classroomLevel

    res.set("classroomLevel",values.classroomLevel) 

  }

  await res.save()

  setValues({classroomName:"",classroomDescription:"",classroomLevel:""})  
setValue([])
setChange(!change)
setLoading(false)

  return 
}
    if(values.classroomName===""){
      
      setError("Falta el nombre del programa")
      return
    }
    if(values.classroomDescription===""){
      
      setError("Falta la descripcion del programa")
      return
    }

    if(values.classroomLevel===""){
      
      course.set("classroomLevel","Kids") 
    }else {

      course.set("classroomLevel",values.classroomLevel) 

    }
    course.set("classroomName",values.classroomName)       
    course.set("classroomDescription",values.classroomDescription)       
    course.set("supportEmail",user.get("email"))       

    let uniqueID=parseInt((Date.now()+ Math.random()).toString())

    course.set("uid",uniqueID)

    
    await course.save()
    setChange(!change)


setError("")
setLoading(false)

}

let fixedOptions=[]
const [ ,setValue] = useState([...fixedOptions]);
const [,setLevels] = useState([]);


  const [values, setValues] = useState({
    classroomName:"",
    classroomDescription: '',
    classroomLevel:"",
  });

  const handleChange = useCallback(
    (event) => {

      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );
  const [rowstoDelete, setRowsToDelete] = useState([]);

  const handleDelete = useCallback(
   (event) => {
     console.log(event)
 
 setRowsToDelete(event)
   },
   []
 );
 
async function handleErase(){  
  setValues({studentEmail:"",studentLastname:"",studentName:"",studentInstitute:"",studentState:"",studentCity:"",studentComments:"",studentCourse:"",studentAlergies:"",studentID:"",studentPhone:"",studentGender:"",studentDegree:""})  

    for(let i=0;i<rowstoDelete.length;i++){
  
      const DataFiles = Moralis.Object.extend('Classrooms');
      const query = new Moralis.Query(DataFiles);
      await query.equalTo("uid",rowstoDelete[i]);
      const count = await query.first();

      try {

        const file = await query.get(count.id);
        await file.destroy();
      } catch (error2) {
        console.error('Error deleting file:', error2);
      }
 
    }
    
setChange(!change)
  
  }
  const levelsValues = [
    { label: 'Kids', value: 'Kids' },    
    { label: 'Junior', value: 'Junior' },
    { label: 'Teens', value: 'Teens' },

    { label: 'Pro', value: 'Pro' },


  ];

  const columnsCourse = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'classroomName', headerName: 'classroomName', width: 200 },

    { field: 'classroomLevel', headerName: 'classroomLevel', width: 200 },

    { field: 'classroomDescription', headerName: 'classroomDescription', width: 200 },
  ];
   var [rowsCourse,setRowsCourse]=useState([])

  return (
    <>
      <Head>
        <title>
          Salones de Clases 
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
                Agrega un nuevo Salon de Clases
        
              </Typography>
              <TextField
                  fullWidth
                  label="Salon"
                  name="classroomName"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.classroomName}
                />
                 
              
                <TextField
                  fullWidth
                  label="Capacidad del Salon"
                  name="classroomDescription"
                  onChange={handleChange}
                  required
                  type={"number"}
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.classroomDescription}
                />   <TextField
                fullWidth
                label="Nivel"
                name="classroomLevel"
                onChange={handleChange}
                required
                select
                defaultValue={"Kids"}
                style={{
                  paddingTop:6,
                  marginBottom:10
                }}
                SelectProps={{ native: true }}
                value={values.programLevel}
              >
                {levelsValues.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>

             

              </div>
              
            
                
                <LoadingButton
                         fullWidth
                         size="large"
                         sx={{ mt: 3 }}
                         
        loadingPosition="start"
        startIcon={<Save />}
        onClick={handleProgram}
        style={{color:"black",borderColor:"black"}}
                         loading={isLoading} variant="outlined">
                                        Agregar Salon de Clases

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
                  Todos los Salones
                </Typography>
               
              </Stack>
            </Stack>
            <div style={{ height: 400, width: '100%' }}>
                    
            <DataGrid
              rows={rowsCourse}
              columns={columnsCourse}
              onCellDoubleClick={handleCellClick}
              checkboxSelection
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

