import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import LoadingButton from '@mui/lab/LoadingButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [isLoading,setLoading]= useState(false)
  const [method, setMethod] = useState('email');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        setLoading(true)
     await auth.signIn(values.email, values.password);
     

      router.push('/');
      setLoading(false)
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false); 
             setLoading(false)

      }
    }
  });

  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    },
    []
  );

  const handleSkip = useCallback(
    () => {
      auth.skip();
      router.push('/');
    },
    [auth, router]
  );

  return (
    <>
      <Head>
        <title>
          Ingresar | MoveOnAcademy
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            > <Box >
            <Typography
           align="flex-start"
           color="inherit"
           sx={{
             fontSize: '34px',
             lineHeight: '32px',
             mb: 1,
           }}
           variant="h1"
         >
           <Box
             component="a"
             sx={{ color: 'black' }}
             target="_blank"
           >
            MoveOnAcademy
           </Box>
         </Typography>
         <Typography
           align="flex-start"
           sx={{ mb: 3 }}
           variant="subtitle1"
         >
          Sistema Adminitrativo.
         </Typography>
          </Box>
              <Typography variant="h4">
                Ingresar
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                No tienes cuenta?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  
                  color={"black"}
                  variant="subtitle2"
                >
                  Registrarse
                </Link>
              </Typography>
            </Stack>
           
            {method === 'email' && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    name="email"
                    placeholder='Correo Electronico'
                    hiddenLabel
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    name="password"
                    placeholder='Contraseña'

                    hiddenLabel
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit==="ParseError: 101 Invalid username/password."?"Correo o contraseña invalida":formik.errors.submit}
                  </Typography>
                )}
                      <LoadingButton
                         fullWidth
                         size="large"
                         sx={{ mt: 3 }}
                         
        loadingPosition="start"
        startIcon={<ArrowRightIcon />}
                         type="submit"
                         style={{color:"black",borderColor:"black"}}
                         loading={isLoading} variant="outlined">
                      Continuar
      </LoadingButton>
                
                
                <Alert
                  severity="info"
                  sx={{ mt: 3 }}
                  color="warning"
                >
                  <div>
                  ¿Olvido Contraseña? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/recoverPassword"
                  underline="hover"
                  variant="subtitle2"
                  color={"black"}
                >
                  Recuperar Cuenta
                </Link>
                  </div>
                </Alert>
              </form>
            )}
            {method === 'phoneNumber' && (
              <div>
                <Typography
                  sx={{ mb: 1 }}
                  variant="h6"
                >
                  Not available
                </Typography>
                <Typography color="text.secondary">
                  To prevent unnecessary costs we disabled this feature in the demo.
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
