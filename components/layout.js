import Head from 'next/head'
import Header from './header/header'
import Footer from './footer/footer'

import { Main } from '../styles/globals'

export default function Layout({ children, home}) {
    return (
        <>
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap" rel="stylesheet"/>
                <title>Coffee Roasters</title>
            </Head>
            <Header/>
            <Main>
                {children}
            </Main>
            {/* <Footer/> */}
        </>
    )
}