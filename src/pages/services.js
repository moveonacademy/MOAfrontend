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

const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'Ofrecemos consultoría de negocios, planificación estratégica, análisis financiero, desarrollo de modelos de negocio y otros servicios de gestión empresarial.',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/public-service.png',
    title: 'Servicios Profesionales.',
    downloads: '594'
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'Nuestros servicios incluyen desarrollo de aplicaciones, diseño y desarrollo web, mantenimiento de sitios web, seguridad informática, soluciones de comercio electrónico y otros servicios tecnológicos',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/tecnologia.png',
    title: 'Tecnologia y Desarrollo Web.',
    downloads: '625'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'Nuestros servicios incluyen transporte, almacenamiento, gestión de inventarios, distribución y otros relacionados con la cadena de suministro.',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/logistic.png',
    title: 'Logística y Cadena de Suministro.',
    downloads: '857'
  },
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: 'Brindamos servicios de contabilidad, auditoría, gestión de impuestos, nómina, facturación y servicios financieros.',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/money-management.png',
    title: 'Contabilidad y Finanzas.',
    downloads: '406'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: 'Ofrecemos reclutamiento y selección de personal, capacitación y desarrollo de empleados, consultoría en cultura organizacional y gestión de talento.',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/reunion.png',
    title: 'Recursos Humanos.',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Ofrecemos espacios de trabajo compartidos, alquiler de oficinas, servicios de secretaría virtual, recepción de correspondencia y apoyo administrativo.',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/trabajando.png',
    title: 'Oficina y Coworking',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Especializados en marketing digital, diseño gráfico, gestión de redes sociales, publicidad en línea, SEO, producción de contenido y relaciones públicas.',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/megafono.png',
    title: 'Marketing y Publicidad.',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Proporcionamos asesoría legal, propiedad intelectual, protección de datos, contratos comerciales, mediación y servicios de litigio.',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/equilibrar.png',
    title: 'Servicios Legales.',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Realizamos estudios de mercado, análisis de la competencia, análisis de datos y otros servicios de investigación aplicados a los negocios.',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/research-and-development.png',
    title: 'Investigaciòn y Analisis.',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: 'Compartimos coaching empresarial, mentoría, talleres y cursos específicos para el desarrollo de habilidades empresariales y liderazgo.',
    logo: 'https://bafybeidwnhdez3yjg6w7gpg7esgtzicbj3l5sqehepd5xng3xafegybpfu.ipfs.nftstorage.link/research-and-development.png',
    title: 'Capacitación y Coaching.',
    downloads: '835'
  }
];

const Page = () => (
  <>
    <Head>
      <title>
        Companies | MoveOnAcademy
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
            justifyContent="space-between"
            spacing={4}
          >
            <Stack  spacing={1}>
              <Typography variant="h4">
                Servicios Profesionales
              </Typography>
           
            </Stack>
           
          </Stack>
          <Grid
            container
            spacing={3}
          >
            {companies.map((company) => (
              <Grid
                xs={12}
                md={5}
                lg={3}
                key={company.id}
              >
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
        
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
