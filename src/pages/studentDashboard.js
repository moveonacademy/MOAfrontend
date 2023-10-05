import Head from 'next/head';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
const Page = () => {


  return (
    <>
      <Head>
        <title>
          Teacher Dashboard 
        </title>
      </Head>
      
     
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
