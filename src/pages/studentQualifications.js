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
/* eslint-disable no-else-return */
/* eslint-disable  no-useless-return */

/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */

import { useCallback, useState,useEffect } from 'react';
import Head from 'next/head';

import { Box,  Container, Stack,  Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DataGrid } from '@mui/x-data-grid';

import {  useMoralis } from 'react-moralis';
import {
  
  TextField,
} from '@mui/material';


const Page = () => {
  
  const [values, setValues] = useState({
    courseName: '',
    programName: '',
    unityName: '',
    studentEmail: "",
    notaHabla1:0,
    notaHabla2: 0,
    notaHabla3: 0,
    notaHabla4: 0,
    notaHabla5: 0,
    notaHabla6: 0,
    notaEscucha1: 0,
    notaEscucha2: 0,
    notaEscucha3: 0,
    notaEscucha4: 0,
    notaEscucha5: 0,
    notaEscucha6: 0,
    notaLectura1: 0,
    notaLectura2: 0,
    notaLectura3: 0,
    notaLectura4: 0,
    notaLectura5: 0,
    notaLectura6: 0,
    notaEscritura1: 0,
    notaEscritura2: 0,
    notaEscritura3: 0,
    notaEscritura4: 0,   
    notaEscritura5: 0,
    notaEscritura6: 0,   
    notaTareas1: 0,
    notaTareas2: 0,
    notaTareas3: 0,
    notaTareas4: 0,
    notaComportamiento: 0,
  });

  const {Moralis,user}=useMoralis()
  const [,setStudents]=useState([])
  const [,setTodosCursos]=useState([])
  const [,setUnities]=useState([])
  const [,setPrograms]=useState([])

  const [change, ] = useState(false);
  var [,setActivity]=useState("")

  const fetchData = async () =>{

        try{
            
         
        
            const query = new Moralis.Query("Courses");
        const query3 = new Moralis.Query("Programs");
        const query2 = new Moralis.Query("Students");
        await query.equalTo("teacherEmail",user.get("email"))     


      let cursos=[]
       let students=[]
       let programas=[]
      let unities2=[]
      let object= await query.find()   
         console.log("Courses"+JSON.stringify(object[0]))

if(object[0]){

  await  query3.equalTo("programName",object[0].attributes.programs[0].label)
  await  query2.equalTo("studentCourse",object[0].attributes.courseName)
}  await  query2.equalTo("studentEmail",user.get("email"))






      let programs= await query3.first()
      let student= await query2.find()
      
if(object){

  for(let i=0;i<object.length;i++){ 
    if(object[i].attributes.courseName){
      cursos=[...cursos,{
        id:object[i].attributes.uid,
        label:object[i].attributes.courseName,
        value:object[i].attributes.courseName,
      }]}
    }
         
}
      console.log(cursos)

if(object[0]){     
   programas=[...programas,{label:object[0].attributes.programs[0].label,value:object[0].attributes.programs[0].label}]

}
    
if(programs){

  for(let i=0;i<programs.attributes.unities.length;i++){ 

    unities2=[...unities2,{
      id:i,
      label:programs.attributes.unities[i].label,
      value:programs.attributes.unities[i].value,
    }]
  }
}
        
        
    if(student){
      for(let i=0;i<student.length;i++){ 
        students=[...students,{
          id:i,
          label:student[i].attributes.studentEmail,
          value:student[i].attributes.studentEmail,
        }]
      }
    } 
    

const query55 = new Moralis.Query("Unities");
query55.equalTo("uid",unities2[0].value)
let object55= await query55.first()
if(object55){
  setActivity(object55.attributes.unityCompetencia)
}
      setUnities([...unities2])
      setPrograms([...programas])
      setStudents([...students])
      setTodosCursos([...cursos])

      const query5 = new Moralis.Query("Qualifications");
      query5.equalTo("studentEmail",user.get("email"))
      let object5= await query5.find()
let rows2=[]
if(object5[0]){
  
      for(let i=0;i<object5.length;i++){
        rows2=[...rows2,{
          id:object5[i].attributes.uid,
          courseName:object5[i].attributes.courseName,      
          studentEmail:object5[i].attributes.studentEmail,

         }]
      }

    }
      setRows([...rows2])

    } catch(err){
      console.log(err);
    }
  
  }
  
  useEffect(()=>{
    fetchData()
},[change]);

const columns = [
  
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'courseName', headerName: 'Name', width: 140 },
  { field: 'studentEmail', headerName: 'studentEmail', width: 140 },

];
  var [rows,setRows]=useState([])
  const [,setStateID]=useState(null)

  
const handleCellClick = useCallback(
  async (event) => {
  
        const query = new Moralis.Query("Qualifications");
        query.equalTo("uid",event.id)

        let res= await query.first()
        setStateID(event.id)
        console.log(JSON.stringify(res))
       if(res){
        

  setValues({studentName:res.attributes.studentEmail,notaLectura6:res.attributes.notaLectura6,notaLectura5:res.attributes.notaLectura5,notaLectura4:res.attributes.notaLectura4,notaLectura3:res.attributes.notaLectura3,
  notaLectura2:res.attributes.notaLectura2,notaLectura1:res.attributes.notaLectura1,notaEscritura6:res.attributes.notaEscritura6,notaEscritura5:res.attributes.notaEscritura5,
  notaEscritura4:res.attributes.notaLectura4,notaEscritura3:res.attributes.notaEscritura3,notaEscritura2:res.attributes.notaEscritura2,notaEscritura1:res.attributes.notaEscritura1,
  notaTareas1:res.attributes.notaTareas1,notaComportamiento:res.attributes.notaComportamiento,notaEscucha6:res.attributes.notaEscucha6,notaEscucha5:res.attributes.notaEscucha5,
  notaEscucha4:res.attributes.notaEscucha4,notaEscucha3:res.attributes.notaEscucha3,notaEscucha2:res.attributes.notaEscucha2,notaEscucha1:res.attributes.notaEscucha1,
  notaHabla6:res.attributes.notaHabla6,notaHabla5:res.attributes.notaHabla5,notaHabla4:res.attributes.notaHabla4,notaHabla3:res.attributes.notaHabla3,notaHabla2:res.attributes.notaHabla2,notaHabla1:res.attributes.notaHabla1})  


       }

  },
  []
);





  return (
    <>
      <Head>
        <title>
          Qualifications
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
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <div>
                
              <Stack spacing={1}>
                <Typography variant="h4">
                  Mis calificaciones
                </Typography>
                
              </Stack>
              <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        onCellDoubleClick={handleCellClick}
        checkboxSelection
        
        columns={columns}
      />
    </div>
            
                 <Container style={{marginTop:20}} maxWidth="xl">
                <Stack spacing={3}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={4}
                  >
                <Typography variant="h4">
                  Habla
                </Typography>
              <Stack spacing={1}>
              
                <TextField
                  fullWidth
                  label="Pronunciacion"
                  name="notaHabla1"
                  defaultValue={0}

                  required        type="number"

                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaHabla1}
                />
                
                <TextField
                  fullWidth
                  label="Fluidez"
                  name="notaHabla2"
                  defaultValue={0}
                  required        type="number"

                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaHabla2}
                />
             
              </Stack>
              <Stack spacing={1}>
                <TextField
                  fullWidth
                  label="Vocabulario"
                  name="notaHabla3"
                  defaultValue={0}
                  required        type="number"

                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaHabla3}
                />
                <TextField
                  fullWidth
                  label="Interaccion"
                  name="notaHabla4"
                  defaultValue={0}
                  
                  required        type="number"

                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaHabla4}
                />
              </Stack>
              <Stack spacing={1}>
                <TextField
                  fullWidth
                  label="Estructura"
                  name="notaHabla5"
                  defaultValue={0}        type="number"

                  
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaHabla5}
                />
                <TextField
                  fullWidth
                  label="Otro"
                  name="notaHabla6"
                  type="number"

                  defaultValue={0}
                  
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaHabla6}
                />
              </Stack>
            </Stack>
    <Stack  spacing={1}>
                <Typography variant="h6">
                {"Promedio "+((parseFloat(values.notaHabla1)+parseFloat(values.notaHabla2)+parseFloat(values.notaHabla3)+parseFloat(values.notaHabla4)+parseFloat(values.notaHabla5)+parseFloat(values.notaHabla6))/((parseFloat(values.notaHabla1)>0?1:1)+(parseFloat(values.notaHabla2)>0?1:1)+(parseFloat(values.notaHabla3)>0?1:1)+(parseFloat(values.notaHabla4)>0?1:1)+(parseFloat(values.notaHabla5)>0?1:1)+(parseFloat(values.notaHabla6)>0?1:1)))??0+" Pts"}
                </Typography>
               
              </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Typography variant="h4">
                  Escucha
                </Typography>
              <Stack spacing={1}>
                
                <TextField
                  fullWidth
                  label="Comprension"
                  name="notaEscucha1"
                  defaultValue={0}
                  
                  required         
                  type="number"

                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaEscucha1}
                />
                 <TextField
                  fullWidth
                  label="Interaccion"
                  name="notaEscucha2"
                  defaultValue={0}
                  type="number"
                  
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaEscucha2}
                /> 
              </Stack>
              <Stack spacing={1}>
              <TextField
                fullWidth
                label="Vocabulario"
                name="notaEscucha3"
                defaultValue={0}
                type="number"
                
                required
                style={{
                  marginTop:10,
                  marginBottom:10
                }}
                value={values.notaEscucha3}
              /> 
              
              <TextField
              fullWidth
              label="Fluidez"
              name="notaEscucha4"
              defaultValue={0}
              type="number"
              
              required
              style={{
                marginTop:10,
                marginBottom:10
              }}
              value={values.notaEscucha4}
            />
           
            </Stack>
            <Stack spacing={1}>
            <TextField
              fullWidth
              label="Atencion"
              name="notaEscucha5"
              defaultValue={0}
              type="number"
              
              required
              style={{
                marginTop:10,
                marginBottom:10
              }}
              value={values.notaEscucha5}
            /> 
            <TextField
            fullWidth
            label="Otro"
            name="notaEscucha6"
            defaultValue={0}
            type="number"
            
            required
            style={{
              marginTop:10,
              marginBottom:10
            }}
            value={values.notaEscucha6}
          />
          </Stack>
            </Stack>
            
    <Stack  spacing={1}>
                <Typography variant="h6">
                {"Promedio "+((parseFloat(values.notaEscucha1)+parseFloat(values.notaEscucha2)+parseFloat(values.notaEscucha3)+parseFloat(values.notaEscucha4)+parseFloat(values.notaEscucha5)+parseFloat(values.notaEscucha6))/((parseFloat(values.notaEscucha1)>0?1:1)+(parseFloat(values.notaEscucha2)>0?1:1)+(parseFloat(values.notaEscucha3)>0?1:1)+(parseFloat(values.notaEscucha4)>0?1:1)+(parseFloat(values.notaEscucha5)>0?1:1)+(parseFloat(values.notaEscucha6)?1:1)))+" Pts"}
                </Typography>
               
              </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
            <Typography variant="h4">
              Lectura
            </Typography>
              <Stack spacing={1}>
                <TextField
                  fullWidth
                  label="Pronunciacion"
                  name="notaLectura1"
                  
                  required
                  defaultValue={0}
                  type="number"
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaLectura1}
                />  <TextField
                fullWidth
                label="Vocabulario"
                name="notaLectura2"
                
                required
                defaultValue={0}
                type="number"
                style={{
                  marginTop:10,
                  marginBottom:10
                }}
                value={values.notaLectura2}
              /> 
              </Stack>
              <Stack> <TextField
              fullWidth
              label="Comprension"
              name="notaLectura3"
              
              required
              defaultValue={0}
              type="number"
              style={{
                marginTop:10,
                marginBottom:10
              }}
              value={values.notaLectura3}
            />  <TextField
            fullWidth
            label="Fluidez"
            name="notaLectura4"
            
            required
            defaultValue={0}
            type="number"
            style={{
              marginTop:10,
              marginBottom:10
            }}
            value={values.notaLectura4}
          /></Stack>
           <Stack> <TextField
              fullWidth
              label="Otro"
              name="notaLectura5"
              
              required
              defaultValue={0}
              type="number"
              style={{
                marginTop:10,
                marginBottom:10
              }}
              value={values.notaLectura5}
            />  
            </Stack>
            </Stack>
    <Stack  spacing={1}>
                <Typography variant="h6">
                  {"Promedio "+((parseFloat(values.notaLectura1)+parseFloat(values.notaLectura2)+parseFloat(values.notaLectura3)+parseFloat(values.notaLectura4)+parseFloat(values.notaLectura5))/((parseFloat(values.notaLectura1)>0?1:1)+(parseFloat(values.notaLectura2)>0?1:1)+(parseFloat(values.notaLectura3)>0?1:1)+(parseFloat(values.notaLectura4)>0?1:1)+(parseFloat(values.notaLectura5)>0?1:1)))+" Pts"}
                </Typography>
               
              </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            > <Typography variant="h4">
            Escritura
            </Typography>
              <Stack spacing={1}>
               
                <TextField
                  fullWidth
                  label="Adecuacion y Contenido"
                  name="notaEscritura1"
                  defaultValue={0}
                  type="number"
                  
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaEscritura1}
                />
                <TextField
                  fullWidth
                  label="Vocabulario"
                  name="notaEscritura2"
                  defaultValue={0}
                  type="number"
                  
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaEscritura2}
                />
                   
              </Stack>
              
            <Stack>     
              <TextField
                  fullWidth
                  label="Gramatica"
                  name="notaEscritura3"
                  defaultValue={0}
                  type="number"
                  
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaEscritura3}
                />
                <TextField
                fullWidth
                label="Creatividad"
                name="notaEscritura4"
                defaultValue={0}
                type="number"
                
                required
                style={{
                  marginTop:10,
                  marginBottom:10
                }}
                value={values.notaEscritura4}
              />
              </Stack>
              <Stack>     
              <TextField
                  fullWidth
                  label="Ortografia"
                  name="notaEscritura5"
                  defaultValue={0}
                  type="number"
                  
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaEscritura5}
                />
                <TextField
                fullWidth
                label="Otro"
                name="notaEscritura6"
                defaultValue={0}
                type="number"
                
                required
                style={{
                  marginTop:10,
                  marginBottom:10
                }}
                value={values.notaEscritura6}
              />
              </Stack>
              
            </Stack>
                    
    <Stack  spacing={1}>
                <Typography variant="h6">
                {"Promedio "+((parseFloat(values.notaEscritura1)+parseFloat(values.notaEscritura2)+parseFloat(values.notaEscritura3)+parseFloat(values.notaEscritura4)+parseFloat(values.notaEscritura5)+parseFloat(values.notaEscritura6))/((parseFloat(values.notaEscritura1)>0?1:1)+(parseFloat(values.notaEscritura2)>0?1:1)+(parseFloat(values.notaEscritura3)>0?1:1)+(parseFloat(values.notaEscritura4)>0?1:1)+(parseFloat(values.notaEscritura5)>0?1:1)+(parseFloat(values.notaEscritura6)>0?1:1)))+" Pts"}
                </Typography>
               
              </Stack>
            <Stack
            
            paddingTop={5}
              direction="row"
              justifyContent="flex-start"
                

            >
            <Typography variant="h4">
            Tareas
            </Typography>
                <TextField
                  width="100px"
                  label="Nota Tareas "
                  name="notaTareas1"
                  defaultValue={0}
                  type="number"
                  
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10,
                    marginLeft:20
                  }}
                  value={values.notaTareas1}
                />
            <Stack>
             
            </Stack>
    
            </Stack>
        
          </Stack>
          <Stack
              direction="row"
              justifyContent="flex-start"
              spacing={4}
              marginTop={5}
            >
            <Typography width={240} variant="h4">
            Comportamiento y actitudes
            </Typography>
              <Stack spacing={1}>
                <TextField
                  fullWidth
                  defaultValue={0}
                  type="number"
                  label="Nota Comportamiento "
                  name="notaComportamiento"
                  
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10,
                    marginLeft:20
                  }}
                  value={values.notaComportamiento}
                />
              </Stack>
            <Stack>
             
    
            </Stack>
        
          </Stack>
        
 
        </Container>
    
        <Stack  height={10}/>

        <Container  maxWidth="xl">
          <Stack spacing={3}>   
         
               
        <Stack  height={10}/>
        <Typography variant="h6">

{"Promedio Total:  "+(parseFloat((parseFloat(values.notaHabla1)+parseFloat(values.notaHabla2)+parseFloat(values.notaHabla3)+parseFloat(values.notaHabla4)+parseFloat(values.notaHabla5)+parseFloat(values.notaHabla6))/((parseFloat(values.notaHabla1)>0?1:1)+(parseFloat(values.notaHabla2)>0?1:1)+(parseFloat(values.notaHabla3)>0?1:1)+(parseFloat(values.notaHabla4)>0?1:1)+(parseFloat(values.notaHabla5)>0?1:1)+(parseFloat(values.notaHabla6)?1:1)))+parseFloat((parseFloat(values.notaEscucha1)+parseFloat(values.notaEscucha2)+parseFloat(values.notaEscucha3)+parseFloat(values.notaEscucha4)+parseFloat(values.notaEscucha5)+parseFloat(values.notaEscucha6))/((parseFloat(values.notaEscucha1)>0?1:1)+(parseFloat(values.notaEscucha2)>0?1:1)+(parseFloat(values.notaEscucha3)>0?1:1)+(parseFloat(values.notaEscucha4)>0?1:1)+(parseFloat(values.notaEscucha5)>0?1:1)+(parseFloat(values.notaEscucha6)?1:1)))+parseFloat((parseFloat(values.notaLectura1)+parseFloat(values.notaLectura2)+parseFloat(values.notaLectura3)+parseFloat(values.notaLectura4)+parseFloat(values.notaLectura5))/((parseFloat(values.notaLectura1)>0?1:0)+(parseFloat(values.notaLectura2)>0?1:1)+(parseFloat(values.notaLectura3)>0?1:1)+(parseFloat(values.notaLectura4)>0?1:1)+(parseFloat(values.notaLectura5)>0?1:1)))+parseFloat((parseFloat(values.notaEscritura1)+parseFloat(values.notaEscritura2)+parseFloat(values.notaEscritura3)+parseFloat(values.notaEscritura4)+parseFloat(values.notaEscritura5)+parseFloat(values.notaEscritura6))/((parseFloat(values.notaEscritura1)>0?1:1)+(parseFloat(values.notaEscritura2)>0?1:1)+(parseFloat(values.notaEscritura3)>0?1:1)+(parseFloat(values.notaEscritura4)>0?1:1)+(parseFloat(values.notaEscritura5)>0?1:1)+(parseFloat(values.notaEscritura6)>0?1:1)))+parseFloat(values.notaTareas1)+parseFloat(values.notaComportamiento))/6+" Pts"}
</Typography>
        <Stack  height={10}/>
       
            
          </Stack>
          
              <Stack  height={20}/>
              
        
       
 
        </Container>
                     </div>
                     
             
            </Stack>
          
           </Stack>
        </Container>

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
