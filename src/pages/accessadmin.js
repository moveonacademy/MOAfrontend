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
/* eslint-disable no-dupe-keys */

/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */

import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as PageLayout } from 'src/layouts/dashboard/layout';
import {  useMoralis } from 'react-moralis';
import { DataGrid } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';

import Save from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

import {
  Button,
  TextField,
} from '@mui/material';


import { useCallback, useState,useEffect } from 'react';


const Access = () => {

const {Moralis}=useMoralis()
var [rows,setRows]=useState([])
const fetchData = async () =>{

  try{
    
let rows2=[]

    const query = new Moralis.Query("Moderators");
    const object = await query.find();
    for(let i=0;i<object.length;i++){
      rows2=[...rows2,{
        id:object[i].attributes.uid,
        email:object[i].attributes.email,
        city:object[i].attributes.city,
        sedeName:object[i].attributes.sedeName,
        typeOfUser:object[i].attributes.typeOfUser
      
      }]
        
    }
    setRows(rows2)
  } 
  catch(err){
    console.log(err);
  }

}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'Email', width: 260 },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'sedeName', headerName: 'sedeName', width: 130 },
  { field: 'typeOfUser', headerName: 'typeOfUser', width: 130 },

];

const [isLoading,setLoading]= useState(false)
const [change, setChange] = useState(false);

useEffect(()=>{
  fetchData()
},[change]);
  
  const levelsValues = [{label:"MoveOnSchool",value:"moveOnSchool"},{label:"AfterSchool",value:"afterSchool"},{label:"Manager",value:"Manager"},{label:"Casa Matriz",value:"admin"}]

  const [values, setValues] = useState({
    sedeName:"",
    email: '',
    city: '',
    typeOfUser: '',
  });
  const [error,setError]=useState('')

  const [stateID,setStateID]=useState(null)
  async function addModerator(){
   
      
  setLoading(true)
    if(values.email===""){
      setError("Falta el email del moderador")
    }
   
      const Teacher=Moralis.Object.extend("Moderators")
      const teacher=new Teacher()

      const query = new Moralis.Query("Moderators");
      query.equalTo("uid",stateID)

        let res=await query.first()
      

        if(res){      
            if(values.sedeName){

          res.set("sedeName",values.sedeName)
        } else{
          setError("Falta el nombre de la sede")
          setLoading(false)

          return
        }
        if(values.email!==""){

          res.set("email",values.email)
        }   else{
          setError("Falta el correo")
          setLoading(false)

        }
        if(values.city!==""){

          res.set("city",values.city)
        }   else{         
           setLoading(false)

          setError("Falta la ciudad")
          return
        }
        if(values.typeOfUser!==""){
          
          res.set("typeOfUser",values.typeOfUser)
        } 
        await res.save()
        setValues({email:"",city:"",sedeName:""})  
        setLoading(false)


          setChange(!change)
          return 
        }
        if(values.sedeName===""){    
                setLoading(false)

          setError("Falta el nombre de la sede")
          return
        }
        if(values.email===""){  
                  setLoading(false)

          setError("Falta el correo ")
          return
        }

        teacher.set("email",values.email)
        teacher.set("sedeName",values.sedeName)

        if(values.city===""){

        teacher.set("city","merida")

        } else {
          
        teacher.set("city",values.city)
        
        }
        if(values.typeOfUser!==""){

          teacher.set("typeOfUser",values.typeOfUser)
        }  else{
        
          teacher.set("typeOfUser","moveOnSchool")
        }
        let uniqueID=parseInt((Date.now()+ Math.random()).toString())

        teacher.set("uid",uniqueID)
        await teacher.save()
      

      setValues({email:"",city:"",sedeName:""})  
      setChange(!change)
      setLoading(false)

   

    }
  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []  
  );
  
  const [rowstoDelete, setRowsToDelete] = useState([]);

  async function handleErase(){  
  
      for(let i=0;i<rowstoDelete.length;i++){
    
        const DataFiles = Moralis.Object.extend('Moderators');
        const query = new Moralis.Query(DataFiles);
       await query.equalTo("uid",rowstoDelete[i]);
        const count = await query.first();
  
        try {
  
          const file = await query.get(count.id);
          await file.destroy();
          setValues({email:"",city:"",sedeName:"",typeOfUser:""})  

        } catch (error2) {
          console.error('Error deleting file:', error2);
        }
   
      }
      
  setChange(!change)
    
    }

    
  const handleCellClick = useCallback(
    async (event) => {
    
          const query = new Moralis.Query("Moderators");
          query.equalTo("uid",event.id)

          let res=await query.first()
          setStateID(event.id)
      setValues({typeOfUser:event.row.typeOfUser,email:event.row.email,sedeName:event.row.sedeName,city:event.row.city,sedeName:res.attributes.sedeName})  

    },
    []
  );
  
  const handleDelete = useCallback(
    (event) => {
  
  setRowsToDelete(event)
    },
    []
  ); 




 return <>
    <Head>
      <title>
       Admin Access
      </title>
    </Head>
    
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Permisos
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
                <Grid
                xs={12}
                md={6}
              >
              <Typography variant="h6">
                Agrega nuevo Moderador
              </Typography>
              <TextField
                  fullWidth
                  label="Nombre de Sede"
                  name="sedeName"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.sedeName}
                />
                <TextField
                  fullWidth
                  label="Correo del moderador"
                  name="email"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.email}
                />
                 <TextField
                  fullWidth
                  label="Ciudad"
                  name="city"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop:10,
                    marginBottom:10
                  }}
                  value={values.city}
                />
  <TextField
                fullWidth
                label="Tipo de permiso"
                name="typeOfUser"
                onChange={handleChange}
                required
                select
                defaultValue={"moveOnSchool"}
                style={{
                  paddingTop:6,
                  marginBottom:10
                }}
                SelectProps={{ native: true }}
                value={values.typeOfUser}
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

              <LoadingButton
                         fullWidth
                         size="large"
                         onClick={addModerator}

                         sx={{ mt: 3 }}
                         
        loadingPosition="start"
        startIcon={<Save />}
        style={{color:"black",borderColor:"black"}}
                         loading={isLoading} variant="outlined">
                                        Agregar Permisos

      </LoadingButton>

                
                {error!==""?  <Alert variant="outlined" severity="error">{error}</Alert>:null}

              </Grid>
          
            </Grid>
          </div>
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
                  Moderators
                </Typography>
               
              </Stack>
            </Stack>
            <div style={{ height: 400, width: '100%' }}>
              
       <DataGrid
        rows={rows}
        onCellClick={handleCellClick}
        columns={columns}
        onRowSelectionModelChange={handleDelete}
        checkboxSelection
        />
   <Button
                 
                  
                 onClick={()=>handleErase()}
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
};

Access.getLayout = (access) => (
  <PageLayout>
    {access}
  </PageLayout>
);

export default Access;
