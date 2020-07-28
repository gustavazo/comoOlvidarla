import Head from 'next/head';

import NewHeader from './NewHeader';

import Footer from './Footer';


export default  ({ children }) => {

    return (
        <>

            <Head>
            <title>Instituto Saint Patrick | Cursos de Inglés</title>
                <meta content="Instituto Saint Patrick es una institución especializada en servicios lingüísticos y en cursos de formación en Inglés para la comunidad." name="description" />
                <meta content="Instituto Saint Patrick | Cursos de Inglés" property="og:title" />
                <meta content="Instituto Saint Patrick es una institución especializada en servicios lingüísticos y en cursos de formación en Inglés para la comunidad." property="og:description" />
                <meta content="images/backInicio.jpg" property="og:image" />
                <meta content="Instituto Saint Patrick | Cursos de Inglés" property="twitter:title" />
                <meta content="Instituto Saint Patrick es una institución especializada en servicios lingüísticos y en cursos de formación en Inglés para la comunidad." property="twitter:description" />
                <meta content="images/backInicio.jpg" property="twitter:image" />
                <meta property="og:type" content="website" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content="Webflow" name="generator" />
                <link href="images/favicon.jpg" rel="shortcut icon" type="image/x-icon" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
                <link rel="stylesheet" href="/css/ReactToastify.min.css"></link>
                {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>*/}
                <link href="css/normalize.css" rel="stylesheet" type="text/css" />
                <link href="css/webflow.css" rel="stylesheet" type="text/css" />
                <link href="css/saint-patrick.webflow.css" rel="stylesheet" type="text/css" />
                {/* [if lt IE 9]><![endif] */}
                <script src="js/ol.js"></script>  
                <link href="images/favicon.jpg" rel="shortcut icon" type="image/x-icon" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
            </Head>
            <NewHeader></NewHeader>
            <div style={{ marginTop: '0px'}}>
                {children}
            </div>


            <Footer></Footer> 
            <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5da0657b754316944047c5a6" type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
            <script src="/js/fix.js"></script>
            <script src="/js/webflow.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            {/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>*/}
        </>
    )
};