import Head from 'next/head'
import React from 'react'
import Header from '../Header/Header';

type LayoutProps = {
    children: React.ReactNode;
    page: string;
}

const Layout: React.FC<LayoutProps> = ({ children, page }) => {
  return (
    <div>
        <Head>
            <title>MovieDB NextJS - {page}</title>
        </Head>
        {/* <Header /> */}
        {children}
    </div>
  )
}

export default Layout