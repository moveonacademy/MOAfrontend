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

import { useCallback,  useState,useEffect } from 'react';
import Head from 'next/head';
import CircularProgress from '@mui/material/CircularProgress';
import dynamic from 'next/dynamic'
import { Box, CardContent , Container, Stack,Typography} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DataGrid } from '@mui/x-data-grid';
import {  useMoralis } from 'react-moralis';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import Alert from '@mui/material/Alert';

const PdfViewer= dynamic(() => import("./PdfViewer"), {
  ssr: false,
});

const Programs = () => {
const [imageLoading,setImageLoading]=useState(false)
const {Moralis}=useMoralis()

const [values, setValues] = useState({
  programName:"",
  programDescription: '',
});

  const handleCellClick = useCallback(
    async (event) => {
      setImageLoading(true)
      console.log(JSON.stringify(event))  
          console.log(JSON.stringify(event.id))
    
          const query = new Moralis.Query("Aportes");
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
},[]);

const handleDelete = useCallback(
  (event) => {

  },
  []
);

var [avatar,setAvatar]=useState()




  const columnsCourse = [
    { field: 'id', headerName: 'id', width: 70 },
    { field: 'descargaName', headerName: 'Nombre', width: 200 },
    { field: 'descargaDescription', headerName: 'Descripcion', width: 200 },
  ];
   var [rowsCourse,setRowsCourse]=useState([])



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
          
        <Typography variant="h6">
                Ver Aportes
        
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
   </div>}
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

