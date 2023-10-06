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
import Alert from '@mui/material/Alert';
import { useMoralis } from 'react-moralis';

import Save from "@mui/icons-material/Save";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { DataGrid } from "@mui/x-data-grid";

import { TextField,Box,Container ,Typography,Button,Stack} from "@mui/material";
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
  const { Moralis } = useMoralis();

  const columnsCourse = [
    { field: "id", headerName: "id", width: 70 },
    { field: "teacherName", headerName: "Nombre", width: 200 },
    { field: "teacherEmail", headerName: "Correo", width: 200 },
  ];
 



  const fetchData = async () => {
    try {
      
      let user=await Moralis.User.current()

      const query2 = new Moralis.Query("TeachersMoveOn");
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
    const query = new Moralis.Query("TeachersMoveOn");
    query.equalTo("uid", event.id);

    let res = await query.first();
    setStateID(event.id);
    let otro = [];
    for (let i = 0; i < res.attributes.teacherLenguage.length; i++) {
      console.log(res.attributes.teacherLenguage[i]);
      otro = [...otro, res.attributes.teacherLenguage[i]];
    }
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

      const Student = Moralis.Object.extend("TeachersMoveOn");
      const student = new Student();
      
      const query = new Moralis.Query("TeachersMoveOn");
        query.equalTo("uid", stateID);
      let res = await query.first();
      let user=await Moralis.User.current()

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
        

        if (valuesLenguage) {
          res.set("teacherLenguage", valuesLenguage);
        } else {
          setError("Falta los lenguajes del profesor");
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

        if (values.teacherEmail) {
          res.set("teacherEmail", values.teacherEmail);
        } else {
          setError("Falta el email del profesor");
          setLoading(false);

          return;
        }
        if (values.teacherGender) {
          res.set("teacherGender", values.teacherGender);
        } else {
          res.set("teacherGender", "Male");
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

      if (valuesLenguage) {
        student.set("teacherLenguage", valuesLenguage);
      } else {
        setError("Falta los lenguajes del profesor");
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


      if (values.teacherEmail) {
        student.set("teacherEmail", values.teacherEmail);
      } else {
        setError("Falta el email del profesor");
        setLoading(false);

        return;
      }



      if (values.teacherGender) {
        student.set("teacherGender", values.teacherGender);
      } else {
        student.set("teacherGender", "Male");
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
   const [rowstoDelete, setRowsToDelete] = useState([]);

  async function handleErase() {
    for (let i = 0; i < rowstoDelete.length; i++) {
      const DataFiles = Moralis.Object.extend("TeachersMoveOn");
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
        <title>Profesores MoveOnSchool</title>
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
                  <Typography variant="h4">Agregar un Profesor MoveOnSchool</Typography>
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
                  label="Selecciona el Sexo"
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
                columns={columnsCourse}
                onRowSelectionModelChange={handleDelete}
                checkboxSelection
                onCellDoubleClick={handleCellClick}
              />
             
            
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
