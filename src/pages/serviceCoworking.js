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
      Servicios de Oficina y Coworking

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
              Servicios de Oficina y Coworking
              </Typography>
              <Typography style={{marginBottom:20}} maxWidth={"1000px"} variant="body1">
              En MoveOnAcademy, nos enorgullece ofrecer una amplia gama de servicios de
oficina y coworking diseñados para satisfacer todas tus necesidades de
espacio de trabajo y apoyo administrativo. Nuestro objetivo es brindarte
un entorno profesional y productivo para que puedas concentrarte en lo
que realmente importa: hacer crecer tu negocio.


              </Typography>
              <Typography style={{marginBottom:20}}   variant="h5">
              Nuestros Servicios Incluyen:

              </Typography>
              
              <Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
              Espacios de Trabajo Compartidos: Disponemos de modernos espacios
de coworking equipados con todas las comodidades que necesitas para
trabajar de manera eficiente y colaborativa.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Alquiler de Oficinas Privadas: Ofrecemos oficinas privadas
completamente equipadas y personalizables para satisfacer tus
necesidades específicas de espacio y privacidad.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Servicios de Secretaría Virtual: Nuestro equipo de asistentes virtuales
está disponible para gestionar tus llamadas, correos electrónicos y
tareas administrativas, proporcionando una imagen profesional de tu
empresa.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Recepción de Correspondencia: Recibimos y gestionamos tu
correspondencia de manera segura y eficiente, para que nunca pierdas
un mensaje importante.
</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Salas de Reuniones: Ponemos a tu disposición salas de reuniones bien
equipadas para que puedas recibir a clientes o realizar presentaciones
impresionantes.

</Typography>
<Typography style={{marginBottom:10}}   maxWidth={"1000px"} variant="body1">
Apoyo Administrativo: Ofrecemos una variedad de servicios
administrativos, como copiado, escaneo, impresión y más, para cubrir
todas tus necesidades de oficina.

</Typography>

           
              <Typography style={{marginBottom:20,marginTop:20}}   variant="h5">
              ¿Por qué Elegirnos?

              </Typography>
              <Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
              Flexibilidad: Adaptamos nuestros servicios y espacios a tus necesidades
cambiantes.

</Typography>

<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Profesionalismo: Mantenemos un ambiente profesional y acogedor para
que puedas impresionar a tus clientes.

</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Tecnología Avanzada: Ofrecemos acceso a tecnología de vanguardia
para que tu negocio esté siempre conectado
</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Ubicación Estratégica: Nuestros espacios están convenientemente
ubicados en lugares estratégicos para facilitar el acceso.

</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
Comunidad Colaborativa: Únete a una comunidad de profesionales y
empresarios que valoran la colaboración y el networking.
</Typography>
<Typography style={{marginBottom:10,alignSelf:'flex-start'}}   maxWidth={"1000px"} variant="body1">
En MoveOnAcademy, estamos comprometidos en ser tu socio en el éxito de tu
negocio al proporcionar un espacio de trabajo de alta calidad y servicios
administrativos efectivos.

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
