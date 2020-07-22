import Head from 'next/head';

import Header2 from './Header2';

import Footer from './Footer';



export default  ({ children }) => {

    React.useEffect(() => {
        Webflow.ready()
    });

    return (
        <>

            <Head>
                <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
                <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
                <link href="/css/saint-patrick.webflow.css" rel="stylesheet" type="text/css" />
                {/* [if lt IE 9]><![endif] */}
                <link href="images/favicon.jpg" rel="shortcut icon" type="image/x-icon" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
                <link rel="stylesheet" href="/css/ReactToastify.min.css"></link>
                {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>*/}
            </Head>
            <Header2></Header2>
            <div style={{ marginTop: '0px'}}>
                {children}
            </div>


            {/* <Footer></Footer> */}
            <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5da0657b754316944047c5a6" type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
            <script src="/js/fix.js"></script>
            <script src="/js/webflow.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            {/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>*/}
        </>
    )
};