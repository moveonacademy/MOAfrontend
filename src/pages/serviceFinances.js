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
      Servicios de Contabilidad y Finanzas

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
              Servicios de Contabilidad y Finanzas
              </Typography>
              <Typography style={{marginBottom:20}} maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, nos enorgullece ofrecer una amplia gama de servicios de
contabilidad y finanzas diseñados para cubrir todas las necesidades de
tu negocio. Nuestro compromiso es brindarte soluciones integrales y
personalizadas que te permitan mantener un control efectivo de tus
finanzas y cumplir con todas tus obligaciones tributarias.

              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              Nuestros Servicios Incluyen:

              </Typography>
              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
                Servicios de Contabilidad: Llevamos un registro detallado de tus
transacciones financieras para proporcionarte una visión clara de la
salud financiera de tu empresa.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
            
Auditoría: Realizamos auditorías exhaustivas para garantizar la
precisión y la integridad de tus estados financieros, aportando confianza
a tus partes interesadas.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">

Gestión de Impuestos: Te ayudamos a cumplir con tus obligaciones
fiscales de manera eficiente, minimizando tus cargas impositivas y
evitando sanciones.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">

Nómina: Gestionamos de manera precisa y puntual el cálculo y el
procesamiento de nóminas de tus empleados, asegurando el
cumplimiento de las regulaciones laborales.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">

Facturación: Simplificamos tus procesos de facturación para que puedas
emitir facturas profesionales de manera eficiente y realizar un
seguimiento adecuado de tus ingresos.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">

Servicios Financieros: Ofrecemos asesoramiento financiero para
optimizar tu flujo de efectivo, gestionar tu deuda y tomar decisiones
estratégicas de inversión.
</Typography>

           
              <Typography style={{marginBottom:20,marginTop:20}}   variant="h5">
              ¿Por qué Elegirnos?

              </Typography>
              <Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
              Experiencia y Competencia: Nuestro equipo de expertos cuenta con una
amplia experiencia en contabilidad y finanzas.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">

Personalización: Adaptamos nuestros servicios a las necesidades
específicas de tu negocio.
</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">

Cumplimiento y Exactitud: Nos enfocamos en la precisión y el
cumplimiento normativo en todas nuestras operaciones.
</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">

Confidencialidad: Tu información financiera se maneja con la máxima
confidencialidad y seguridad.
</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">

Atención al Cliente: Estamos comprometidos a brindarte un servicio al
cliente excepcional y responder a tus preguntas en tiempo real.
</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">

En MoveOnAcademy, entendemos la importancia de una gestión financiera sólida
y estamos listos para ser tu socio estratégico en el éxito de tu negocio.
Contáctanos hoy mismo para explorar cómo podemos ayudarte a
alcanzar tus metas financieras.
</Typography>

              <Typography maxWidth={"1000px"}   style={{marginBottom:10}}   variant="h5">
              ¡Agenda una Consultoría Gratuita Hoy Mismo!


              </Typography>
              <Typography maxWidth={"1000px"}  style={{marginBottom:10}}   variant="body1">
              Estamos listos para ayudarte a llevar tu negocio al siguiente nivel en línea. Si estás listo para discutir cómo nuestros servicios pueden beneficiar a tu empresa, no dudes en agendar una consultoría gratuita con uno de nuestros especialistas en marketing digital. Juntos, podemos trazar el camino hacia el éxito en línea. ¡Contáctanos ahora para comenzar!

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
