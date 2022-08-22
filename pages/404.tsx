import type { NextPage } from 'next'
import Link from 'next/link';

const Error: NextPage = () => (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1>Page not found</h1>
        <Link href="/">Back to  Home</Link>
    </div>
  );


export default Error;
