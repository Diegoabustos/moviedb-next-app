import Head from 'next/head'
import React from 'react'
import Header from '../Header/Header';

type LayoutProps = {
    children: any;
    page: string;
}

const Layout = ({ children, page }: LayoutProps) => {
  return (
    <div>
        <Head>
            <title>MovieDB NextJS - {page}</title>
        </Head>
        <Header />
        {children}
    </div>
  )
}

export default Layout