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
      Servicios de Logística y Cadena de Suministro

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
              Servicios de Logística y Cadena de Suministro
              </Typography>
              <Typography style={{marginBottom:20}} maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, somos expertos en logística y cadena de suministro, y
estamos comprometidos en optimizar la eficiencia y la rentabilidad de tu
negocio. Nuestra amplia gama de servicios está diseñada para
garantizar un flujo constante y eficiente de productos desde el origen
hasta el destino final.
              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              Nuestros Servicios Incluyen:

              </Typography>
              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Transporte: Ofrecemos soluciones de transporte personalizadas para
satisfacer tus necesidades, ya sea terrestre, marítimo o aéreo, para
asegurarnos de que tus productos lleguen a tiempo y de manera segura

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Almacenamiento: Contamos con instalaciones de almacenamiento
seguras y eficientes para mantener tus productos en perfectas
condiciones hasta que se necesiten.


</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Mantenimiento de Sitios Web: Garantizamos que tu sitio web se
mantenga actualizado, seguro y libre de errores, para que siempre esté
en su mejor forma.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Gestión de Inventarios: Optimizamos tus niveles de inventario para
reducir costos y evitar problemas de exceso o escasez de stock.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Distribución: Gestionamos la distribución de tus productos de manera
eficiente, asegurando una entrega oportuna a tus clientes o puntos de
venta.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Gestión de la Cadena de Suministro: Coordinamos y supervisamos cada
paso de tu cadena de suministro para mejorar la visibilidad y la
eficiencia.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">

Servicios Relacionados: Ofrecemos servicios adicionales, como
embalaje personalizado, etiquetado y gestión de devoluciones, para
satisfacer todas tus necesidades logísticas.
</Typography>

              <Typography style={{marginBottom:20,marginTop:20}}   variant="h5">
              ¿Por qué Elegirnos?
              </Typography>
              <Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
              Experiencia Logística: Nuestro equipo cuenta con experiencia en la
gestión de cadenas de suministro en diversas industrias.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Eficiencia Operativa: Nos enfocamos en optimizar cada aspecto de tu
logística para reducir costos y aumentar la eficiencia.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Tecnología Avanzada: Utilizamos herramientas y sistemas avanzados
para rastrear y gestionar tus productos de manera precisa.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Compromiso con la Calidad: Garantizamos que tus productos se
mantengan en perfectas condiciones y se entreguen puntualmente.

</Typography>


<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Atención Personalizada: Cada cliente es único, y adaptamos nuestras
soluciones a tus necesidades específicas.
</Typography>

              <Typography maxWidth={"1000px"}  style={{marginBottom:10}}   variant="body1">
              En MoveOnAcademy, estamos dedicados a simplificar tu cadena de suministro y
lograr una gestión logística sin complicaciones. Contáctanos hoy mismo
para descubrir cómo podemos mejorar tus operaciones logísticas.


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
