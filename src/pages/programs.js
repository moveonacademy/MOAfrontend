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

/* eslint-disable no-unused-expressions */

/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import dynamic from 'next/dynamic';
import axios from 'axios';

import { useCallback,  useState,useEffect } from 'react';
import Head from 'next/head';
import Save from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';

import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

const PdfViewer= dynamic(() => import("./PdfViewer"), {
});
import { DataGrid } from '@mui/x-data-grid';
import {  useMoralis } from 'react-moralis';
import {  
  TextField,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Box,  CardContent,Container, CardActions,Button, Stack ,Typography } from '@mui/material';

import Autocomplete from '@mui/material/Autocomplete';
import {useDropzone} from 'react-dropzone'
const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE3YTEwQTE3MWIzNUUyYThkMTI2NTc0RjIzMDQ0N0U2NTJjMzBhYTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5MDgyMDc2Njg3MCwibmFtZSI6Ik1vdmVPbkFjYWRlbXkifQ.hJgbUMIjnyiHxNa8HLEGl9JLcbyq3qoNj8Fkrj3X-RU'

import Alert from '@mui/material/Alert';
import { NFTStorage } from 'nft.storage'

import Chip from '@mui/material/Chip';

import styled from 'styled-components'



const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isFocused) {
      return '#2196f3';
  }
  return '#eeeeee';
}
const Container2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;
const Programs = () => {
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

const {Moralis}=useMoralis()
  const [change, setChange] = useState(false);
  const [isLoading,setLoading]= useState(false)

  const [stateID,setStateID]=useState(null)

  const handleCellClick = useCallback(
    async (event) => {
      console.log(JSON.stringify(event))  
          console.log(JSON.stringify(event.id))
    
          const query = new Moralis.Query("Programs");
          query.equalTo("uid",event.id)
  
          let res=await query.first()
          setStateID(event.id)
          console.log(JSON.stringify(res))
          setValue(res.attributes.unities)
      setValues({programName:res.attributes.programName,programDescription:res.attributes.programDescription,programLevel:res.attributes.programLevel})  
  
    },
    []
  );

  const fetchData = async () =>{

    try{
      let user=await Moralis.User.current()

      const query2 = new Moralis.Query("Unities");
      const query = new Moralis.Query("Programs");
      query2.limit(1000)
       query2.equalTo("supportEmail",user.get("email"))
       const object2 = await query2.find();
    query.limit(1000)
      const object = await query.find();
       let courses=[]
     
       let res=[]
       
      for(let i=0;i<object2.length;i++){
        console.log(" testest "+object2[i].attributes.unityName)
        res=[ ...res,{
          label:object2[i].attributes.unityName,
          value:object2[i].attributes.uid
        }]
        }
        setLevels([...res])

      for(let i=0;i<object.length;i++){
        courses=[...courses,{
          id:object[i].attributes.uid,
          programName:object[i].attributes.programName,
          programDescription:object[i].attributes.programDescription,   
          programLevel:object[i].attributes.programLevel,
         }]
      }
      
      setRowsCourse([...courses])
    } 
    
    catch(err){
      console.log(err);
    }
  
  }
  
  
  useEffect(()=>{
    fetchData()
},[change]);

const handleDelete = useCallback(
  (event) => {
    console.log(event)

setRowsToDelete(event)
  },
  []
);


const [error,setError]=useState('')
var [avatar,setAvatar]=useState()
var [imageLoading,setImageLoading]=useState(false)

async function handleProgram(){
  setLoading(true)
  const Courses=Moralis.Object.extend("Programs")
  let user=await Moralis.User.current()

   const course=new Courses()

   const query = new Moralis.Query("Programs");


    query.equalTo("uid",stateID)
    let res=await query.first()

   if(res){
    if(values.programName!==""){

    res.set("programName",values.programName)
  } else{    setLoading(false)

    setError("Falta el nombre del programa")

    return
  }

  if(values.programDescription!==""){
    res.set("programDescription",values.programDescription)
  } else{    setLoading(false)

    setError("Falta la descripcion del programa")
    return
  }
  
  if(values.programLevel===""){
    res.set("programLevel","Kids") 
    unityLVL="Kids"
  }else {
    unityLVL=values.programLevel
    res.set("programLevel",values.programLevel) 
  }
  
  if(value!==""){
    res.set("unities",value)
  } else{
    setLoading(false)

    setError("Falta la unidad del programa")
    return
  }  
  await res.save()
  setValues({programName:"",programDescription:"",programLevel:"",value:""})  
  setValue([])
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
 
    if(values.programName===""){
      setLoading(false)

      setError("Falta el nombre del programa")
      return
    }
    if(values.programDescription===""){
      setLoading(false)

      setError("Falta la descripcion del programa")
      return
    }
    if(value.length===0){
      setLoading(false)

      setError("Falta la unidad del programa")
      return
    }
    if(values.programLevel===""){
      
      course.set("programLevel","Kids") 
    }else {

      course.set("programLevel",values.programLevel) 

    }
   if(avatar.length>0) {
    course.set("pdfCourse",avatar)    

   }else{
    setLoading(false)

    setError("Falta el pdf del programa")
    return
   }

    course.set("programName",values.programName)       
    course.set("programDescription",values.programDescription)       
    course.set("supportEmail",user.get("email"))       
    course.set("unities",value)   
    let uniqueID=parseInt((Date.now()+ Math.random()).toString())

    course.set("uid",uniqueID)

    
    await course.save()
    console.log("course")
    setChange(!change)
    setError("")
    setValues({programName:"",programDescription:"",programLevel:"",value:""})  
    setLoading(false)

}
let fixedOptions=[]
const [value, setValue] = useState([...fixedOptions]);
const [levels, setLevels] = useState([]);


  const [values, setValues] = useState({
    programName:"",
    programDescription: '',
    programLevel:"",
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

  const levelsValues = [
    { label: 'Kids', value: 'Kids' },    
    { label: 'Junior', value: 'Junior' },
    { label: 'Teens', value: 'Teens' },

    { label: 'Pro', value: 'Pro' },


  ];

  const columnsCourse = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'programName', headerName: 'Nombre', width: 200 },

    { field: 'programLevel', headerName: 'Nivel', width: 200 },

    { field: 'programDescription', headerName: 'Descripcion', width: 200 },
  ];
  var [rowsDate,]=useState([]) 
   var [rowsUnidad]=useState([])
   var [rowsCourse,setRowsCourse]=useState([])

   const [rowstoDelete, setRowsToDelete] = useState([]);

   async function handleErase(){ 

    for(let i=0;i<rowstoDelete.length;i++){
  
      const DataFiles = Moralis.Object.extend('Programs');
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

  const {
    acceptedFiles,
    getInputProps,
    getRootProps,
  } = useDropzone(  { accept: '.pdf, .doc, .docx'} );
  useEffect(() => {
    try {
      if (acceptedFiles.length > 0) {
        setImageLoading(true);
  
        const uploadPromises = acceptedFiles.map(async (file) => {
          const reader = new FileReader();
  
          return new Promise(async (resolve, reject) => {
            reader.onabort = () => {
              reject("File reading aborted");
            };
  
            reader.onerror = () => {
              reject("An error occurred while reading the file");
            };
  
            reader.onload = async () => {
              const binaryStr = reader.result;
              const imageFile = new File([binaryStr], "pdfPrograma.pdf", { type: "pdf" });
  
              if (imageFile) {
                try {
                  const metadata = await client.store({
                    name: "programa",
                    description: "programa",
                    image: imageFile,
                  });
  
                  console.log("metadata.ipnft " + metadata.ipnft);
                  const data = await Moralis.Cloud.run("setProgram",{metadata:metadata});
  
                  console.log("data " + data);
  
                  const description = "capture pago";
                  const image = data.image;
  
                  const newimage = image.replace("ipfs://", "https://");
                  const final = newimage.replace("/pdfPrograma.pdf", ".ipfs.dweb.link/pdfPrograma.pdf");
                 
                  setAvatar(final);
                  resolve(final);
                } catch (error) {
                  reject(error);
                }
              }
            };
  
            reader.readAsArrayBuffer(file);
          });
        });
  
        Promise.all(uploadPromises)
          .then((finalUrls) => {
            // Do something with the finalUrls if needed
            setImageLoading(false);
          })
          .catch((error) => {
            console.error("An error occurred:", error);
            setImageLoading(false);
          });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setImageLoading(false);
    }
  }, [acceptedFiles]);
  return (
    <>
      <Head>
        <title>
          Programas 
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
                Agrega Nuevo Programa
        
              </Typography>
              <TextField
                  fullWidth
                  label="Nombre del Programa"
                  name="programName"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.programName}
                />
                 
              
                <TextField
                  fullWidth
                  label="Descripcion del Programa"
                  name="programDescription"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.programDescription}
                />   <TextField
                fullWidth
                label="Nivel del Programa"
                name="programLevel"
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
  options={levels}
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
    <TextField {...params} label="Unidades" placeholder="Unidades" />
  )}
/>
             

              </div>
              
<Typography variant="h6">
                Agrega un pdf del Programa
         
              </Typography>   
              {imageLoading? <CircularProgress />:<div>
   <CardActions> 
     <section className="container">
             <div className="container">
              <Container2 {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Arrasta una foto o haz click para seleccionarla</p>
            </Container2>
    
   </div>
    
   </section>
   </CardActions>

   <CardContent>
     <Box
     style={{height:"100%",width:"100%"}}
       sx={{
         alignItems: 'flex-start',
         display: 'flex',

         flexDirection: 'column'
       }}
     >
      {avatar?
      <div>
        
          <PdfViewer avatar={avatar}/>
   
    </div>:null}
       
     </Box>
   </CardContent>
   </div>}
    <LoadingButton
                         fullWidth
                         size="large"
                         sx={{ mt: 3 }}
                         
        loadingPosition="start"
        startIcon={<Save />}
        onClick={handleProgram}
        style={{color:"black",borderColor:"black"}}
                         loading={isLoading} variant="outlined">
                  Agregar el Programa

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
                  Todos los Programas
                </Typography>
               
              </Stack>
            </Stack>
            <div style={{ height: 400, width: '100%' }}>
              
      <DataGrid
              onCellDoubleClick={handleCellClick}
            onRowSelectionModelChange={handleDelete}
            checkboxSelection
        rows={rowsCourse}
        autoPageSize
        columns={columnsCourse}
        
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

Programs.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Programs;

