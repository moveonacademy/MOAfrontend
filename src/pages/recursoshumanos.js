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
              Servicios de Recursos Humanos.
              </Typography>
              <Typography style={{marginBottom:20}} maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, somos especialistas en recursos humanos y estamos
dedicados a ayudarte a construir un equipo de trabajo sólido y altamente
productivo. Nuestra amplia gama de servicios de recursos humanos
está diseñada para satisfacer todas tus necesidades de gestión de
personal y desarrollo organizacional.


              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              Nuestros Servicios Incluyen:

              </Typography>
              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Reclutamiento y Selección de Personal: Te ayudamos a encontrar a los
candidatos más calificados y compatibles con tu empresa, asegurando
un proceso de selección efectivo y eficiente.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Capacitación y Desarrollo de Empleados: Diseñamos programas de
formación a medida para mejorar las habilidades y competencias de tu
equipo, impulsando su rendimiento y crecimiento profesional.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Consultoría en Cultura Organizacional: Trabajamos contigo para
desarrollar una cultura organizacional sólida y alineada con tus valores y
objetivos, lo que a su vez fomenta la retención de talento.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Gestión de Talento: Implementamos estrategias de retención y
desarrollo del talento para asegurar que tu equipo se mantenga
comprometido y motivado.
</Typography>
              <Typography style={{marginBottom:20,marginTop:20}}   variant="h5">
              ¿Por qué Elegirnos?

              </Typography>
              <Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
              Experiencia en Recursos Humanos: Nuestro equipo cuenta con una
amplia experiencia en la gestión de recursos humanos en diversas
industrias.
</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Personalización: Adaptamos nuestras soluciones a las necesidades
específicas de tu empresa y su cultura.
</Typography>


<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Enfoque en el Talento: Valoramos y nutrimos el talento de tu
organización para impulsar el crecimiento sostenible.
</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Resultados Medibles: Medimos el impacto de nuestras soluciones en el
desempeño y el compromiso de tus empleados

</Typography>


<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Confidencialidad: Tratamos tus asuntos de personal con la máxima
confidencialidad y ética.
</Typography>

              <Typography maxWidth={"1000px"}  style={{marginBottom:10}}   variant="body1">
              En MoveOnAcademy, creemos que las personas son el activo más valioso de tu
organización. Estamos comprometidos a ayudarte a construir un equipo
fuerte y a impulsar el éxito de tu empresa.

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
