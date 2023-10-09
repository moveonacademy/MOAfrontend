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
const Page = () => {
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




































