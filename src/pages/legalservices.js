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
      Servicios Legales.
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
              Servicios Legales.
              </Typography>
              <Typography style={{marginBottom:20}} maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, estamos comprometidos en ofrecer una amplia gama de
servicios legales diseñados para proteger tus intereses y garantizar el
cumplimiento de las leyes y regulaciones aplicables. Nuestro equipo de
profesionales legales altamente calificados está listo para proporcionarte
asesoría y representación legal efectiva.


              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              Nuestros Servicios Incluyen:

              </Typography>
              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Asesoría Legal: Te proporcionamos orientación legal precisa y
estratégica en una variedad de áreas para ayudarte a tomar decisiones
informadas y mitigar riesgos legales

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Propiedad Intelectual: Protegemos tus derechos de propiedad
intelectual, incluyendo patentes, marcas registradas, derechos de autor
y secretos comerciales.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Protección de Datos: Te asistimos en el cumplimiento de las
regulaciones de privacidad de datos, garantizando la seguridad de la
información de tus clientes y empleados.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Contratos Comerciales: Ayudamos en la redacción, revisión y
negociación de contratos comerciales para proteger tus intereses y
asegurar acuerdos sólidos.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Mediación: Facilitamos la resolución de conflictos a través de mediación
efectiva, evitando costosos litigios cuando sea posible
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Servicios de Litigio: Representamos tus intereses en procesos legales,
desde litigios comerciales hasta disputas laborales, con dedicación y
experiencia.
</Typography>

           
              <Typography style={{marginBottom:20,marginTop:20}}   variant="h5">
              ¿Por qué Elegirnos?

              </Typography>
              <Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
              Experiencia Jurídica: Nuestro equipo de abogados posee amplia
experiencia en una variedad de áreas legales.

</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Compromiso con el Cliente: Estamos dedicados a proporcionarte un
servicio legal de alta calidad y a lograr resultados efectivos.

</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Enfoque Personalizado: Adaptamos nuestras soluciones legales a tus
necesidades específicas y objetivos comerciales.

</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Ética Profesional: Nuestro compromiso con la integridad y la
confidencialidad es fundamental en cada caso.
</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Resultados Comprobados: Hemos obtenido resultados favorables para
nuestros clientes en una variedad de casos legales.

</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
En MoveOnAcademy, estamos listos para ser tu defensor legal y asesor de
confianza. Contáctanos hoy mismo para discutir tus necesidades legales
y cómo podemos ayudarte.

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
