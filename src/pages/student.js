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
import Checkbox from "@mui/material/Checkbox";
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import Head from 'next/head';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useCallback,  useState,useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Save from '@mui/icons-material/Save';
import { DataGrid } from '@mui/x-data-grid';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Box, Container,TextField, Button, Stack ,Typography } from '@mui/material';
const top100Films = [
  { title: "Ingles", valuesLenguage: "Ingles" },
  { title: "Italiano", valuesLenguage: "Italiano" },
  { title: "Español", valuesLenguage: "Español" },
  { title: "Aleman", valuesLenguage: "Aleman" },
];
import dayjs from 'dayjs';
import { useMoralis } from 'react-moralis';
const Page = () => {
  

const {Moralis,user}=useMoralis()
const procedence=[
  {
    label:"Amigos",
    value:"Amigos"
  }, {
    label:"Aviso Externo",
    value:"Aviso Externo"
  },
  {
    label:"Correo",
    value:"Correo"
  }, {
    label:"Dueño",
    value:"Dueño"
  }, {
    label:"Familiares",
    value:"Familiares"
  },
  {
    label:"Influencers",
    value:"Influencers"
  }, {
    label:"Profesor",
    value:"Profesor"
  }, {
    label:"Radio",
    value:"Radio"
  },  {
    label:"Whatsapp",
    value:"Whtasapp"
  }, {
    label:"Sede Fisica",
    value:"Sede Fisica"
  },{
    label:"Youtube",
    value:"Youtube"
  },
  {
    label:"Twitter",
    value:"Twitter"
  },
  {
    label:"Instagram",
    value:"Instagram"
  },
  {
    label:"Instagram",
    value:"Instagram"
  },{
    label:"Facebook",
    value:"Facebook"
  },{
    label:"Twitter",
    value:"Twitter"
  } , {
    label:"Tiktok",
    value:"Tiktok"
  },{
    label:"Otro",
    value:"Otro"
  },
]
const columnsCourse = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'studentName', headerName: 'studentName', width: 200 },
  { field: 'studentEmail', headerName: 'studentEmail', width: 200 },
  { field: 'studentState', headerName: 'studentState', width: 200 },
  { field: 'studentCourse', headerName: 'studentCourse', width: 200 },

];  
var [courses,setCourses]=useState([])

  const fetchData = async () =>{

    try{
      
   
  const query2 = new Moralis.Query("Courses");
  query2.equalTo("teacherEmail",user.get("email"))

  const cursos = await query2.find();

  const query3 = new Moralis.Query("Teachers");
  query3.equalTo("teacherEmail",user.get("email"))
   const object3 = await query3.first();
console.log(cursos.length)
    const query = new Moralis.Query("Students");
    query.equalTo("supportEmail",object3.attributes.supportEmail)

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
  
      const DataFiles = Moralis.Object.extend('Students');
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

  const [dateBirthday, setDateBirtday] = useState(dayjs(Date.now()));
  const [, setDatePayment] = useState(dayjs(Date.now()));
  const [isLoading,setLoading]= useState(false)

async function handleStudent(){
  setError("")
  try {
    
    setLoading(true)


  const Student= Moralis.Object.extend("Students")
  const student= new Student()
  
    const query = new Moralis.Query("Students");

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
      if(values.studentOcupacion!==""){
  
        res.set("studentOcupacion",values.studentOcupacion)    
      
      } else{
        setError("Falta la ocupacion del alumno")
        setLoading(false)

        return
      }
      if(values.studentAddress!==""){
  
        res.set("studentAddress",values.studentAddress)    
      
      } else{
        setError("Falta la direccion del alumno")
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
     
  
  if(values.studentID!==""){
    
    res.set("studentID",values.studentID)
      
  }else{
    setError("Falta la cedula del alumno")
    setLoading(false)

    return
  }
  
  if(valuesLenguage){
    res.set("studentLenguage",valuesLenguage)
  
    
  }else{
    setError("Falta el lenguage del alumno")
    setLoading(false)

    return
  }
  
  
  if(values.studentGender){
    res.set("studentGender",values.studentGender)
  
    
  }else{
    res.set("studentGender","Male")
  
    
  }
  
  
  if(values.studentPhone){
    res.set("studentPhone",values.studentPhone)
  
  } else {
    setError("Falta el telefono del alumno")
    setLoading(false)

    return
  }
  
  
  
  if(values.studentCourse){
    const query2 = new Moralis.Query("Courses");

    query2.equalTo("uid",values.studentCourse)
    let res3=await query2.first()
    res.set("studentCourseId",values.studentCourse)

    res.set("studentCourse",res3.attributes.courseName)

  } else {
    if(courses[0].value){
      res.set("studentCourseId",courses[0].value)

      res.set("studentCourse",courses[0].label)
    }else{
    setError("Falta el Curso del alumno")
    setLoading(false)
return
    }

  
    return
  }
  
  if(values.studentAlergies){
    res.set("studentAlergies",values.studentAlergies)
  
    
  }else{
    setError("Falta las alergias del alumno")
    setLoading(false)

    return
  }
  
  
  if(dateBirthday){
    res.set("studentBirthday",dateBirthday.toString())
   
  }else{
    setError("Falta el cumpleaños del alumno")
    setLoading(false)

    return
  }
  
  
  if(values.studentComments){
    res.set("studentComments",values.studentComments)
   
  }else{
    setError("Falta los comentarios del alumno")
    setLoading(false)

    return
  }
  
  if(values.studentDegree){
    res.set("studentDegree",values.studentDegree)
   
  }else{
    setError("Falta el grado del alumno")
    setLoading(false)

    return
  }
  
  if(values.studentCity){
    res.set("studentCity",values.studentCity)
   
  }else{
    setError("Falta la ciudad del alumno")
    setLoading(false)

    return
  }
  if(values.studentState){
    res.set("studentState",values.studentState)
  } else{
    res.set("studentState","Inactivo")
  
  }
  if(values.studentInstitute){
    res.set("studentInstitute",values.studentInstitute)
   
  }else{
    setError("Falta el instituto del alumno")
    setLoading(false)

    return
  }  
 
   await res.save()
 
   setValues({studentEmail:"",paymentType:"",payment:"",studentLastname:"",studentName:"",studentInstitute:"",studentState:"",studentCity:"",studentComments:"",studentCourse:"",studentAlergies:"",studentID:"",studentPhone:"",studentGender:"",studentDegree:""})  
  
   setChange(!change)
   setLoading(false)

   return 
 }

    

    if(userMetadata){

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
    
    if(values.studentOcupacion!==""){

      student.set("studentOcupacion",values.studentOcupacion)    
    
    } else{
      setError("Falta la ocupacion del alumno")
      setLoading(false)

      return
    }
    if(values.studentAddress!==""){

      student.set("studentAddress",values.studentAddress)    
    
    } else{
      setError("Falta la direccion del alumno")
      setLoading(false)

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
   

if(values.studentID!==""){
  
    student.set("studentID",values.studentID)
    
}else{
  setError("Falta la cedula del alumno")
  setLoading(false)

  return
}

if(valuesLenguage){
  student.set("studentLenguage",valuesLenguage)

  
}else{
  setError("Falta el lenguage del alumno")
  setLoading(false)

  return
}


if(values.studentGender){
  student.set("studentGender",values.studentGender)
 
}else{
  student.set("studentGender","Male")
  
}


if(values.studentPhone){
  student.set("studentPhone",values.studentPhone)

} else {
  setError("Falta el telefono del alumno")
  setLoading(false)

  return
}


console.log("values.studentCourse "+values.studentCourse)
if(values.studentCourse){
  const query2 = new Moralis.Query("Courses");

  query2.equalTo("uid",values.studentCourse)
  let res2=await query2.first()
  student.set("studentCourse",res2.attributes.courseName)

  student.set("studentCourseId",values.studentCourse)



} else {
  student.set("studentCourseId",courses[0].course)

  student.set("studentCourse",courses[0].label)

}

if(values.studentAlergies){
  student.set("studentAlergies",values.studentAlergies)

  
}else{
  setError("Falta las alergias del alumno")
  setLoading(false)

  return
}


if(dateBirthday){
  student.set("studentBirthday",dateBirthday.toString())
 
}else{
  setError("Falta el cumpleaños del alumno")
  setLoading(false)

  return
}


if(values.studentComments){
  student.set("studentComments",values.studentComments)
 
}else{
  setError("Falta los comentarios del alumno")
  setLoading(false)

  return
}

if(values.studentDegree){
  student.set("studentDegree",values.studentDegree)
 
}else{
  setError("Falta el grado del alumno")
  setLoading(false)

  return
}

if(values.studentCity){
  student.set("studentCity",values.studentCity)
 
}else{
  setError("Falta la ciudad del alumno")
  setLoading(false)

  return
}
if(values.studentState){
  student.set("studentState",values.studentState)
} else{
  student.set("studentState","Inactivo")

}
if(values.studentInstitute){
  student.set("studentInstitute",values.studentInstitute)
 
}else{
  setError("Falta el instituto del alumno")
  setLoading(false)

  return
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

const estado = [

  {
    value: 'Inactivo',
    label: 'inactivo'
  },  {
    value: 'Activo',
    label: 'activo'
  },
];



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
const [valuesLenguage, setValueLenguage] = useState([])


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
          const query = new Moralis.Query("Students");
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
              course:res.attributes.course,
              studentID:res.attributes.studentID,
              studentCourse:res.attributes.studentCourse,
              studentAlergies:res.attributes.studentAlergies,
              procedencia:res.attributes.procedencia,
              studentState:res.attributes.studentState,
              studentComments:res.attributes.studentComments,
              studentPhone:res.attributes.studentPhone,
              studentDegree:res.attributes.studentDegree,
              studentName:res.attributes.studentName,studentEmail:res.attributes.studentEmail,studentAddress:res.attributes.studentAddress})  
        },
    []
  );

  return (
    <>
      <Head>
        <title>
           Estudiantes
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
                  Agregar Estudiante
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
                  label="Cedula"
                  name="studentID"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.studentID}
                />
                 <TextField
                  fullWidth
                  label="Ciudad"
                  name="studentCity"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.studentCity}
                />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DateTimePicker
                label="Fecha de Nacimiento"
                value={dateBirthday}
                onChange={(newValue) => setDateBirtday(newValue)}
                />   
               </LocalizationProvider>

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
                  label="Direccion"
                  name="studentAddress"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.studentAddress}
                />
                  <TextField
                  fullWidth
                  label="Ocupacion"
                  name="studentOcupacion"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.studentOcupacion}
                />
                 <TextField
                fullWidth
                label="Telefono"
                name="studentPhone"
                onChange={handleChange}
                required
                style={{
                  marginTop:10,
                  marginBottom:10
                }}
                value={values.studentPhone}
              />
                 <TextField
                fullWidth
                label="Alergias"
                name="studentAlergies"
                onChange={handleChange}
                required
                style={{
                  marginTop:10,
                  marginBottom:10
                }}
                value={values.studentAlergies}
              />
               <TextField
                fullWidth
                label="Comentarios"
                name="studentComments"
                onChange={handleChange}
                required
                style={{
                  marginTop:10,
                  marginBottom:10
                }}
                value={values.studentComments}
              /> 
              <TextField
              fullWidth
              label="Nivel Academico"
              name="studentDegree"
              onChange={handleChange}
              required
              style={{
                marginTop:10,
                marginBottom:10
              }}
              value={values.studentDegree}
            />  
              <TextField
            fullWidth
            label="Instituto"
            name="studentInstitute"
            onChange={handleChange}
            required
            style={{
              marginTop:10,
              marginBottom:10
            }}
            value={values.studentInstitute}
          />

<Autocomplete
      multiple

      id="checkboxes-tags-demo"

      options={top100Films}
      
      name="valuesLenguage"
            value={valuesLenguage}

      onChange={(event, newValue) => {
        setValueLenguage(newValue);
      }}

      disableCloseOnSelect

      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}

      style={{ width: 500 }}

      renderInput={(params) => (
        <TextField {...params} label="Lenguages" placeholder="Idiomas" />
      )}

    />    
            <TextField
                  fullWidth
                  label="Procedencia"
                  name="studentProcedence"
                  onChange={handleChange}
                  required
                  select
                  
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.studentProcedence}
                >
                  {procedence.map((option) => (
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
                  label="Estado"
                  name="studentState"
                  onChange={handleChange}
                  required
                  select
                  
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.studentState}
                >
                  {estado.map((option) => (
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
                  label="Curso"
                  name="studentCourse"
                  onChange={handleChange}
                  required
                  select
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  value={values.studentCourse}
                >
                  {courses.map((option) => (
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
        autoPageSize
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




































