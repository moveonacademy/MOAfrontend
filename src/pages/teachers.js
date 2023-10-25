/* eslint-disable complexity */
/* eslint-disable arrow-spacing */
/* eslint-disable no-await-in-loop */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-spacing */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */

/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable array-callback-return */


/* eslint-disable no-loop-func */
/* eslint-disable no-inline-comments */
/* eslint-disable no-inline-comments */

import { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import LoadingButton from "@mui/lab/LoadingButton";

import Save from "@mui/icons-material/Save";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { DataGrid } from "@mui/x-data-grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid } from "@mui/material";
import Alert from "@mui/material/Alert";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useMoralis } from "react-moralis";
import { Magic } from "magic-sdk";
import { TextField,Box, Container,Stack, Typography, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import Checkbox from "@mui/material/Checkbox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const top100Films = [
  { title: "Ingles", valuesLenguage: "Ingles" },
  { title: "Italiano", valuesLenguage: "Italiano" },
  { title: "Español", valuesLenguage: "Español" },
  { title: "Aleman", valuesLenguage: "Aleman" },
];
const Page = () => {
  const [change, setChange] = useState(false);
  const { Moralis,user } = useMoralis();

  const columnsCourse = [
    { field: "id", headerName: "id", width: 70 },
    { field: "teacherName", headerName: "Nombre", width: 200 },
    { field: "teacherEmail", headerName: "Correo", width: 200 },
  ];
 

  const fetchData = async () => {
    try {
      
  
      const query2 = new Moralis.Query("Teachers");
      await query2.equalTo("supportEmail", user.get("email"));

      const object = await query2.find();
      let studiantes = [];
      for (let i = 0; i < object.length; i++) {
        studiantes = [
          ...studiantes,
          {
            id: object[i].attributes.uid,
            teacherName: object[i].attributes.teacherName,
            teacherEmail: object[i].attributes.teacherEmail,
          },
        ];
      }
      setRowsStudents([...studiantes]);
    } catch (err) {
      console.log(err);
    }
  };

  const [error, setError] = useState("");
  const [stateID, setStateID] = useState(null);

  const handleCellClick = useCallback(async (event) => {
    const query = new Moralis.Query("Teachers");
    query.equalTo("uid", event.id);

    let res = await query.first();
    setStateID(event.id);
    setDateBirtday(dayjs(res.attributes.teacherBirthday));
    let otro = [];
    for (let i = 0; i < res.attributes.teacherLenguage.length; i++) {
      console.log(res.attributes.teacherLenguage[i]);
      otro = [...otro, res.attributes.teacherLenguage[i]];
    }
    setContractStart(dayjs(res.attributes.teacherContractStart));
    setContractEnd(dayjs(res.attributes.teacherContractEnd));

    setValueLenguage([...otro]);

    setValues({
      teacherCity: res.attributes.teacherCity,
      teacherInstitute: res.attributes.teacherInstitute,
      teacherName: res.attributes.teacherName,
      teacherLastname: res.attributes.teacherLastname,
      teacherRif: res.attributes.teacherRif,
      teacherAlergias: res.attributes.teacherAlergias,
      teacherDegree: res.attributes.teacherDegree,
      teacherComments: res.attributes.teacherComments,
      teacherQualificationMOA: res.attributes.teacherQualificationMOA,
      teacherGender: res.attributes.teacherGender,
      teacherEmail: res.attributes.teacherEmail,
      teacherState: res.attributes.teacherState,
      teacherPhone: res.attributes.teacherPhone,
      teacherID: res.attributes.teacherID,
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [change]);
  const [isLoading, setLoading] = useState(false);

  async function handleTeacher() {
    setError("");
    try {
      setLoading(true);

      const Student = Moralis.Object.extend("Teachers");
      const student = new Student();
      
      const query = new Moralis.Query("Teachers");
        query.equalTo("uid", stateID);
      let res = await query.first();

      if (res) {
        res.set("supportEmail", user.get("email"));

        if (values.teacherName !== "") {
          res.set("teacherName", values.teacherName);
        } else {
          setError("Falta el nombre del profesor");
          setLoading(false);

          return;
        }

        if (values.teacherLastname !== "") {
          res.set("teacherLastname", values.teacherLastname);
        } else {
          setError("Falta el apellido del profesor");
          setLoading(false);

          return;
        }
        if (values.teacherRif !== "") {
          res.set("teacherRif", values.teacherRif);
        } else {
          setError("Falta el rif del profesor");
          setLoading(false);

          return;
        }

        if (valuesLenguage) {
          res.set("teacherLenguage", valuesLenguage);
        } else {
          setError("Falta los lenguajes del profesor");
          setLoading(false);

          return;
        }

        if (values.teacherID) {
          res.set("teacherID", values.teacherID);
        } else {
          setError("Falta la cedula del profesor");
          setLoading(false);

          return;
        }

        if (values.teacherCity) {
          res.set("teacherCity", values.teacherCity);
        } else {
          setError("Falta la ciudad del profesor");
          setLoading(false);

          return;
        }

        if (values.teacherDegree) {
          res.set("teacherDegree", values.teacherDegree);
        } else {
          setError("Falta el grado del profesor");
          setLoading(false);

          return;
        }

        if (values.teacherInstitute) {
          res.set("teacherInstitute", values.teacherInstitute);
        } else {
          setError("Falta el instituto del profesor");
          setLoading(false);

          return;
        }

        if (dateBirthday) {
          res.set("teacherBirthday", dateBirthday.toString());
        } else {
          setError("Falta el cumpleaños del profesor");
          setLoading(false);

          return;
        }

        if (values.teacherPhone) {
          res.set("teacherPhone", values.teacherPhone);
        } else {
          setError("Falta el telefono del profesor");
          setLoading(false);

          return;
        }

        if (values.teacherAlergias) {
          res.set("teacherAlergias", values.teacherAlergias);
        } else {
          setError("Falta las alergias del profesor");
          setLoading(false);

          return;
        }

        if (values.teacherEmail) {
          res.set("teacherEmail", values.teacherEmail);
        } else {
          setError("Falta el email del profesor");
          setLoading(false);

          return;
        }
        if (values.teacherComments) {
          res.set("teacherComments", values.teacherComments);
        } else {
          setError("Falta los comentarios del profesor");
          setLoading(false);

          return;
        }

        if (values.teacherQualificationMOA) {
          res.set("teacherQualificationMOA", values.teacherQualificationMOA);
        } else {
          setError("Falta la calificacion MOA del profesor");
          setLoading(false);

          return;
        }

       

        if (dateContractStart) {
          res.set("teacherContractStart", dateContractStart.toString());
        } else {
          setError("Falta el inicio del contrato del profesor");
          setLoading(false);

          return;
        }

        if (dateContractEnd) {
          res.set("teacherContractEnd", dateContractEnd.toString());
        } else {
          setLoading(false);

          setError("Falta el fin del contrato del profesor");
          return;
        }

        if (values.teacherGender) {
          res.set("teacherGender", values.teacherGender);
        } else {
          res.set("teacherGender", "Male");
        }

        if (values.teacherState) {
          res.set("teacherState", values.teacherState);
        } else {
          res.set("teacherState", "Inactivo");
        }

        await res.save();

        setValues({
          teacherState: "",
          teacherGender: "",
          teacherQualificationMOA: "",
          teacherComments: "",
          teacherEmail: "",
          teacherPhone: "",
          teacherDegree: "",
          teacherCity: "",
          teacherInstitute: "",
          teacherAlergias: "",
          teacherLastname: "",
          teacherName: "",
        });
        setChange(!change);
        setLoading(false);

        return;
      }
      student.set("supportEmail", user.get("email"));

      if (values.teacherName !== "") {
        student.set("teacherName", values.teacherName);
      } else {
        setError("Falta el nombre del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherLastname !== "") {
        student.set("teacherLastname", values.teacherLastname);
      } else {
        setError("Falta el apellido del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherRif !== "") {
        student.set("teacherRif", values.teacherRif);
      } else {
        setError("Falta el rif del profesor");
        setLoading(false);

        return;
      }

      if (valuesLenguage) {
        student.set("teacherLenguage", valuesLenguage);
      } else {
        setError("Falta los lenguajes del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherID) {
        student.set("teacherID", values.teacherID);
      } else {
        setError("Falta la cedula del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherCity) {
        student.set("teacherCity", values.teacherCity);
      } else {
        setError("Falta la ciudad del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherDegree) {
        student.set("teacherDegree", values.teacherDegree);
      } else {
        setError("Falta el grado del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherInstitute) {
        student.set("teacherInstitute", values.teacherInstitute);
      } else {
        setError("Falta el instituto del profesor");
        setLoading(false);

        return;
      }

      if (dateBirthday) {
        student.set("teacherBirthday", dateBirthday.toString());
      } else {
        setError("Falta el cumpleaños del profesor");
        setLoading(false);

        return;
      }
 
      if (values.teacherPhone) {
        student.set("teacherPhone", values.teacherPhone);
      } else {
        setError("Falta el telefono del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherAlergias) {
        student.set("teacherAlergias", values.teacherAlergias);
      } else {
        setError("Falta las alergias del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherEmail) {
        student.set("teacherEmail", values.teacherEmail);
      } else {
        setError("Falta el email del profesor");
        setLoading(false);

        return;
      }
      if (values.teacherComments) {
        student.set("teacherComments", values.teacherComments);
      } else {
        setError("Falta los comentarios del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherQualificationMOA) {
        student.set("teacherQualificationMOA", values.teacherQualificationMOA);
      } else {
        setError("Falta la calificacion MOA del profesor");
        setLoading(false);

        return;
      }

      if (dateContractStart) {
        student.set("teacherContractStart", dateContractStart.toString());
      } else {
        setError("Falta el inicio del contrato del profesor");
        setLoading(false);

        return;
      }

      if (dateContractEnd) {
        student.set("teacherContractEnd", dateContractEnd.toString());
      } else {
        setError("Falta el fin del contrato del profesor");
        setLoading(false);

        return;
      }

      if (values.teacherGender) {
        student.set("teacherGender", values.teacherGender);
      } else {
        student.set("teacherGender", "Male");
      }

      if (values.teacherState) {
        student.set("teacherState", values.teacherState);
      } else {
        student.set("teacherState", "Inactivo");
      }
      let uniqueID = parseInt((Date.now() + Math.random()).toString());
      student.set("uid", uniqueID);
      await student.save();
      setLoading(false)

      setError("");
      setChange(!change);
    } catch (e) {
      setError("Error del servidor");
      setLoading(false);

      console.log("error", e.message);
    }
  }

  const estado = [
    {
      value: "Activo",
      label: "activo",
    },
    {
      value: "Inactivo",
      label: "inactivo",
    },
  ];
  const genders = [
    {
      value: "Male",
      label: "male",
    },
    {
      value: "Female",
      label: "female",
    },
  ];

  var [rowsStudents, setRowsStudents] = useState([]);
  const [dateBirthday, setDateBirtday] = useState(null);
  const [dateContractStart, setContractStart] = useState(null);
  const [dateContractEnd, setContractEnd] = useState(null);
  const [rowstoDelete, setRowsToDelete] = useState([]);

  async function handleErase() {
    for (let i = 0; i < rowstoDelete.length; i++) {
      const DataFiles = Moralis.Object.extend("Teachers");
      const query = new Moralis.Query(DataFiles);
      await query.equalTo("uid", rowstoDelete[i]);
      const count = await query.first();

      try {
        const file = await query.get(count.id);
        await file.destroy();
      } catch (error2) {
        console.error("Error deleting file:", error2);
      }
    }

    setChange(!change);
  }

  const [date] = useState(null);
  const [valuesLenguage, setValueLenguage] = useState([]);

  const [values, setValues] = useState({
    teacherName: "",
    teacherEmail: "",
    teacherLastname: "",
    courseName: "",
    courseLevel: "",
    rif: "",
    instituto: "",
    teacherID: "",
    teacherGender: "",
    titulo: "",
    nacimiento: "",
    teacherLenguages: [],
    teacherAlergias: "",
    teacherInstitute: "",
    teacherCity: "",
    teacherContractEnd: "",
    teacherQualificationMOA: "",
    teacherContractStart: "",
    teacherBirthday: "",
    teacherState: "",
    teacherComments: "",
    teacherPhone: "",
    teacherDegree: "",
  });

  const handleChange = useCallback((event) => {
    console.log(event.target.name);
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleDelete = useCallback((event) => {
    console.log(event);

    setRowsToDelete(event);
  }, []);
  return (
    <>
      <Head>
        <title>Profesores</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <div>
                <Stack spacing={1}>
                  <Typography variant="h4">Agregar un Profesor</Typography>
                </Stack>

                <TextField
                  fullWidth
                  label="Nombre del Profesor"
                  name="teacherName"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherName}
                />

                <TextField
                  fullWidth
                  label="Apellido "
                  name="teacherLastname"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherLastname}
                />

                <TextField
                  fullWidth
                  label="Selecciona el Genero"
                  name="teacherGender"
                  onChange={handleChange}
                  required
                  select
                  style={{
                    paddingTop: 6,
                    marginBottom: 10,
                  }}
                  SelectProps={{ native: true }}
                  value={values.teacherGender}
                >
                  {genders.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  label="Rif"
                  name="teacherRif"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherRif}
                />
                <TextField
                  fullWidth
                  label="Cedula"
                  name="teacherID"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherID}
                />
                <TextField
                  fullWidth
                  label="Ciudad de Origen"
                  name="teacherCity"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherCity}
                />

                <TextField
                  fullWidth
                  label="Grado Academico"
                  name="teacherDegree"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherDegree}
                />
                <TextField
                  fullWidth
                  label="Instituto donde se Graduo"
                  name="teacherInstitute"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherInstitute}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Fecha de Nacimiento"
                    value={date}
                    onChange={(newValue) => setDateBirtday(newValue)}
                  />{" "}
                </LocalizationProvider>

                <TextField
                  fullWidth
                  label="Correo "
                  name="teacherEmail"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherEmail}
                />
                <TextField
                  fullWidth
                  label="Telefono"
                  name="teacherPhone"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherPhone}
                />
                <TextField
                  fullWidth
                  label="Alergias"
                  name="teacherAlergias"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherAlergias}
                />
                <TextField
                  fullWidth
                  label="Comentarios"
                  name="teacherComments"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherComments}
                />
                <TextField
                  fullWidth
                  label="Calificacion perfil MOA"
                  name="teacherQualificationMOA"
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  value={values.teacherQualificationMOA}
                />
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={top100Films}
                  value={valuesLenguage}
                  name="valuesLenguage"
                  onChange={(event, newValue) => {
                    console.log(newValue);
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
                  label="Estado"
                  name="teacherState"
                  onChange={handleChange}
                  required
                  select
                  style={{
                    paddingTop: 6,
                    marginBottom: 10,
                  }}
                  SelectProps={{ native: true }}
                  value={values.teacherState}
                >
                  {estado.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Fecha de Contratacion"
                    value={dateContractStart}
                    onChange={(newValue) => setContractStart(newValue)}
                  />{" "}
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Fecha de Finalizacion"
                    value={dateContractEnd}
                    onChange={(newValue) => setContractEnd(newValue)}
                  />{" "}
                </LocalizationProvider> 
                <Grid
                  container
                  style={{ direction: "row", width: "100%", marginTop: 10, marginBottom: 10 }}
                >
                  <Grid
                    item xs={12}
                    style={{ direction: "row", width: "30%", marginTop: 10, marginBottom: 10 }}
                  >
{/*                     <Typography variant="h6">Disponibilidad</Typography>
 */}                    <Box sx={{ width:"100%",marginTop: 10, marginBottom: 10 }}>
                    {/*   <TeacherAvailability/>  */}
                    </Box>
                  </Grid>
                  {/* <div style={{ height: 200 }}>
                    <DataGrid
                      rows={rowsDate}
                      columns={columnsDate}
                      paginationModel={{ page: 0, pageSize: 5 }}
                    />
                  </div> */}
                </Grid>

              </div>
            </Stack>{" "}
            <LoadingButton
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              loadingPosition="start"
              startIcon={<Save />}
              onClick={handleTeacher}
              style={{ color: "black", borderColor: "black" }}
              loading={isLoading}
              variant="outlined"
            >
              Agregar Profesor
            </LoadingButton>
            {error !== "" ? (
              <Alert variant="outlined" severity="error">
                {error}
              </Alert>
            ) : null}
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rowsStudents}
                autoPageSize
                columns={columnsCourse}
                onRowSelectionModelChange={handleDelete}
                checkboxSelection
                onCellDoubleClick={handleCellClick}
              />{user?.get("email")==="sistemamoa2023@gmail.com"?   <Button onClick={handleErase} variant="contained">
              - Borrar
            </Button>:null
           }
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
