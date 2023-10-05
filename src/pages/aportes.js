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
import {useDropzone} from 'react-dropzone'

import { useCallback,  useState,useEffect } from 'react';
import Head from 'next/head';
import Save from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import dynamic from 'next/dynamic'
import { DataGrid } from '@mui/x-data-grid';
import {  useMoralis } from 'react-moralis';

import LoadingButton from '@mui/lab/LoadingButton';
import 'react-pdf/dist/Page/AnnotationLayer.css';
const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE3YTEwQTE3MWIzNUUyYThkMTI2NTc0RjIzMDQ0N0U2NTJjMzBhYTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5MDgyMDc2Njg3MCwibmFtZSI6Ik1vdmVPbkFjYWRlbXkifQ.hJgbUMIjnyiHxNa8HLEGl9JLcbyq3qoNj8Fkrj3X-RU'
import { Box, CardActions,CardContent,Button,TextField, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import Alert from '@mui/material/Alert';
import { NFTStorage } from 'nft.storage'


import styled from 'styled-components'


const PdfViewer= dynamic(() => import("./PdfViewer"), {
});

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

const {Moralis,user}=useMoralis()
  const [change, setChange] = useState(false);
  const [isLoading,setLoading]= useState(false)

  const [stateID,setStateID]=useState(null)

  const handleCellClick = useCallback(
    async (event) => {
      console.log(JSON.stringify(event))  
          console.log(JSON.stringify(event.id))
    
          const query = new Moralis.Query("Aportes");
          query.equalTo("uid",event.id)
  
          let res=await query.first()
          setStateID(event.id)
          console.log(JSON.stringify(res))
          setValue(res.attributes.unities)
      setValues({programName:res.attributes.aporteName,programDescription:res.attributes.aporteDescription})  
  
    },
    []
  );

  const fetchData = async () =>{

    try{
      
      const query = new Moralis.Query("Aportes");



      const object = await query.find();
       let courses=[]
     


      for(let i=0;i<object.length;i++){
        courses=[...courses,{
          id:object[i].attributes.uid,
          descargaName:object[i].attributes.aporteName,
          descargaDescription:object[i].attributes.aporteDescription,   
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
  const Courses=Moralis.Object.extend("Aportes")

   const course=new Courses()

   const query = new Moralis.Query("Aportes");


    query.equalTo("uid",stateID)
    let res=await query.first()

   if(res){
    if(values.programName!==""){

    res.set("aporteName",values.programName)
  } else{    setLoading(false)

    setError("Falta el nombre del Aporte")

    return
  }

  if(values.programDescription!==""){
    res.set("aporteDescription",values.programDescription)
  } else{   
     setLoading(false)

    setError("Falta la descripcion del Aporte")
    return
  }
  await res.save()
  setValues({programName:"",programDescription:"",programLevel:"",value:""})  
  setValue([])
  setChange(!change)  
  setLoading(false)

  return 
}


 
    if(values.programName===""){
      setLoading(false)

      setError("Falta el nombre del Aporte")
      return
    }
    if(values.programDescription===""){
      setLoading(false)

      setError("Falta la descripcion del Aporte")
      return
    }
   if(avatar.length>0) {
    course.set("pdfAporte",avatar)    

   }else{
    setLoading(false)

    setError("Falta el pdf del Aporte")
    return
   }

    course.set("aporteName",values.programName)       
    course.set("aporteDescription",values.programDescription)       
    course.set("supportEmail",user.get("email"))       
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
const [, setValue] = useState([...fixedOptions]);


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

  const columnsCourse = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'descargaName', headerName: 'Nombre', width: 200 },
    { field: 'descargaDescription', headerName: 'Descripcion', width: 200 },
  ];
   var [rowsCourse,setRowsCourse]=useState([])

   const [rowstoDelete, setRowsToDelete] = useState([]);

   async function handleErase(){ 

    for(let i=0;i<rowstoDelete.length;i++){
  
      const DataFiles = Moralis.Object.extend('Aportes');
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
    getRootProps,
    getInputProps
  } = useDropzone(  { accept: '.pdf, .doc, .docx'} );


  useEffect(()=>{

    try{
      
    if(acceptedFiles.length>0){
      setImageLoading(true)
        let image=""
  
        var imageFile=""
        var name=""   
         var description=""
      acceptedFiles.forEach(async (file) => {
        const reader = new FileReader()
        
        reader.onabort = () =>  setImageLoading(false)
  
        reader.onerror = () =>  setImageLoading(false)
  
        reader.onload = async () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
           imageFile = await new File([ binaryStr ], 'pdfAporte.pdf', { type: 'pdf' })
  
           if(imageFile){
        
            const metadata = await client.store({
              name: "aporte",
              description: "aporte",
              image: imageFile
            })
      
    await fetch("https://"+metadata.ipnft+".ipfs.dweb.link/metadata.json")
    .then(function (response) {
  
      return response.json();
    }).then(function (data) {
      name =  "pago"
      description = "capture pago"
      image = data.image
    })
    
  let newimage = image.replace("ipfs://", "https://")
  let final=newimage.replace( "/pdfAporte.pdf",".ipfs.dweb.link/pdfAporte.pdf")
  setAvatar(final)
  setImageLoading(false)
  
                }
          
        }
  
        reader.readAsArrayBuffer(file)
      })
      
  
    
    }

  }catch(e){
    setImageLoading(false)

    console.log(e.message)
  }
    },[acceptedFiles])
  return (
    <>
      <Head>
        <title>
          Aportes 
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
                Agregar Aporte
        
              </Typography>
              <TextField
                  fullWidth
                  label="Nombre del Aporte"
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
                  label="Descripcion del Aporte"
                  name="programDescription"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.programDescription}
                />  
             

              </div>
              
<Typography variant="h6">
                Agrega un Aporte
         
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
                  Agregar el Aportes

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
                  Todos los Aportes
                </Typography>
               
              </Stack>
            </Stack>
            <div style={{ height: 400, width: '100%' }}>
              
      <DataGrid
              onCellDoubleClick={handleCellClick}
            onRowSelectionModelChange={handleDelete}
            checkboxSelection
        rows={rowsCourse}
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

