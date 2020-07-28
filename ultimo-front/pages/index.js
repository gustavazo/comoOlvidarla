import Layout from '../components/Layout'
import AmpState from '../components/amp/AmpState'
import AmpScript from '../components/amp/AmpScript'
import {
  AmpIncludeAmpList,
  AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'

import Home from '../screens/Home';

import { getAllCategorias } from '../lib/categorias';
import { getAllNovedades } from '../lib/novedades';

const HomePage = (props) => (
  <>
    <Layout
      title="Welcome to AMP"
      description="Learn how to build an AMP First with Next.js."
    >
      <Home {...props}></Home>
    </Layout>
  </>
)

export async function getServerSideProps(arg) {
  const categorias = await getAllCategorias();
  const novedades = await getAllNovedades();

  return {
    props: { categorias, novedades }
  } 
}

export default Home;