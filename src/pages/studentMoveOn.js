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

/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */

import { useCallback,  useState,useEffect } from 'react';
import Save from '@mui/icons-material/Save';
import { DataGrid } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';
import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import dayjs from "dayjs";

import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Box,  Container,TextField, Button, Stack ,Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const Page = () => {
  


const {Moralis}=useMoralis()
const grados=[
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
]
const columnsCourse = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'studentName', headerName: 'studentName', width: 200 },
  { field: 'studentEmail', headerName: 'studentEmail', width: 200 },
  { field: 'studentState', headerName: 'studentState', width: 200 },
  { field: 'studentCourse', headerName: 'studentCourse', width: 200 },

];
const [courses,setCourses]=useState()
  const fetchData = async () =>{

    try{
      
    
  const query2 = new Moralis.Query("CoursesMoveOn");
 
  const cursos = await query2.find();
  let user=await Moralis.User.current()

    const query = new Moralis.Query("StudentsMoveOn");
    query.equalTo("supportEmail",user.get("email"))
      const object = await query.find();

    
      console.log("studentCourse "+object[0].attributes.studentCourse)
    let studiantes=[]
      for(let i=0;i<object.length;i++){
        
        studiantes=[...studiantes,{
          id:object[i].attributes.uid,
          studentEmail:object[i].attributes.studentEmail,
          studentName:object[i].attributes.studentName,
          studentState:object[i].attributes.studentState,
          studentCourse:object[i].attributes.studentCourse,

         }]
       
          
      }

      let cur=[]

      for(let i=0;i<cursos.length;i++){
        cur=[...cur,{
          value:cursos[i].attributes.uid,
          label:cursos[i].attributes.courseName,
    
         }]
      }

      setCourses([...cur])

      setRowsStudents([...studiantes])

      
    } 
    catch(err){
      console.log(err);
    }
  
  }
  const [rowstoDelete, setRowsToDelete] = useState([]);

async function handleErase(){  
  setValues({studentEmail:"",paymentType:"",payment:"",studentLastname:"",studentName:"",studentInstitute:"",studentState:"",studentCity:"",studentComments:"",studentCourse:"",studentAlergies:"",studentID:"",studentPhone:"",studentGender:"",studentDegree:""})  

    for(let i=0;i<rowstoDelete.length;i++){
  
      const DataFiles = Moralis.Object.extend('StudentsMoveOn');
      const query = new Moralis.Query(DataFiles);
     await query.equalTo("uid",rowstoDelete[i]);
      const count = await query.first();

      try {

        const file = await query.get(count.id);
        await file.destroy();
      } catch (error) {
        console.error('Error deleting file:', error);
      }
 
    }
    
setChange(!change)
  
  }
  const [error,setError]=useState('')

  const [, setDateBirtday] = useState(dayjs(Date.now()));
  const [, setDatePayment] = useState(dayjs(Date.now()));
  const [isLoading,setLoading]= useState(false)

async function handleStudent(){
  setError("")
  try {
    
    setLoading(true)

    let user=await Moralis.User.current()

  const Student= Moralis.Object.extend("StudentsMoveOn")
  const student= new Student()
  
    const query = new Moralis.Query("StudentsMoveOn");

     query.equalTo("uid",stateID)
     let res=await query.first()

    if(res){
      if(values.studentName!==""){

        res.set("studentName",values.studentName)    
      
      } else{
        setError("Falta el nombre del alumno")
        setLoading(false)

        return
      }
      if(values.studentEmail!==""){
  
        res.set("studentEmail",values.studentEmail)    
      
      } else{
        setError("Falta el correo del alumno")
        setLoading(false)

        return
      }
  
      if(values.studentLastname!==""){
  
        res.set("studentLastname",values.studentLastname)          
      
      }  else{
        setError("Falta el apellido del alumno")
        setLoading(false)

        return
      }
     
  
  if(values.studentGender){
    res.set("studentGender",values.studentGender)
  
    
  }else{
    res.set("studentGender","Male")
  
    
  }
  
  
  if(values.studentDegree){
    res.set("studentDegree",values.studentDegree)
   
  }else{
    res.set("studentDegree","Apresto")


  }
  
 
   await res.save()
 
   setValues({studentEmail:"",paymentType:"",payment:"",studentLastname:"",studentName:"",studentInstitute:"",studentState:"",studentCity:"",studentComments:"",studentCourse:"",studentAlergies:"",studentID:"",studentPhone:"",studentGender:"",studentDegree:""})  
  
   setChange(!change)
   setLoading(false)

   return 
 }



    if(user){

      student.set("supportEmail",user.get("email"))   
    
    } else{
      return
    }

    if(values.studentName!==""){

      student.set("studentName",values.studentName)    
    
    } else{      
        setLoading(false)

      setError("Falta el nombre del alumno")

      return
    }
    
    if(values.studentEmail!==""){

      student.set("studentEmail",values.studentEmail)    
    
    } else{
      setError("Falta el correo del alumno")
      setLoading(false)

      return
    }

    if(values.studentLastname!==""){

      student.set("studentLastname",values.studentLastname)          
    
    }  else{
      setError("Falta el apellido del alumno")
      setLoading(false)

      return
    }
   


if(values.studentGender){
  student.set("studentGender",values.studentGender)
 
}else{
  student.set("studentGender","Male")
  
}




if(values.studentDegree){
  student.set("studentDegree",values.studentDegree)
 
}else{
  student.set("studentDegree","Apresto")

}


  let uniqueID=parseInt((Date.now()+ Math.random()).toString())

    student.set("uid",uniqueID)
    await student.save()
    setValues({studentEmail:"",payment:"",paymentType:"",studentLastname:"",studentName:"",studentInstitute:"",studentState:"",studentCity:"",studentComments:"",studentCourse:"",studentAlergies:"",studentID:"",studentPhone:"",studentGender:"",studentDegree:""})  
setDateBirtday("")
setDatePayment("")

setChange(!change)

     setError("")
     setLoading(false)

  } catch(e){
    setError("Error "+e.message)
    setLoading(false)

  }

}


const genders = [
  {
    value: 'Male',
    label: 'male'
  },
  {
    value: 'Female',
    label: 'female'
  },
];

var [rowsStudents,setRowsStudents]=useState([])
const [, setValueLenguage] = useState([])


const handleDelete = useCallback(
  (event) => {
setRowsToDelete(event)

  },
  []
);
const [change, setChange] = useState(false);

  useEffect(()=>{
    fetchData()
},[change]);

  const [values, setValues] = useState({
    studentName: '',
    studentEmail: '', 
    studentTeacher: '', 
    studentAddress: '', 
    payment: '', 
    paymentType: '', 
    studentOcupacion: '', 
    studentProcedence: '', 
    studentLastname: '', 
    course: '',
    studentGender:"",
    level: '',
    studentID: '',
    studentCourse:"",
    studentAlergies: '',
    procedencia: '',
    studentState:"",
    studentComments: '',
    studentPhone: '',
    studentDegree: '',
  });

  const handleChange = useCallback(
   async (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const [stateID,setStateID]=useState(null)

  const handleCellClick = useCallback(
    async (event) => {
          const query = new Moralis.Query("StudentsMoveOn");
          query.equalTo("uid",event.id)
  
          let res=await query.first()
          setStateID(event.id)
          setDateBirtday(dayjs(res.attributes.studentBirthday))
          setDatePayment(dayjs(res.attributes.studentDatePayment))

          let otro=[]
          for(let i=0;i<res.attributes.studentLenguage.length;i++){
            otro=[...otro,res.attributes.studentLenguage[i]]
          }
          setValueLenguage([...otro])
          setValues({
              studentCity:res.attributes.studentCity,
              studentOcupacion:res.attributes.studentOcupacion,
              studentProcedence:res.attributes.studentProcedence,
              payment:res.attributes.studentPayed,
              paymentType:res.attributes.paymentType,
              studentInstitute:res.attributes.studentInstitute,
              studentLastname:res.attributes.studentLastname,
              studentGender:res.attributes.studentGender,
              studentDegree:res.attributes.studentDegree,

              course:res.attributes.course,
              studentID:res.attributes.studentID,
              studentCourse:res.attributes.studentCourse,
              studentAlergies:res.attributes.studentAlergies,
              procedencia:res.attributes.procedencia,
              studentState:res.attributes.studentState,
              studentComments:res.attributes.studentComments,
              studentPhone:res.attributes.studentPhone,
              studentName:res.attributes.studentName,studentEmail:res.attributes.studentEmail,studentAddress:res.attributes.studentAddress})  
        },
    []
  );

  return (
    <>
      <Head>
        <title>
           Estudiantes MoveOnSchool
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
                  Agregar Estudiante MoveOnSchool
                </Typography>
                
              </Stack>

      
              <TextField
                  fullWidth
                  label="Nombre del Estudiante"
                  name="studentName"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.studentName}
                />
                
              <TextField
                  fullWidth
                  label="Apellido"
                  name="studentLastname"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.studentLastname}
                />
              
                <TextField
                  fullWidth
                  label="Sexo"
                  name="studentGender"
                  onChange={handleChange}
                  required
                  select
                  
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.studentGender}
                >
                  {genders.map((option) => (
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
                  label="Correo Electronico"
                  name="studentEmail"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.studentEmail}
                /> 

            <TextField
                  fullWidth
                  label="Grado"
                  name="studentDegree"
                  onChange={handleChange}
                  required
                  select
                  
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.studentDegree}
                >
                  {grados.map((option) => (
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
        onClick={handleStudent}
        style={{color:"black",borderColor:"black"}}
                         loading={isLoading} variant="outlined">
                  Agregar Estudiante

      </LoadingButton>
                {error!==""?  <Alert variant="outlined" severity="error">{error}</Alert>:null}

              </div>
            </Stack>

            <div style={{ height: 400, width: '100%' }}>
              
      <DataGrid
        rows={rowsStudents}
        columns={columnsCourse}
        onRowSelectionModelChange={handleDelete}
        checkboxSelection
        onCellDoubleClick={handleCellClick}
      />

        <Button
                 
                  
                 onClick={()=>handleErase()}
                 variant="contained"
               >
                 - Borrar
               </Button>
    </div>
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




































