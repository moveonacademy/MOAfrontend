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
/* eslint-disable no-confusing-arrow */

/* eslint-disable no-unused-expressions */

/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */
import { ThemeProvider } from '@mui/styles'

import {   useState,useEffect } from 'react';
import Head from 'next/head';
import CircularProgress from '@mui/material/CircularProgress';
import dynamic from 'next/dynamic'
import MaterialTable from 'material-table';

import { Box, CardContent , Container,  Stack ,Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import {  useMoralis } from 'react-moralis';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {useDropzone} from 'react-dropzone'
const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE3YTEwQTE3MWIzNUUyYThkMTI2NTc0RjIzMDQ0N0U2NTJjMzBhYTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5MDgyMDc2Njg3MCwibmFtZSI6Ik1vdmVPbkFjYWRlbXkifQ.hJgbUMIjnyiHxNa8HLEGl9JLcbyq3qoNj8Fkrj3X-RU'
import { createTheme } from '@mui/material';

import Alert from '@mui/material/Alert';
import { NFTStorage } from 'nft.storage'



const mytheme =  createTheme({
});

const PdfViewer= dynamic(() => import("./PdfViewer"), {
  ssr: false,
});

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
const Programs = () => {
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

const {Moralis}=useMoralis()
  const [change, ] = useState(false);

  const [,setStateID]=useState(null)

  let fixedOptions=[]
  const [value, setValue] = useState([...fixedOptions]);
  const handleCellClick = async (event, clickedRow) => {

    
          const query = new Moralis.Query("Programs");
          query.equalTo("uid",clickedRow.id)
  
          let res=await query.first()
          setStateID(clickedRow.id)
          console.log(JSON.stringify(res))
          setValue(res.attributes.unities)
      setValues({programName:res.attributes.programName,programDescription:res.attributes.programDescription,programLevel:res.attributes.programLevel,pdfCourse:res.attributes.pdfCourse})  
  
    }


  const fetchData = async () =>{

    try{
      let user=await Moralis.User.current()

  
      const query4 = new Moralis.Query("Courses");
      query4.equalTo("teacherEmail",user.get("email"))

      const query3 = new Moralis.Query("Teachers");
      query3.equalTo("teacherEmail",user.get("email"))
       const object3 = await query3.first();
       const object4 = await query4.find();

      const query2 = new Moralis.Query("Unities");
      if(!object3){
return 
      }
      query2.equalTo("supportEmail",object3.attributes.supportEmail)
     

       let courses=[]


      for(let i=0;i<object4.length;i++){

      for(let j=0;j<object4[i].attributes.programs.length;j++){
        const query = new Moralis.Query("Programs");
        query.equalTo("uid",object4[i].attributes.programs[j].value)
        query.limit(1000)
        const object = await query.find();

if(object){
  courses=[...courses,{
    id:object[j].attributes.uid,
    programName:object[j].attributes.programName,
    programDescription:object[j].attributes.programDescription,   
    programLevel:object[j].attributes.programLevel,
   }]
}
            
}
      }
      console.log("supportEmail3 "+JSON.stringify(courses))
      setRowsCourse([...courses])
    } 
    
    catch(err){
      console.log(err);
    }
  
  }
  
  const [selectedRow, ] = useState();

  useEffect(()=>{
    fetchData()
},[change]);

var [error,setError]=useState("")

var [imageLoading,setImageLoading]=useState(false)


  const [values, setValues] = useState({
    programName:"",
    programDescription: '',
    programLevel:"",
    pdfCourse:""
  });

  const columnsCourse = [
    { field: 'id', title: 'id' },
    { field: 'programName', title: 'Nombre' },

    { field: 'programLevel', title: 'Nivel' },

    { field: 'programDescription', title: 'Descripcion' },
  ];
   var [rowsCourse,setRowsCourse]=useState([])


  const {
    acceptedFiles,
  } = useDropzone(  { accept: '.pdf, .doc, .docx'} );



  useEffect(()=>{
    var imageFile=""
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
           imageFile = await new File([ binaryStr ], 'pdfPrograma.pdf', { type: 'pdf' })
  
           if(imageFile){
        
            const metadata = await client.store({
              name: "imagenPago",
              description: "pago",
              image: imageFile
            })
      
    await fetch("https://"+metadata.ipnft+".ipfs.dweb.link/metadata.json")
    .then(function (response) {
  
      return response.json();
    }).then(function (data) {
      name2 =  "pago"
      description = "capture pago"
      image = data.image
    })
    
    console.log("image "+image)
  let newimage = image.replace("ipfs://", "https://")
  let final=newimage.replace( "/pdfPrograma.pdf",".ipfs.dweb.link/pdfPrograma.pdf")
  setAvatar(final)
  setImageLoading(false)
  
                }
          
        }
  
        reader.readAsArrayBuffer(file)
      })
      
  
    
    }
  
    },[acceptedFiles])
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
                Programas de Profesores
        
              </Typography>
             
              

              </div>
              
              {imageLoading? <CircularProgress />:<div>
              <p> Haga doble click en el programa para verlo</p>
           
    

   <CardContent>
     <Box
       sx={{
         alignItems: 'flex-start',
         display: 'flex',
         flexDirection: 'column'
       }}
     >
      {values.pdfCourse!==""?
      <div>
          <PdfViewer avatar={values.pdfCourse}/>
   
    </div>:null}
       
     </Box>
   </CardContent>
   </div>}
   
             
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
            <ThemeProvider theme={mytheme}>

    <MaterialTable
        title="Programas"
        columns={columnsCourse}
        icons={tableIcons}
        style={{height:500}}
        data={rowsCourse}

        rowStyle={{paddingTop:50}}
        onRowClick={handleCellClick}
        options={{  
          columnResizable:false,
          emptyRowsWhenPaging: false , 
               sorting: true,
          rowStyle: (row) =>
            row?.id === selectedRow?.id ? { background: "#e7e7e7" } : {},
        }}
        
      />     
             </ThemeProvider>
  

       {/*   <Button
                 
                  
                 onClick={handleErase}
                 variant="contained"
               >
                 - Delete
               </Button> */}
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

