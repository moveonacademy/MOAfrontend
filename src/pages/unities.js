/* eslint-disable complexity */
/* eslint-disable arrow-spacing */
/* eslint-disable no-await-in-loop */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-spacing */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */


import { useCallback,  useState,useEffect } from 'react';
import Head from 'next/head';
import Save from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button,  Container, Stack,Typography} from '@mui/material';

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import { DataGrid } from '@mui/x-data-grid';

import {  useMoralis } from 'react-moralis';
import {
  
  TextField,
} from '@mui/material';
import Alert from '@mui/material/Alert';

const Page = () => {
  
const {Moralis,user}=useMoralis()

  
  const handleCellClick = useCallback(
    async (event) => {
          const query = new Moralis.Query("Unities");
          query.equalTo("uid",event.id)

          const res=await query.first()
          setStateID(event.id)

      setValues({email:event.row.email,city:event.row.city,unityLevel:res.attributes.unityLevel,unityCultura:res.attributes.unityExplorar,unityGramatica:res.attributes.unityGramatica,unityAbilities:res.attributes.unityResources,unityName:res.attributes.unityName,unityCompetence:res.attributes.unityCompetencia,unityDescription:res.attributes.unityDescription})  

    },
    []
  );

  const fetchData = async () => {
    let user=await Moralis.User.current()

      const query = new Moralis.Query("Unities");
      query.limit(1000)

      query.equalTo("supportEmail",user.get("email"))

      const object = await query.find();
       let courses=[]
      for(let i=0;i<object.length;i++){
        courses=[...courses,{
          id:object[i].attributes.uid,
          unityName:object[i].attributes.unityName,
          unityDescription:object[i].attributes.unityDescription,   
          unityLevel:object[i].attributes.unityLevel,

         }]
    
          
      }
      setRowsCourse([...courses])
 
  }
const [error,setError]=useState('')
const [change, setChange] = useState(false);

const [isLoading,setLoading]= useState(false)
  
  
useEffect( () => {
  fetchData()
},[change]);

async function handleUnity(){
try{
  setLoading(true)
 


  const Courses=Moralis.Object.extend("Unities")

  const course=new Courses()

  const query = new Moralis.Query("Unities");


   
  let user=await Moralis.User.current()
    query.equalTo("uid",stateID)
    let res=await query.first()
    if(res){
      
      if(values.actividadesPresentacion!==""){

        res.set("actividadesPresentacion",values.actividadesPresentacion)
      } else{
        setError("Falta actividadesPresentacion de la unidad")
        setLoading(false)

        return
      }
      if(values.actividadesUso!==""){

        res.set("actividadesUso",values.actividadesUso)
      } else{
        setError("Falta actividades Uso de la unidad")

        return
      }
      if(values.actividadesPractica!==""){

        res.set("actividadesPractica",values.actividadesPractica)
      } else{
        setError("Falta actividadesPractica de la unidad")
        setLoading(false)


        return
      }
        if(values.unityAbilities!==""){

        res.set("unityResources",values.unityAbilities)
      } else{
        setLoading(false)


        return
      }
      if(values.unityCultura!==""){

        res.set("unityExplorar",values.unityCultura)
      } else{
        setLoading(false)


        return
      }
      if(user.get("email")!==""){

        res.set("supportEmail",user.get("email"))
      } else{
        setLoading(false)


        return
      }
      if(values.unityName!==""){

        res.set("unityName",values.unityName)
      } else{
        return
      }
      if(values.unityDescription!==""){

        res.set("unityDescription",values.unityDescription)
      } else{
        setLoading(false)


        return
      }  
      if(values.unityCompetence!==""){

        res.set("unityCompetencia",values.unityCompetence)
     
      }  else{
        setLoading(false)


        return
      }
      if(values.unityGramatica!==""){

        res.set("unityGramatica",values.unityGramatica)
     
      }  else{
        setLoading(false)


        return
      }
      if(values.unityLevel!==""){

        res.set("unityLevel",values.unityLevel)
     
      }  else{
        setLoading(false)


        return
      }
      await res.save()

      setValues({unityGramatica:"",unityCompetence:"",unityDescription:"",unityAbilities:"",unityName:"",unityCultura:""})  
      setChange(!change)
      setLoading(false)


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
    if(values.unityName===""){
      setLoading(false)


      setError("Falta el nombre de la unidad")
      return
    }
    if(values.unityDescription===""){
      setLoading(false)


      setError("Falta la descripcion de la unidad")
      return
    }
    if(values.unityCompetence===""){
      setLoading(false)


      setError("Falta la competencia de la unidad")
      return
    }
    if(values.unityGramatica===""){
      setLoading(false)


      setError("Falta la gramatica de la unidad")
      return
    }
    if(values.unityAbilities===""){
      setLoading(false)


      setError("Falta los recursos de la unidad")
      return
    }
    if(values.unityCultura===""){
      setLoading(false)


      setError("Falta la cultura de la unidad")
      return
    }
    if(values.unityLevel===""){
      
      course.set("unityLevel","Kids") 
    }else {

      course.set("unityLevel",values.unityLevel) 

    }
    
    if(values.actividadesPresentacion===""){
      setLoading(false)


      setError("Falta actividadesPresentacion de la unidad")
      return
    }
    if(values.actividadesPractica===""){
      setLoading(false)


      setError("Falta actividadesPractica de la unidad")
      return
    }
    
    if(values.actividadesUso===""){
      setLoading(false)


      setError("Falta actividadesUso de la unidad")
      return
    }
    course.set("actividadesPractica",values.actividadesPractica)       
    course.set("actividadesPresentacion",values.actividadesPresentacion)       
    course.set("actividadesUso",values.actividadesUso)       

    course.set("unityName",values.unityName)       
    course.set("unityDescription",values.unityDescription)       
    course.set("unityCompetencia",values.unityCompetence)    
    course.set("unityGramatica",values.unityGramatica)    
    course.set("unityResources",values.unityAbilities)        
    course.set("supportEmail",user.get("email"))     
    course.set("unityExplorar",values.unityCultura)       
    let uniqueID=parseInt((Date.now()+ Math.random()).toString())

    course.set("uid",uniqueID)

    console.log("hasta aqui")
    await course.save()
    setValues({unityGramatica:"",unityCompetence:"",unityDescription:"",unityAbilities:"",unityName:"",unityCultura:""})  

   setChange(!change)

setError('')
setLoading(false)


  }catch (e){
    setError('Error '+e.message)
    setLoading(false)


  }

}
  const [values, setValues] = useState({
    unityName:"",
    unityDescription: '',
    teacherEmail: '',
    unityCultura: '',
    unityAbilities: '',
    unityGramatica: '',
    unityCompetence: '',
    unityLevel: '',
    actividadesPractica: '',
    actividadesPresentacion: '',
    actividadesUso: '',
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

  const levels = [
    {
      value: 'Kids',
      label: 'Kids (4 a 7 años)'
    },
    {
      value: 'Junior',
      label: 'Junior (8 a 12 años)'
    },
    {
      value: 'Teens',
      label: 'Teens (13 a 17 años)'
    },
    {
      value: 'Pro',
      label: 'Pro (18 años o mas)'
    },
  ];
  
  const columnsCourse = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'unityName', headerName: 'unityName', width: 200 },

    { field: 'unityLevel', headerName: 'unityLevel', width: 200 },

    { field: 'unityDescription', headerName: 'unityDescription', width: 200 },
  ];
  var [rowsDate,]=useState([]) 
   var [rowsUnidad,]=useState([])
   var [rowsCourse,setRowsCourse]=useState([])
   const [stateID,setStateID]=useState(null)
   const [rowstoDelete, setRowsToDelete] = useState([]);

   const handleDelete = useCallback(
    (event) => {
  
  setRowsToDelete(event)
    },
    []
  );
  async function handleErase(){  
    setValues({studentEmail:"",studentLastname:"",studentName:"",studentInstitute:"",studentState:"",studentCity:"",studentComments:"",studentCourse:"",studentAlergies:"",studentID:"",studentPhone:"",studentGender:"",studentDegree:""})  
  
      for(let i=0;i<rowstoDelete.length;i++){
    
        const DataFiles = Moralis.Object.extend('Unities');
        const query = new Moralis.Query(DataFiles);
       await query.equalTo("uid",rowstoDelete[i]);
        const count = await query.first();
  
        try {
  
          const file = await query.get(count.id);
          await file.destroy();
        } catch (error2) {
          console.log(error2.message)
        }
   
      }
      
  setChange(!change)
    
    }
  return (
    <>
      <Head>
        <title>
          Unities 
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
                Add New Unities
        
              </Typography>
              <TextField
                  fullWidth
                  label="Unity Name"
                  name="unityName"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.unityName}
                />
                 
              
                <TextField
                  fullWidth
                  label="Unity Description"
                  name="unityDescription"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.unityDescription}
                /> 

<TextField
                  fullWidth
                  label="Competencia"
                  name="unityCompetence"
                  onChange={handleChange}
                  required
                  
                  multiline
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.unityCompetence}
                /> 
                

                <TextField
                  fullWidth
                  label="Gramatica y vocabulario"
                  name="unityGramatica"
                  onChange={handleChange}
                  multiline
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.unityGramatica}
                /> 
              <TextField
                  fullWidth
                  label="Recursos a utilizar"
                  name="unityAbilities"
                  onChange={handleChange}
                  multiline
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.unityAbilities}
                /> 
                  <TextField
                  fullWidth
                  label="Cultura"
                  name="unityCultura"
                  onChange={handleChange}
                  multiline
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.unityCultura}
                /> 

{true?<TextField
                  fullWidth
                  label="Actividades sugeridas para Presentacion"
                  name="actividadesPresentacion"
                  onChange={handleChange}
                  multiline
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.actividadesPresentacion}
                /> :null}
                {true?<TextField
                  fullWidth
                  label="Actividades sugeridas para Practica"
                  name="actividadesPractica"
                  onChange={handleChange}
                  multiline
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.actividadesPractica}
                /> :null}
                {true?<TextField
                  fullWidth
                  label="Actividades sugeridas para Uso"
                  name="actividadesUso"
                  onChange={handleChange}
                  multiline
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.actividadesUso}
                /> :null}
              </div>
              <TextField
                  fullWidth
                  label="Select Level"
                  name="unityLevel"
                  onChange={handleChange}
                  required
                  select
                  defaultValue={"Kids"}
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.unityLevel}
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
              
                <LoadingButton
                         fullWidth
                         size="large"
                         sx={{ mt: 3 }}
                         
        loadingPosition="start"
        startIcon={<Save />}
        onClick={handleUnity}
        style={{color:"black",borderColor:"black"}}
                         loading={isLoading} variant="outlined">
                                        Agregar Unidad

      </LoadingButton>

          </Stack>
          {error!==""?  <Alert variant="outlined" severity="error">
 {error}
</Alert>:null}
        
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
                  Unities
                </Typography>
               
              </Stack>
            </Stack>
            <div style={{ height: 400, width: '100%' }}>
              
      <DataGrid
                      autoPageSize
      onCellDoubleClick={handleCellClick}
        rows={rowsCourse}
        columns={columnsCourse}
        checkboxSelection
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
 