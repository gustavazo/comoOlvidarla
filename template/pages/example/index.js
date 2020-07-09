// esta ruta al tener el nombre de index, hace referencia a /example
// el archivo 'subNivel' hace referencia a /example/subNivel
import Head from 'next/head';

import Layout from '../../components/Layout';
import ExampleScreen from '../../screens/ExampleScreen';


export default () => {
    return (
        <Layout>
            <Head>
                <title>Pantalla de ejemplo</title>
            </Head>
            <ExampleScreen/>
        </Layout>
    )
}