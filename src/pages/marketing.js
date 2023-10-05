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
              Marketing y Publicidad
              </Typography>
              <Typography style={{marginBottom:20}} maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, estamos comprometidos en ayudar a tu negocio a alcanzar su máximo
potencial en línea. Nuestros servicios de marketing digital están diseñados para impulsar tu
presencia en internet, aumentar la visibilidad de tu marca y generar un flujo constante de
clientes potenciales de alta calidad. Cuando confías en nosotros, obtienes una solución
integral de marketing digital que abarca todos los aspectos esenciales para el éxito en línea.


              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              Nuestros Servicios Incluyen:

              </Typography>
              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Optimización de Motores de Búsqueda (SEO): Impulsamos tu sitio web a los primeros
lugares de los motores de búsqueda para que los clientes te encuentren fácilmente cuando
busquen productos o servicios relacionados.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Publicidad en Redes Sociales: Creamos estrategias efectivas de publicidad en
plataformas como Facebook, Instagram, Twitter y LinkedIn para llegar a tu audiencia
objetivo y aumentar la participación de los usuarios.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Marketing de Contenidos: Desarrollamos contenido de calidad que resuene con tu público
y lo mantenga interesado en tu marca, generando confianza y lealtad a largo plazo.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Email Marketing: Diseñamos campañas de email atractivas y personalizadas para
fomentar el compromiso y convertir a los suscriptores en clientes
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Analítica y Optimización: Utilizamos datos para tomar decisiones informadas y ajustar
constantemente nuestras estrategias para obtener los mejores resultados posibles.
</Typography>
           
              <Typography style={{marginBottom:20,marginTop:20}}   variant="h5">
              ¿Por qué Elegirnos?

              </Typography>
              <Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, no solo ofrecemos servicios de marketing digital de alta calidad, sino que
también nos enfocamos en entender tu negocio y tus objetivos. Nuestro equipo de expertos
está dedicado a tu éxito y trabajará estrechamente contigo para diseñar estrategias
personalizadas que se adapten a tus necesidades específicas.

</Typography>


              <Typography maxWidth={"1000px"}   style={{marginBottom:10}}   variant="h5">
              ¡Agenda una Consultoría Gratuita Hoy Mismo!


              </Typography>
              <Typography maxWidth={"1000px"}  style={{marginBottom:10}}   variant="body1">
              Estamos listos para ayudarte a llevar tu negocio al siguiente nivel en línea. Si estás listo
para discutir cómo nuestros servicios pueden beneficiar a tu empresa, no dudes en agendar
una consultoría gratuita con uno de nuestros especialistas en marketing digital. Juntos,
podemos trazar el camino hacia el éxito en línea. ¡Contáctanos ahora para comenzar!

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
