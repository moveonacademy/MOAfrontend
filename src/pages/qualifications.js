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
import Save from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

import Alert from '@mui/material/Alert';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
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
  const [estudentsData,setStudents]=useState([])
  const [todosCursos,setTodosCursos]=useState([])
  const [unities,setUnities]=useState([])
  const [programs,setPrograms]=useState([])
  const [isLoading,setLoading]= useState(false)

  const [change, setChange] = useState(false);
  var [activityText,setActivity]=useState("")

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
}





      let programs2= await query3.first()
      let student= await query2.find()
      
      console.log(student)
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

  for(let i=0;i<programs2.attributes.unities.length;i++){ 

    unities2=[...unities2,{
      id:i,
      label:programs2.attributes.unities[i].label,
      value:programs2.attributes.unities[i].value,
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
    
console.log("students "+JSON.stringify(students))

const query55 = new Moralis.Query("Unities");
query55.equalTo("uid",unities2[0].value)
let object55= await query55.first()
console.log("object55 "+JSON.stringify(object55.attributes.unityCompetencia))
if(object55){
  setActivity(object55.attributes.unityCompetencia)
}
      setUnities([...unities2])
      setPrograms([...programas])
      setStudents([...students])
      setTodosCursos([...cursos])

      const query5 = new Moralis.Query("Qualifications");
      
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
  const handleChange = useCallback(
   async (event) => {     
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));

        if(event.target.name==="courseName"){
          const query = new Moralis.Query("Courses");
          console.log("event.target.value "+JSON.stringify(event.target.value))
          console.log("event.target.value "+JSON.stringify(event.target.name))
          query.equalTo("courseName",event.target.value)
          let res=await query.first()
          console.log("res "+JSON.stringify(res))

          setPrograms([...res.attributes.programs])
          const query2 = new Moralis.Query("Programs");
          console.log("res2.attributes.unities[0].value "+JSON.stringify(res.attributes.programs[0].value))

          await query2.equalTo("uid",parseFloat(res.attributes.programs[0].value))
          let res2=await query2.first()
          if(res2){

            setUnities([...res2.attributes.unities])
          const query55 = new Moralis.Query("Unities");
          query55.equalTo("uid",parseFloat(res2.attributes.unities[0].value))
          let object55= await query55.first()
          if(object55){
            setActivity(object55.attributes.unityCompetencia)
          }
          }

          
          const query3 = new Moralis.Query("Students");

           query3.equalTo("studentCourse",event.target.value.toString())
          let res3=await query3.find()

          if(res3){
           let results=[]
          for(let j=0;j<res3.length;j++){
            results=[...results,{label:res3[j].attributes.studentEmail,value:res3[j].attributes.studentEmail} ]
          }
          
setStudents([...results])

          }

          return
        }

       
        if(event.target.name==="programName"){
          console.log("courseName "+event.target.value)
          const query = new Moralis.Query("Programs");
          await query.equalTo("uid",parseFloat(event.target.value))
          let res=await query.first()
          if(res){
            setUnities([...res.attributes.unities])
            const query55 = new Moralis.Query("Unities");
            query55.equalTo("uid",parseFloat(res.attributes.unities[0].value))
            let object55= await query55.first()
            console.log("object55 "+JSON.stringify(object55))
  
            if(object55){
              setActivity(object55.attributes.unityCompetencia)
            }
          }
        
          
          return
        }
        if(event.target.name==="unityName"){
          const query55 = new Moralis.Query("Unities");
          console.log("uid "+JSON.stringify(event.target.value))

          query55.equalTo("uid",parseFloat(event.target.value))
          let object55= await query55.first()
          console.log("object55 "+JSON.stringify(object55))

          if(object55){
            console.log("object55 "+JSON.stringify(object55.attributes.unityCompetencia))

            setActivity(object55.attributes.unityCompetencia)
          }
          
        }
    },
    []
  );

  const handleChangeNumber = useCallback(
    async (event) => {     
   
        
 
         const regex = /^[0-9\b]+$/;
         if (event.target.value < 21&&( event.target.value === "" || regex.test(event.target.value))) {
          setValues((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
          }));         }
 
     },
     []
   );
  const [stateID,setStateID]=useState(null)

  
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

const [error,setError]=useState('')
const handleNotas=async ()=>{
  setError("")
  setLoading(true)
  const Courses=Moralis.Object.extend("Qualifications")

   const course=new Courses()

   const query = new Moralis.Query("Qualifications");


    query.equalTo("uid",stateID)
    let res=await query.first()
console.log(res)
   if(res){
        if(values.notaComportamiento!==""){

          res.set("notaComportamiento",values.notaComportamiento)
        } else {
          
  setLoading(false)
        setError("Falta la nota Comportamiento")
        return
      }

      if(values.notaTareas1!==""){
        
        res.set("notaTareas1",values.notaTareas1) 
      }else {  setLoading(false)

        setError("Falta la descripcion del programa")
        return
      }
  
  if(values.notaEscritura1!==""){
    
    res.set("notaEscritura1",values.notaEscritura1) 
  } else {
    setError("Falta la notaEscritura1 del programa")
    return
  }
  
  if(values.notaEscritura2!==""){
    
    res.set("notaEscritura2",values.notaEscritura2) 
  }else {  setLoading(false)

    setError("Falta la notaEscritura2 del programa")
return
  }
  
  if(values.notaEscritura3!==""){
    
    res.set("notaEscritura3",values.notaEscritura3) 
  }else {  setLoading(false)

    setError("Falta la notaEscritura3 del programa")
    return
  }
  
  
  if(values.notaEscritura4!==""){
    
    res.set("notaEscritura4",values.notaEscritura4) 
  }else {
    setError("Falta la notaEscritura4 del programa")
    return
  }
  
  if(values.notaEscritura5!==""){
    
    res.set("notaEscritura5",values.notaEscritura5) 
  }else {  setLoading(false)

    setError("Falta la notaEscritura5 del programa")
    return
  }
  
  if(values.notaEscritura6!==""){
    
    res.set("notaEscritura6",values.notaEscritura6) 
  }else {  setLoading(false)

    setError("Falta la notaEscritura6 del programa")
    return
  } 

  if(values.notaLectura1!==""){
    
    res.set("notaLectura1",values.notaLectura1) 
  }else {  setLoading(false)

    setError("Falta la notaLectura1 del programa")
    return
  } 
  
  if(values.notaLectura2!==""){
    
    res.set("notaLectura2",values.notaLectura1) 
  }else {  setLoading(false)

    setError("Falta la notaLectura2 del programa")
    return
  } 
  
  
  if(values.notaLectura3!==""){
    
    res.set("notaLectura3",values.notaLectura1) 
  }else {  setLoading(false)

    setError("Falta la notaLectura3 del programa")
    return
  } 
  
  
  if(values.notaLectura4!==""){
    
    res.set("notaLectura4",values.notaLectura4) 
  }else {  setLoading(false)

    setError("Falta la notaLectura4 del programa")
    return
  } 
  
  
  if(values.notaLectura5!==""){
    
    res.set("notaLectura5",values.notaLectura5) 
  }else {  setLoading(false)

    setError("Falta la notaLectura5 del programa")
    return
  } 
  
  if(values.notaLectura6!==""){
    res.set("notaLectura6",values.notaLectura6) 
  }else {
    setError("Falta la notaLectura6")
    return
  } 
  
  if(values.notaEscucha1!==""){
    res.set("notaEscucha1",values.notaEscucha1) 
  }else {  setLoading(false)

    setError("Falta la notaEscucha1 del programa")
    return
  } 
  
  if(values.notaEscucha2!==""){
    res.set("notaEscucha2",values.notaEscucha2) 
  }else {  setLoading(false)

    setError("Falta la notaEscucha2 del programa")
    return
  } 
  
  if(values.notaEscucha3!==""){
    res.set("notaEscucha3",values.notaEscucha3) 
  }else {  setLoading(false)

    setError("Falta la notaEscucha3 del programa")
    return
  } 
  
  if(values.notaEscucha4!==""){
    res.set("notaEscucha4",values.notaEscucha4) 
    
  }else {  setLoading(false)

    setError("Falta la notaEscucha4 del programa")
    return
  } 
  
  
  if(values.notaEscucha5!==""){
    res.set("notaEscucha5",values.notaEscucha5) 
  }else {  setLoading(false)

    setError("Falta la notaEscucha5")
    return
  } 
  
  if(values.notaEscucha5!==""){
    res.set("notaEscucha5",values.notaEscucha5) 
  }else {  setLoading(false)

    setError("Falta la notaEscucha5")
    return
  } 
  
  
  if(values.notaEscucha6!==""){
    res.set("notaEscucha6",values.notaEscucha6) 
  }else {  setLoading(false)

    setError("Falta la notaEscucha6 del programa")
    return
  } 
  
  if(values.notaHabla1!==""){
    res.set("notaHabla1",values.notaHabla1) 
  }else {  setLoading(false)

    setError("Falta la notaHabla1 del programa")
    return
  } 
  
  if(values.notaHabla2!==""){
    res.set("notaHabla2",values.notaHabla2) 
  }else {  setLoading(false)

    setError("Falta la notaHabla2")
    return
  } 
  
  if(values.notaHabla3!==""){
    res.set("notaHabla3",values.notaHabla3) 
  }else {  setLoading(false)

    setError("Falta la notaHabla3")
    return
  } 
  
  if(values.notaHabla4!==""){
    res.set("notaHabla4",values.notaHabla4) 
  } else {  setLoading(false)

    setError("Falta la notaHabla4 ")
    return
  } 
  
  if(values.notaHabla5!==""){
    res.set("notaHabla5",values.notaHabla5) 
  } else {  setLoading(false)

    setError("Falta la notaHabla5 ")
    return
  } 
  
  if(values.notaHabla6!==""){
    res.set("notaHabla6",values.notaHabla6) 
  } else {  setLoading(false)

    setError("Falta la notaHabla6 ")
    return
  } 
  
  if(values.courseName!==""){
    res.set("courseName",values.courseName) 
  } else {  setLoading(false)

    setError("Falta la courseName ")
    return
  } 
  
  if(values.unityName!==""){
    res.set("unityName",values.unityName) 
  } else {  setLoading(false)

    res.set("unityName",unities[0].label) 

  } 

console.log('exito')
  await res.save()

  setLoading(false)



  setValues({notaLectura6:"",notaLectura5:"",notaLectura4:"",notaLectura3:"",
  notaLectura2:"",notaLectura1:"",notaEscritura6:"",notaEscritura5:"",
  notaEscritura4:"",notaEscritura3:"",notaEscritura2:"",notaEscritura1:"",
  notaTareas1:"",notaComportamiento:"",notaEscucha6:"",notaEscucha5:"",
  notaEscucha4:"",notaEscucha3:"",notaEscucha2:"",notaEscucha1:"",
  notaHabla6:"",notaHabla5:"",notaHabla4:"",notaHabla3:"",notaHabla2:"",notaHabla1:""})  


  setChange(!change)

  return 
  
} else {
  
   
  const userMetadata = await magic.user.getMetadata();
  console.log(" test"+user.get("email"))

  if(user.get("email")){
    course.set("teacherEmail",user.get("email"))       
  } else {  setLoading(false)

    setError("Falta el teacherEmail")

    return
  } 
  if(values.studentEmail){
    course.set("studentEmail",values.studentEmail)       
  } else {
    if(estudentsData[0]){

      course.set("studentEmail",estudentsData[0].value)    
    }else{  setLoading(false)


      setError("Falta el studiante")
      return
    }


  } 
  if(values.courseName!==""){
    course.set("courseName",values.courseName)       
  } else {  setLoading(false)

    setError("Falta la courseName")
    return
  } 
  if(values.programName!==""){
    course.set("programName",values.programName)       
  } else {
if(programs[0].label){
  course.set("programName",programs[0].label)       

}else{
  
  setLoading(false)

    setError("Falta el programa ")
    return
}
    
  } 
  console.log("values.unityName "+values.unityName)
  
  
  
  if(values.notaHabla6!==""){
    course.set("notaHabla6",values.notaHabla6)       
  } else {  setLoading(false)

    setError("Falta la notaHabla6 ")
    return
  } 
  
  if(values.notaHabla5!==""){
    course.set("notaHabla5",values.notaHabla5)       
  } else {  setLoading(false)

    setError("Falta la notaHabla5 ")
    return
  } 
  
  if(values.notaHabla4!==""){
    course.set("notaHabla4",values.notaHabla4)       
  } else {
    setError("Falta la notaHabla5 ")
    return
  } 
  
  if(values.notaHabla3!==""){
    course.set("notaHabla3",values.notaHabla4)       
  } else {  setLoading(false)

    setError("Falta la notaHabla3 ")
    return
  } 
  
  if(values.notaHabla2!==""){
    course.set("notaHabla2",values.notaHabla2)       
  } else {
    setError("Falta la notaHabla2 ")
    return
  } 
  
  if(values.notaHabla1!==""){
    course.set("notaHabla1",values.notaHabla1)    
  } else {  setLoading(false)

    setError("Falta la notaHabla1 ")
    return
  } 
  
  if(values.notaEscucha6!==""){
    course.set("notaEscucha6",values.notaEscucha6)       
  } else {  setLoading(false)

    setError("Falta la notaEscucha6 ")
    return
  } 
  
  if(values.notaEscucha5!==""){
    course.set("notaEscucha5",values.notaEscucha5)       
  } else {  setLoading(false)

    setError("Falta la notaEscucha5 ")
    return
  } 
  
  if(values.notaEscucha4!==""){
    course.set("notaEscucha4",values.notaEscucha4)       

  } else {  setLoading(false)

    setError("Falta la notaEscucha4 ")
    return
  } 
  
  
  if(values.notaEscucha3!==""){
    course.set("notaEscucha3",values.notaEscucha4)       

  } else {  setLoading(false)

    setError("Falta la notaEscucha3 del programa")
    return
  } 
  
  if(values.notaEscucha2!==""){
    course.set("notaEscucha2",values.notaEscucha3)       

  } else {  setLoading(false)

    setError("Falta la notaEscucha2 del programa")
    return
  } 
  
  if(values.notaEscucha1!==""){
    course.set("notaEscucha1",values.notaEscucha1)       

  } else {  setLoading(false)

    setError("Falta la notaEscucha1 del programa")
    return
  } 
  if(values.notaLectura5!==""){
    course.set("notaLectura5",values.notaLectura5)       

  } else {  setLoading(false)

    setError("Falta la notaLectura5 del programa")
    return
  } 
  if(values.notaLectura4!==""){
    course.set("notaLectura4",values.notaLectura5)       

  } else {  setLoading(false)

    setError("Falta la notaLectura4 del programa")
    return
  } 
      
      if(values.notaLectura3!==""){
        course.set("notaLectura3",values.notaLectura3)       

      } else {  setLoading(false)

         setError("Falta la notaLectura3 del programa")
         return
      } 
      
      if(values.notaLectura2!==""){
        course.set("notaLectura2",values.notaLectura2)       

      } else {  setLoading(false)

        setError("Falta la notaLectura2 del programa")
        return
      } 
      
      if(values.notaLectura1!==""){
        course.set("notaLectura1",values.notaLectura1)       

      } else {  setLoading(false)

        setError("Falta la notaLectura1 del programa")
        return
      } 
  
      
      if(values.notaEscritura6!==""){
        course.set("notaEscritura6",values.notaEscritura6)       

      } else {  setLoading(false)

        setError("Falta la notaEscritura6 del programa")
        return
      } 
      
      if(values.notaEscritura5!==""){
        course.set("notaEscritura5",values.notaEscritura5)       

      } else {  setLoading(false)

        setError("Falta la notaEscritura5 del programa")
        return
      } 
          
      if(values.notaEscritura4!==""){
        course.set("notaEscritura4",values.notaEscritura5)       

      } else {  setLoading(false)

        setError("Falta la notaEscritura4 del programa")
        return
      } 
      
      
      if(values.notaEscritura3!==""){
        course.set("notaEscritura3",values.notaEscritura3)       

      } else {  setLoading(false)

        setError("Falta la notaEscritura3 del programa")
        return
      } 
      
      
      if(values.notaEscritura2!==""){
        course.set("notaEscritura2",values.notaEscritura2)       

      } else {  setLoading(false)

        setError("Falta la notaEscritura2 del programa")
        return
      } 
      
      if(values.notaEscritura1!==""){
        course.set("notaEscritura1",values.notaEscritura1)       

      } else {  setLoading(false)

        setError("Falta la notaEscritura1 del programa")
        return
      }      
        
      if(values.notaComportamiento!==""){
        course.set("notaComportamiento",values.notaComportamiento)       
      } else {  setLoading(false)

        setError("Falta el notaComportamiento del programa")
        return
      }    
      
      if(values.notaTareas1!==""){
        course.set("notaTareas1",values.notaTareas1)       

      } else {  setLoading(false)

        setError("Falta el notaTareas1 del programa")
        return
      }    
      
  
      if(values.unityName!==""){
        course.set("unityName",values.unityName) 
              

      } else {
        if(unities[0]) {
          course.set("unityName",unities[0].label) 

        } else {
          setLoading(false)

          setError("Falta el Nombre de la unidad ")
          return
        }

      }    
      
       let uniqueID=parseInt((Date.now()+ Math.random()).toString())

      course.set("uid",uniqueID)
  
       
      await course.save()
      setLoading(false)


      setValues({ unityName: '',programName: '',courseName: '',notaLectura6:"",notaLectura5:"",notaLectura4:"",notaLectura3:"",
      notaLectura2:"",notaLectura1:"",notaEscritura6:"",notaEscritura5:"",
      notaEscritura4:"",notaEscritura3:"",notaEscritura2:"",notaEscritura1:"",
      notaTareas1:"",notaComportamiento:"",notaEscucha6:"",notaEscucha5:"",
      notaEscucha4:"",notaEscucha3:"",notaEscucha2:"",notaEscucha1:"",
      notaHabla6:"",notaHabla5:"",notaHabla4:"",notaHabla3:"",notaHabla2:"",notaHabla1:"" }) 

      }
      
  setChange(!change)

    }

    const [rowstoDelete, setRowsToDelete] = useState([]);

   async function handleErase(){ 
console.log('rows '+JSON.stringify(rowstoDelete))
    for(let i=0;i<rowstoDelete.length;i++){
  
      const DataFiles = Moralis.Object.extend('Qualifications');
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

  const handleDelete = useCallback(
    (event) => {
      console.log(event)
  
  setRowsToDelete(event)
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
                  Add Qualifications
                </Typography>
                
              </Stack>
                  <TextField
                  fullWidth
                  label="Seleccione Curso"
                  name="courseName"
                  onChange={handleChange}
                  required
                  select
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.courseName}
                >
                  {[...todosCursos].map((option) => (
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
                  label="Seleccione Programa"
                  name="programName"
                  onChange={handleChange}
                  required
                  select
                  
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.programName}
                >
                  {programs.map((option) => (
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
                  label="Seleccione Unidad"
                  name="unityName"
                  onChange={handleChange}
                  required
                  select
                  
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.unityName}
                >
                  {unities.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
                
                <Typography variant="h6">
                  Competencia:
                </Typography><Box style={{height:100}}> 
                <Typography multiline style={{flex:1,paddingTop:5,paddingBottom:5}} variant="h7">
                  {activityText}
                </Typography>
                </Box>
              <TextField
              paragraph={true}
                  fullWidth
                  label="Select Student"
                  name="studentEmail"
                  onChange={handleChange}
                  required
                  select
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.studentEmail}
                >
                  {estudentsData.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
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

                  onChange={handleChangeNumber}
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
                  onChange={handleChangeNumber}
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
                  onChange={handleChangeNumber}
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
                  onChange={handleChangeNumber}
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
                  label="Gramatica y Estructura"
                  name="notaHabla5"
                  defaultValue={0}        type="number"

                  onChange={handleChangeNumber}
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
                  onChange={handleChangeNumber}
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
                  onChange={handleChangeNumber}
                  required         
                  type="number"

                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaEscucha1}
                />
              </Stack>
              <Stack spacing={1}>
              <TextField
                fullWidth
                label="Vocabulario"
                name="notaEscucha3"
                defaultValue={0}
                type="number"
                onChange={handleChangeNumber}
                required
                style={{
                  marginTop:10,
                  marginBottom:10
                }}
                value={values.notaEscucha3}
              /> 
              
           
            </Stack>
            <Stack spacing={1}>
            <TextField
              fullWidth
              label="Atencion"
              name="notaEscucha5"
              defaultValue={0}
              type="number"
              onChange={handleChangeNumber}
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
            onChange={handleChangeNumber}
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
                  label="Pronunciación"
                  name="notaLectura1"
                  onChange={handleChangeNumber}
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
                label="Prosodia"
                name="notaLectura2"
                onChange={handleChangeNumber}
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
              label="Comprensión"
              name="notaLectura3"
              onChange={handleChangeNumber}
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
            label="Presición"
            name="notaLectura4"
            onChange={handleChangeNumber}
            required
            defaultValue={0}
            type="number"
            style={{
              marginTop:10,
              marginBottom:10
            }}
            value={values.notaLectura4}
          /></Stack>
           <Stack>
             <TextField
              fullWidth
              label="Otro"
              name="notaLectura5"
              onChange={handleChangeNumber}
              required
              defaultValue={0}
              type="number"
              style={{
                marginTop:10,
                marginBottom:10
              }}
              value={values.notaLectura5}
            />  
              <TextField
              fullWidth
              label="Ritmo"
              name="notaLectura5"//revisar
              onChange={handleChangeNumber}
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
                  onChange={handleChangeNumber}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.notaEscritura1}
                />
                <TextField
                  fullWidth
                  label="Léxico"
                  name="notaEscritura2"
                  defaultValue={0}
                  type="number"
                  onChange={handleChangeNumber}
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
                  label="Gramática y Sintaxis"
                  name="notaEscritura3"
                  defaultValue={0}
                  type="number"
                  onChange={handleChangeNumber}
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
                onChange={handleChangeNumber}
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
                  label="Ortografía"
                  name="notaEscritura5"
                  defaultValue={0}
                  type="number"
                  onChange={handleChangeNumber}
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
                onChange={handleChangeNumber}
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
                  onChange={handleChangeNumber}
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
                  onChange={handleChangeNumber}
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
        {error!==""?  <Alert variant="outlined" severity="error">{error}</Alert>:null}
        <LoadingButton
                         fullWidth
                         size="large"
                         sx={{ mt: 3 }}
                         
        loadingPosition="start"
        startIcon={<Save />}
        onClick={handleNotas}
        style={{color:"black",borderColor:"black"}}
                         loading={isLoading} variant="outlined">
                  Agregar Notas

      </LoadingButton>
            <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        onCellDoubleClick={handleCellClick}
        checkboxSelection
        
        onRowSelectionModelChange={handleDelete}
        columns={columns}
      />
    </div>
          </Stack>
          
              <Stack  height={20}/>
              
        
          <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  onClick={handleErase}
                  onRowSelectionModelChange={handleDelete}

                  variant="contained"
                >
                  Delete Nota 
                </Button>
 
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
