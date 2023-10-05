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
      Servicios Tecnología y Desarrollo Web

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
              Servicios Tecnología y Desarrollo Web
              </Typography>
              <Typography style={{marginBottom:20}} maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, somos tu socio confiable en el mundo de la tecnología y el
desarrollo web. Nuestro enfoque se centra en brindarte soluciones
innovadoras y efectivas que te ayuden a alcanzar tus objetivos digitales
y a mantener tu presencia en línea de manera segura y eficiente.

              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              Nuestros Servicios Incluyen:

              </Typography>
              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Desarrollo de Aplicaciones: Creamos aplicaciones a medida que
satisfacen las necesidades específicas de tu negocio, desde
aplicaciones móviles hasta sistemas empresariales.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Diseño y Desarrollo Web: Diseñamos sitios web atractivos y funcionales
que reflejan la identidad de tu marca y ofrecen una experiencia de
usuario excepcional.


</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Mantenimiento de Sitios Web: Garantizamos que tu sitio web se
mantenga actualizado, seguro y libre de errores, para que siempre esté
en su mejor forma.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Seguridad Informática: Protegemos tus activos digitales y datos
confidenciales con soluciones avanzadas de seguridad informática y
auditorías de vulnerabilidad.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Soluciones de Comercio Electrónico: Impulsamos tu negocio en línea
con soluciones de comercio electrónico personalizadas que aumentan
las ventas y mejoran la experiencia del cliente.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">

Desarrollo de Software: Creamos software a medida que automatiza
procesos empresariales, aumenta la eficiencia y mejora la productividad 
</Typography>
              <Typography style={{marginBottom:20,marginTop:20}}   variant="h5">
              ¿Por qué Elegirnos?

              </Typography>
              <Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
              Experiencia Tecnológica: Contamos con un equipo de expertos en
tecnología y desarrollo web con años de experiencia en diversas
industrias.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Personalización: Adaptamos nuestras soluciones a tus necesidades
específicas y objetivos comerciales.
</Typography>


<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Innovación: Mantenemos un enfoque constante en la innovación y las
últimas tendencias tecnológicas.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Seguridad y Confidencialidad: Tus datos y activos digitales están
seguros con nosotros.

</Typography>


<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Soporte Continuo: Estamos aquí para brindarte soporte continuo y
resolver cualquier problema que surja.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Soporte Continuo: Estamos aquí para brindarte soporte continuo y
resolver cualquier problema que surja.
</Typography>
              <Typography maxWidth={"1000px"}  style={{marginBottom:10}}   variant="body1">
              En MoveOnAcademy, estamos comprometidos a impulsar tu éxito en el mundo
digital. Confía en nosotros para llevar tus proyectos tecnológicos al
siguiente nivel.

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
