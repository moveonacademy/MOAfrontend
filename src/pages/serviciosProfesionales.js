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
      Servicios Profesionales

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
              Servicios de Gestión Empresarial
              </Typography>
              <Typography style={{marginBottom:20}} maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, nos especializamos en ofrecer una amplia gama de
servicios de gestión empresarial diseñados para impulsar el éxito y el
crecimiento de tu negocio. Nuestra experiencia abarca desde la
consultoría de negocios hasta la planificación estratégica, el análisis
financiero y el desarrollo de modelos de negocio. Estamos
comprometidos a brindarte soluciones efectivas y personalizadas para
abordar tus desafíos comerciales.
              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              Nuestros Servicios Incluyen:

              </Typography>
              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Consultoría de Negocios: Nuestro equipo de expertos te ayudará a
identificar oportunidades de mejora, optimizar tus operaciones y
alcanzar tus objetivos empresariales.

              </Typography>
           
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Planificación Estratégica: Desarrollamos estrategias a medida que te
ayudarán a definir una visión clara para tu empresa y a establecer un
plan de acción sólido.
              </Typography>

              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Análisis Financiero: Evaluamos la salud financiera de tu negocio,
identificamos áreas de riesgo y oportunidades de crecimiento, y te
proporcionamos recomendaciones sólidas.
              </Typography>

              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Desarrollo de Modelos de Negocio: Creamos modelos de negocio
innovadores que te permiten explorar nuevas vías de ingresos y
optimizar la eficiencia de tu empresa.
              </Typography>
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Gestión de Proyectos: Ayudamos a implementar estrategias y proyectos
específicos para alcanzar tus objetivos comerciales de manera eficiente.
              </Typography>
              <Typography style={{marginBottom:20}}   maxWidth={"1000px"} variant="body1">
              Optimización de Operaciones: Identificamos procesos ineficientes y
diseñamos soluciones para mejorar la eficacia y la productividad de tu
empresa.
              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              ¿Por qué Elegirnos?

              </Typography>
              <Typography maxWidth={"1000px"}  style={{alignSelf:"flex-start",marginBottom:10}}  variant="body1">
              Experiencia Comprobada: Contamos con un equipo de profesionales
con experiencia en una variedad de industrias.
              </Typography>
              <Typography maxWidth={"1000px"}  style={{alignSelf:"flex-start",marginBottom:10}}  variant="body1">
              Enfoque Personalizado: Adaptamos nuestras soluciones a las
necesidades únicas de tu negocio.

              </Typography> 
                   <Typography maxWidth={"1000px"}  style={{alignSelf:"flex-start",marginBottom:10}}  variant="body1">
              Resultados Medibles: Trabajamos con métricas y objetivos claros para
garantizar resultados tangibles.
              </Typography>
              <Typography maxWidth={"1000px"}  style={{alignSelf:"flex-start",marginBottom:10}}  variant="body1">
              Confidencialidad: Tu información empresarial y estratégica se manejará
con la máxima confidencialidad.
              </Typography>
              <Typography maxWidth={"1000px"}  style={{alignSelf:"flex-start",marginBottom:10}}  variant="body1">
              Compromiso con el Éxito: Nuestro objetivo es tu éxito a largo plazo, y
trabajamos incansablemente para lograrlo.
              </Typography>
              <Typography maxWidth={"1000px"}  style={{alignSelf:"flex-start",marginBottom:30}}   variant="body1">
              En MoveOnAcademy, estamos listos para ser tu socio estratégico en el
crecimiento y desarrollo de tu negocio. Contacta con nosotros hoy
mismo para conocer cómo podemos impulsar tu empresa hacia el éxito.

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
