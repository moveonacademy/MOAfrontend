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

/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-else-return */

/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */

import { useCallback,useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Save from '@mui/icons-material/Save';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import LoadingButton from '@mui/lab/LoadingButton';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Divider,Card,CardContent,  CardActions, } from '@mui/material';

import { subDays, subHours } from 'date-fns';
import { 
  
  CardMedia,
   Container, Stack,  Typography, Grid } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from '../sections/customer/customers-table';
import { applyPagination } from 'src/utils/apply-pagination';
import styled from 'styled-components'
import { useMoralis } from 'react-moralis';

import {useDropzone} from 'react-dropzone'
import { TextField} from '@mui/material';
const now = new Date();


import { NFTStorage } from 'nft.storage'

const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE3YTEwQTE3MWIzNUUyYThkMTI2NTc0RjIzMDQ0N0U2NTJjMzBhYTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5MTI0Nzg2MzkzMywibmFtZSI6IkJpemNsdWIifQ.r6KIrRNFH9P6iFyu5ZQraNWf0TFsw4979ENY_EYp_7c'
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

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

const data = [
  {
    id: '5e887ac47eed253091be10cb',
    address: {
      city: 'Cleveland',
      country: 'USA',
      state: 'Ohio',
      street: '2849 Fulton Street'
    },
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: 'carson.darrin@devias.io',
    name: 'Carson Darrin',
    phone: '304-428-3097'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    address: {
      city: 'Atlanta',
      country: 'USA',
      state: 'Georgia',
      street: '1865  Pleasant Hill Road'
    },
    avatar: '/assets/avatars/avatar-fran-perez.png',
    createdAt: subDays(subHours(now, 1), 2).getTime(),
    email: 'fran.perez@devias.io',
    name: 'Fran Perez',
    phone: '712-351-5711'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    address: {
      city: 'North Canton',
      country: 'USA',
      state: 'Ohio',
      street: '4894  Lakeland Park Drive'
    },
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subDays(subHours(now, 4), 2).getTime(),
    email: 'jie.yan.song@devias.io',
    name: 'Jie Yan Song',
    phone: '770-635-2682'
  },
  {
    id: '5e86809283e28b96d2d38537',
    address: {
      city: 'Madrid',
      country: 'Spain',
      name: 'Anika Visser',
      street: '4158  Hedge Street'
    },
    avatar: '/assets/avatars/avatar-anika-visser.png',
    createdAt: subDays(subHours(now, 11), 2).getTime(),
    email: 'anika.visser@devias.io',
    name: 'Anika2 Visser',
    phone: '908-691-3242'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    address: {
      city: 'San Diego',
      country: 'USA',
      state: 'California',
      street: '75247'
    },
    avatar: '/assets/avatars/avatar-miron-vitold.png',
    createdAt: subDays(subHours(now, 7), 3).getTime(),
    email: 'miron.vitold@devias.io',
    name: 'Miron Vitold',
    phone: '972-333-4106'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    address: {
      city: 'Berkeley',
      country: 'USA',
      state: 'California',
      street: '317 Angus Road'
    },
    avatar: '/assets/avatars/avatar-penjani-inyene.png',
    createdAt: subDays(subHours(now, 5), 4).getTime(),
    email: 'penjani.inyene@devias.io',
    name: 'Penjani Inyene',
    phone: '858-602-3409'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    address: {
      city: 'Carson City',
      country: 'USA',
      state: 'Nevada',
      street: '2188  Armbrester Drive'
    },
    avatar: '/assets/avatars/avatar-omar-darboe.png',
    createdAt: subDays(subHours(now, 15), 4).getTime(),
    email: 'omar.darobe@devias.io',
    name: 'Omar Darobe',
    phone: '415-907-2647'
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    address: {
      city: 'Los Angeles',
      country: 'USA',
      state: 'California',
      street: '1798  Hickory Ridge Drive'
    },
    avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
    createdAt: subDays(subHours(now, 2), 5).getTime(),
    email: 'siegbert.gottfried@devias.io',
    name: 'Siegbert Gottfried',
    phone: '702-661-1654'
  },
  {
    id: '5e8877da9a65442b11551975',
    address: {
      city: 'Murray',
      country: 'USA',
      state: 'Utah',
      street: '3934  Wildrose Lane'
    },
    avatar: '/assets/avatars/avatar-iulia-albu.png',
    createdAt: subDays(subHours(now, 8), 6).getTime(),
    email: 'iulia.albu@devias.io',
    name: 'Iulia Albu',
    phone: '313-812-8947'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    address: {
      city: 'Salt Lake City',
      country: 'USA',
      state: 'Utah',
      street: '368 Lamberts Branch Road'
    },
    avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
    createdAt: subDays(subHours(now, 1), 9).getTime(),
    email: 'nasimiyu.danai@devias.io',
    name: 'Nasimiyu Danai',
    phone: '801-301-7894'
  }
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  var {Moralis,user}=useMoralis()

  const payments = [
    {
      value: 'pagoTotal',
      label: 'pagoTotal'
    },
    {
      value: 'cuotas',
      label: 'cuotas'
    },
  ];
  var [avatar,setAvatar]=useState()
  const {
    acceptedFiles,
    getRootProps,
    getInputProps
  } = useDropzone(  { accept: '.pdf, .doc, .docx'} );
  const [datePayment, setDatePayment] = useState(dayjs(Date.now()));
  const [error,setError]=useState('')

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);


  const [values, setValues] = useState({
    referencia:"",
    bankName: '',
    courseName: '',
    cedula:"",
    paymentType:"",
    amount:""
  });

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );
  const [isLoading,setLoading]= useState(false)
  var [paymentPending,setPaymentPending]=useState("0")

  var [courses,setCourses]=useState([])

  const fetchCourse = async () =>{

    try{
      console.log("Entro")
       

    const query = new Moralis.Query("Students");
query.equalTo("studentEmail",user.get("email"))
      const object = await query.find();

    
      console.log("studentCourse "+JSON.stringify(object))
    let studiantes=[]
      for(let i=0;i<object.length;i++){
        
        studiantes=[...studiantes,{
          label:object[i].attributes.studentCourse,
          value:object[i].attributes.studentCourseId,

         }]
       
          
      }
console.log("Cursos "+JSON.stringify(studiantes))
      setCourses([...studiantes])


      
    } 
    catch(err){
      console.log(err);
    }
  
  }
  const [stateID,]=useState(null)

const handlePago =async ()=>{
  try{
  setLoading(true)
  const Courses=Moralis.Object.extend("Payments")
 
  const userMetadata = await magic.user.getMetadata();

   const course=new Courses()

   const query = new Moralis.Query("Payments");


    query.equalTo("uid",stateID)
    let res=await query.first()

   if(res){
    if(user.get("email")===""){
    setLoading(false)

    setError("Falta el usuario del curso")
    return
  }else{
    res.set("studentEmail",user.get("email"))       

  }
  if(values.courseName===""){
    setLoading(false)

    setError("Falta el nombre del curso")
    return
  }else{    
          const query2 = new Moralis.Query("Courses");

          query2.equalTo("uid",values.studentCourse)
          let res2=await query2.first()
    res.set("courseName",res2.attributes.courseName)

    res.set("courseId",values.studentCourse)
   
  }
  if(values.bankName===""){
    setLoading(false)

    setError("Falta  el nombre del banco")
    return
  }
  if(values.amount===0){
    setLoading(false)

    setError("Falta el monto del pago")
    return
  }else{
    res.set("paymentAmount",values.amount)       

  }
  if(values.paymentType===""){
    
    res.set("paymentType",payments[0].label) 
  }else {   
    res.set("paymentType",values.paymentType)       

  }
  
  if(datePayment===""){
    

    setError("Falta la fecha del pago")
    return 
 }else {   
  res.set("datePayment",datePayment)       

  }
  
  if(avatar===""){
    

    setError("Falta la foto del pago")
    return 
 }else {   
  res.set("paymentImage",avatar)       

  }
  
 
  await res.save()
  setValues({programName:"",programDescription:"",programLevel:"",value:""})  
  setLoading(false)

  return 
}
console.log(values.courseName)


  
    if(user.get("email")===""){
      setLoading(false)

      setError("Falta el usuario del curso")
      return
    }else{
      course.set("studentEmail",user.get("email"))       

    }
    
    if(values.referencia===""){
      setLoading(false)

      setError("Falta la referencia del pago")
      return
    }else{
      course.set("referencia",values.referencia)       

    }
    if(values.courseName===""){
      setLoading(false)

      setError("Falta el nombre del curso")
      return
    }else{
      
  const query2 = new Moralis.Query("Courses");

  query2.equalTo("uid",values.studentCourse)
  let res2=await query2.first()

      course.set("courseId",values.courseName)       
      course.set("courseName",res2.attributes.courseName)

    }
    if(values.bankName===""){
      setLoading(false)

      setError("Falta  el nombre del banco")
      return
    }
    if(values.amount===0){
      setLoading(false)

      setError("Falta el monto del pago")
      return
    }else{
      course.set("paymentAmount",values.amount)       

    }
    if(values.paymentType===""){
      
      course.set("paymentType",payments[0].label) 
    }else {   
       course.set("paymentType",values.paymentType)       

    }
    console.log("llego hasta aqui0 "+datePayment)

    if(datePayment===""){
      

      setError("Falta la fecha del pago")
      return 
   }else {   
       course.set("datePayment",datePayment.toISOString())       

    }
    
    if(avatar===""){
      

      setError("Falta la foto del pago")
      return 
   }else {   
       course.set("paymentImage",avatar)       

    }
    if(values.cedula===""){
      

      setError("Falta la cedula del pago")
      return 
   }else {   
       course.set("cedula",values.cedula)       

    }
   
    let uniqueID=parseInt((Date.now()+ Math.random()).toString())
    course.set("uid",uniqueID)
console.log("llego hasta aqui")
    
    await course.save()

    console.log("llego hasta aqui2")


setError("")
setValues({paymentType:"",cedula:"",referencia:"",amount:"0",bankName:"",courseName:""})  
console.log("llego hasta aqui3")

setLoading(false)
}catch (err){
  console.log(err.message)
  setError("error")

  setLoading(false)

}
}



async function getCoursePrice(value){
  const query = new Moralis.Query("Courses");
  console.log("res.attributes.coursePrice "+value)

  query.equalTo("uid",value)

  let res= await query.first()
  console.log("res.attributes.coursePrice "+res)

  console.log("res.attributes.coursePrice "+res)
setPaymentPending(res.attributes.coursePrice)
console.log("res.attributes.coursePrice "+res.attributes.coursePrice)

}
  const handleChange = useCallback(
    (event) => {
if(event.target.name==="courseName"){
  getCoursePrice(event.target.value)
}
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );


  
  useEffect(()=>{
    fetchCourse()

  },[])
  var [imageLoading,setImageLoading]=useState(false)
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
           imageFile = await new File([ binaryStr ], 'avatar.png', { type: 'image' })
  
           if(imageFile){
        
            const metadata = await client.store({
              name: "imagenPago",
              description: "pago",
              image: imageFile
            })
      
  console.log("metadata.ipnft "+metadata.ipnft)
    await fetch("https://"+metadata.ipnft+".ipfs.dweb.link/metadata.json")
    .then(function (response) {

      return response.json();
    }).then(function (data2) {
      description = "capture pago"
      image = data2.image
    })
    
    console.log("image "+image)
let newimage = image.replace("ipfs://", "https://")
let final=newimage.replace( "/avatar.png",".ipfs.dweb.link/avatar.png")
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
    <Card>
      <Head>
        <title>
          Pagos
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
                direction="column"
                justifyContent="space-between"
              spacing={4}
            >   
              <Stack              
               justifyContent="space-between"
                direction="column"
                fullWidth
                spacing={1}>
                <Typography variant="h4">
                  Administrador de Pagos
                </Typography>
                <Grid
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                 <TextField
                  fullWidth
                  label="Numero de Referencia"
                  name="referencia"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.referencia}
                />
                <TextField
                  fullWidth
                  label="Cedula"
                  name="cedula"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.cedula}
                />
                 <TextField
                  fullWidth
                  label="Banco"
                  name="bankName"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.bankName}
                />
                
                <TextField
                  fullWidth
                  label="Monto de Deposito"
                  name="amount"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.amount}
                />
                 <TextField
                  fullWidth
                  label="Curso"
                  name="courseName"
                  onChange={handleChange}
                  required
                  select
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  value={values.courseName}
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
                
            <Typography style={{marginTop:5,marginBottom:5}} variant="h6">
                  Deuda Pendiente:{paymentPending}
                </Typography>
                  <TextField
                  fullWidth
                  label="Tipo de Pago"
                  name="paymentType"
                  onChange={handleChange}
                  required
                  select
                  
                  style={{
                    paddingTop:6,
                    marginBottom:10
                  }}
                  SelectProps={{ native: true }}
                  value={values.paymentType}
                >
                  {payments.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>   
                <LocalizationProvider dateAdapter={AdapterDayjs}>

<DateTimePicker
label="Fecha de Pago"
value={datePayment}
onChange={(newValue) => setDatePayment(newValue)}
/>   
</LocalizationProvider>    
                </Grid>
              </Stack><Card>
   
   <Divider />
   {

   }
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
       <CardMedia
         image={avatar?avatar:"/assets/avatars/avatar-anika-visser.png"}
         sx={{
           height: 180,
           mb: 2,
           width: 180
         }}
       />
    
     </Box>
   </CardContent>
   </div>}
 </Card>

            </Stack>
            
            <div>
              <LoadingButton
                         fullWidth
                         size="large"
                         sx={{ mt: 3 }}
                         
        loadingPosition="start"
        startIcon={<Save />}
        onClick={handlePago}
        style={{color:"black",borderColor:"black"}}
                         loading={isLoading} variant="outlined">
                  Agregar Pago

      </LoadingButton>
      {error!==""?  <Alert variant="outlined" severity="error">{error}</Alert>:null}

              </div>    
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
  </Card>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
