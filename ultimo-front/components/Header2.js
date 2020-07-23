import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';

export default () => {
    const [carro, setCarro] = React.useState([]);

    React.useEffect(() => {
        setCarro(JSON.parse(localStorage.getItem('carro')));

        const handleCarroModificado = (event) => {
            console.log('EVENTO!');
            setCarro(JSON.parse(localStorage.getItem('carro')));

            toast(event.detail.mensaje);

        }

        document.addEventListener("carroModificado", handleCarroModificado);

        return () => {
            document.removeEventListener("carroModificado", handleCarroModificado);
        }

    }, []);

    
    return (

<div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="navbar w-nav">
  <div className="div-block-55"><a href="#home" className="brand w-nav-brand"><img src="images/logo.png" alt="" className="image-3" /><div className="div-block-46"><h2 className="heading-3">INSTITUTO DE INGLÉS</h2><h1 className="heading-4">SAINT PATRICK</h1></div></a>
    <nav role="navigation" className="nav-menu w-nav-menu"><a href="#inicio" className="navlink w-nav-link">Home</a><a href="#quienesSomos" className="navlink w-nav-link">Quiénes somos</a><a href="#cursos" className="navlink w-nav-link">Cursos</a><a href="#servicios" className="navlink w-nav-link">Servicios</a><a href="#novedades" className="navlink w-nav-link">Novedades</a><a href="#" className="navlink w-nav-link">Plataforma</a><a href="#contacto" className="navlink w-nav-link">Contacto</a></nav>
  </div>
  <div className="menu-button w-nav-button">
    <div className="icon w-icon-nav-menu" />
  </div>
  <div className="contuser">
    <div className="user"><img src="images/userIcon.png" title="Usuario" alt="" className="image-22" />
      <div title="Ira al carro de compras" className="containercarro"><img src="images/carro.png" alt="" className="image-21" />
        <div className="text-block-25">0</div>
      </div>
    </div>
    <div className="datosuser">
      <div className="div-block-58"><a href="#" className="userlink">Ingresar</a><a href="#" className="userlink">Registrarse</a></div>
      <div className="txtuser">Juan Perez </div><a href="#" className="userlink">Salir</a></div>
  </div>
</div>
        
    )

}

