import Head from 'next/head';

import Header2 from './Header2';

import Footer from './Footer';

export default  ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/favicon.jpg" />
                <link rel="stylesheet" href="/css/webflow.css" />
                <link rel="stylesheet" href="/css/saint-patrick.webflow.css" />
                <link rel="stylesheet" href="/css/ReactToastify.min.css"></link>
            </Head>
            <Header2></Header2>
            <div>
                {children}
            </div>
            <Footer></Footer>
        </>
    )
};