import Layout from '../components/Layout';
import Home from '../screens/Home';

import { getAllCategorias } from '../lib/categorias';
import { getAllNovedades } from '../lib/novedades';

export default (props) => {
    return (
        <Layout>
            <Home {...props}></Home>
        </Layout>
    )    
}

export async function getServerSideProps(arg) {
    const categorias = await getAllCategorias();
    const novedades = await getAllNovedades();

    return {
      props: { categorias, novedades }
    } 
  }