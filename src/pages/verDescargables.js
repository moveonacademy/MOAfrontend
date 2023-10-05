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
import {useDropzone} from 'react-dropzone'

import { useCallback,  useState,useEffect } from 'react';
import Head from 'next/head';
import CircularProgress from '@mui/material/CircularProgress';
import dynamic from 'next/dynamic'
import { Box, Button,CardContent ,  Container,Stack,  Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DataGrid } from '@mui/x-data-grid';
import {  useMoralis } from 'react-moralis';
import 'react-pdf/dist/Page/AnnotationLayer.css';
const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE3YTEwQTE3MWIzNUUyYThkMTI2NTc0RjIzMDQ0N0U2NTJjMzBhYTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5MDgyMDc2Njg3MCwibmFtZSI6Ik1vdmVPbkFjYWRlbXkifQ.hJgbUMIjnyiHxNa8HLEGl9JLcbyq3qoNj8Fkrj3X-RU'

import Alert from '@mui/material/Alert';
import { NFTStorage } from 'nft.storage'




const PdfViewer= dynamic(() => import("./PdfViewer"), {
  ssr: false,
});

const Programs = () => {
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

const {Moralis}=useMoralis()


const [values, setValues] = useState({
  programName:"",
  programDescription: '',
});
  const handleCellClick = useCallback(
    async (event) => {
      setImageLoading(true)

          const query = new Moralis.Query("Descargables");
          query.equalTo("uid",event.id)
  
          let res=await query.first()
          console.log(JSON.stringify(res))
          setAvatar(res.attributes.pdfDescargable)
      setValues({programName:res.attributes.descargaName,programDescription:res.attributes.descargaDescription})  
      setImageLoading(false)

    },
    []
  );

  const fetchData = async () =>{

    try{
      
      const query = new Moralis.Query("Descargables");   



      const object = await query.find();
       let courses=[]
     
       console.log("Descargables"+JSON.stringify(object))


      for(let i=0;i<object.length;i++){
        courses=[...courses,{
          id:object[i].attributes.uid,
          descargaName:object[i].attributes.descargaName,
          descargaDescription:object[i].attributes.descargaDescription,   
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
},[avatar]);

const handleDelete = useCallback(
  (event) => {
    console.log(event)

  },
  []
);

var [avatar,setAvatar]=useState()
var [imageLoading,setImageLoading]=useState(false)





  const columnsCourse = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'descargaName', headerName: 'Nombre', width: 200 },
    { field: 'descargaDescription', headerName: 'Descripcion', width: 200 },
  ];
   var [rowsCourse,setRowsCourse]=useState([])




   const {
    acceptedFiles,
    getRootProps,
    getInputProps
  } = useDropzone(  { accept: '.pdf, .doc, .docx'} );


  useEffect(()=>{
    var imageFile=""
    try{
      
    if(acceptedFiles.length>0){
      setImageLoading(true)
        let image=""
  
      acceptedFiles.forEach(async (file) => {
        const reader = new FileReader()
        
        reader.onabort = () =>  setImageLoading(false)
  
        reader.onerror = () =>  setImageLoading(false)
  
        reader.onload = async () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
           imageFile = await new File([ binaryStr ], 'pdfDescargable.pdf', { type: 'pdf' })
  
           if(imageFile){
        
            const metadata = await client.store({
              name: "descargable",
              description: "descargable",
              image: imageFile
            })
      
    await fetch("https://"+metadata.ipnft+".ipfs.dweb.link/metadata.json")
    .then(function (response) {
  
      return response.json();
    }).then(function (data) {
      name2 =  "descargable"
      description = "descargable"
      image = data.image
    })
    
    console.log("image "+image)
  let newimage = image.replace("ipfs://", "https://")
  let final=newimage.replace( "/pdfDescargable.pdf",".ipfs.dweb.link/pdfDescargable.pdf")
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
          Descargables 
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
          
        <Typography variant="h6">
                Ver Descargables
        
              </Typography>
          <Stack spacing={3}>
         
               
              {imageLoading? <CircularProgress />:<div>
   

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
   </div>}{
avatar?   <a
        href={avatar}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
              <Button
                 
                  
                 variant="contained"
               >Download .pdf file</Button>
      </a>
           :null  }
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
                  Todos los Descargables
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

