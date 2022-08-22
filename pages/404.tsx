import type { NextPage } from 'next'
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const Error: NextPage = () => (
    <Layout page='Not found'>
      <div className='h-screen flex flex-col justify-center items-center'>
          <h1>Page not found</h1>
          <Link href="/">Back to  Home</Link>
      </div>
    </Layout>
  );


export default Error;
