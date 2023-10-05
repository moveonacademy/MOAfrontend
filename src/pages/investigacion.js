import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from '../sections/companies/company-card';
import { CompaniesSearch } from '../sections/companies/companies-search';


const Service1 = () => (
  <>
    <Head>
      <title>
      Servicios de Investigación y Análisis

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
            justifyContent="center"
            spacing={4}
          >
            <Stack style={{alignItems:"center",justifyContent:"center"}}   spacing={1}>
              <Typography style={{color:"purple",marginBottom:10}} marginTop={"0%"} variant="h3">
              Servicios de Investigación y Análisis
              </Typography>
              <Typography style={{marginBottom:20}} maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, estamos dedicados a brindarte soluciones de investigación y análisis que te
ayuden a tomar decisiones empresariales informadas y estratégicas. Nuestra experiencia se
traduce en datos precisos y perspicaces que impulsan el éxito de tu negocio.


              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              Nuestros Servicios Incluyen:

              </Typography>
              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Estudios de Mercado: Investigamos tendencias del mercado, identificamos oportunidades y
evaluamos la demanda para tu negocio.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Análisis de la Competencia: Comprendemos a tus competidores, sus estrategias y ventajas
para que puedas destacarte en tu industria.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Análisis de Datos: Convertimos datos en información valiosa, proporcionándote
perspectivas que guían tus decisiones estratégicas.
</Typography>


<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Investigación de Clientes: Profundizamos en las necesidades y preferencias de tus clientes
para adaptar tus ofertas de manera efectiva.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Evaluación de Producto: Medimos la eficacia de tus productos o servicios y te ayudamos a
optimizarlos para el éxito.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Investigación de Tendencias: Mantente a la vanguardia con análisis de tendencias
emergentes que impulsarán tu innovación y crecimiento.
</Typography>
              <Typography style={{marginBottom:20,marginTop:20}}   variant="h5">
              ¿Por qué Elegirnos?

              </Typography>
              <Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
              Experiencia en Investigación: Contamos con un equipo de expertos en investigación de
mercado y análisis de datos.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Personalización: Adaptamos nuestras investigaciones y análisis a tus necesidades
específicas y objetivos comerciales.
</Typography>


<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Resultados Accionables: Proporcionamos insights concretos que puedes utilizar de
inmediato para mejorar tu estrategia empresarial.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Tecnología Avanzada: Utilizamos herramientas de vanguardia para la recopilación y el
análisis de datos.

</Typography>


<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Confidencialidad: Tratamos tu información con la máxima confidencialidad y ética
profesional
</Typography>

              <Typography maxWidth={"1000px"}  style={{marginBottom:10}}   variant="body1">
              En MoveOnAcademy, te proporcionamos las herramientas que necesitas para tomar decisiones
basadas en datos y alcanzar el éxito en tu negocio.


              </Typography>
              
          <Button 
                 variant="contained">
          Agendar Cita
          </Button>
          
            </Stack>
        </Stack>
           
        
        </Stack>
      </Container>
    </Box>
  </>
);

Service1.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Service1;
