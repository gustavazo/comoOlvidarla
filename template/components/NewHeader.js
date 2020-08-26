import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';

export default () => {
    const [carro, setCarro] = React.useState([]);

    const shouldOpen = useRef(false);
    const menuRef = useRef();

    React.useEffect(() => {
        setCarro(JSON.parse(localStorage.getItem('carro')));

        const handleCarroModificado = (event) => {
            setCarro(JSON.parse(localStorage.getItem('carro')));

            console.log("=======)", carro);

            toast(event.detail.mensaje);

        }

        document.addEventListener("carroModificado", handleCarroModificado);

        return () => {
            document.removeEventListener("carroModificado", handleCarroModificado);
        }

    }, []);

    const handleMenuOpen = () => {
        shouldOpen.current = !shouldOpen.current;

        if (shouldOpen.current) {
            menuRef.current.style.maxHeight = '300px'
        } else {
            menuRef.current.style.maxHeight = '0px'
        }

    }

    const dropdown = {
        position: 'relative',
        display: 'inline-block',
    };
      
    const dropbtn = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '16px',
        fontSize: '16px',
        fontFamily: "Monserrat",
        border: 'none',
    };
  

    return (
        <div className="wrappernavbar">
            <div className="navbar2"><a href="#" className="brand w-nav-brand"><img src="images/logo.png" alt="" className="image-3" /><div className="div-block-46"><h2 className="heading-3">INSTITUTO DE INGLÉS</h2><h1 className="heading-4">SAINT PATRICK</h1></div></a>
                <div className="navegacion">
                    <a href="/#inicio" className="linkmenu w-inline-block"  aria-current="page">
                        <div className="text-block-28">Home</div>
                        
                    </a>
                    <a href="/#quienesSomos" className="linkmenu w-inline-block">
                        <div className="text-block-28">Quiénes somos</div>
                    </a>
                    <a href="/#cursos" className="linkmenu w-inline-block">
                        <div className="text-block-28">Cursos</div>
                    </a>
                    
                    {/*<a href="/#servicios" className="linkmenu w-inline-block">
                        <div className="text-block-28">Servicios</div>
                    </a>*/}


                    <div className="dropdown">
                        <button className="dropbtn">Servicios</button>
                        <div className="dropdown-content">
                            <a href="/#Libros">Libros</a>
                            <a href="/#Viajes educativos">Viajes educativos</a>
                            <a href="/#Tramitación de visas">Tramitación de visas</a>
                            <a href="#">Nuestras certificaciones</a>
                        </div>
                    </div>    


                    <a href="/#novedades" className="linkmenu w-inline-block">
                        <div className="text-block-28">Novedades</div>
                    </a>
                    <a href="https://campusnube.com.ar/login" className="linkmenu w-inline-block" target="_blank">
                        <div className="text-block-28">Plataforma</div>
                    </a>
                    <a href="/#contacto" className="linkmenu w-inline-block">
                        <div className="text-block-28">Contacto</div>
                    </a>
                </div>
                <div data-w-id="de82861c-4a08-2283-3bf3-5f034eb3438f" className="div-block-60" onClick={handleMenuOpen}>
                    <img src="images/menuIcon.png" alt="" className="image-24" /></div>
                <div className="contuser">
                    <div className="user">
                    <Link href="/carro-de-compras">
                            <div title="Ira al carro de compras" className="containercarro"><img src="images/carro.png" alt="" className="image-21" />
                                <div className="text-block-25">{carro.length}</div> 
                            </div>
                    </Link>        
                    </div>
                </div>
            </div>
            <div className="div-block-61">
                <div ref={menuRef} style={{transition: 'max-height 0.6s'}} className="navegacionmobile">
                    <a href="/#inicio" className="linkmenu w-inline-block">
                        <div className="text-block-28" >Home</div>
                    </a>
                    <a href="/#quienesSomos" className="linkmenu w-inline-block">
                        <div className="text-block-28" onClick={handleMenuOpen}>Quiénes somos</div>
                    </a>
                    <a href="/#cursos" className="linkmenu w-inline-block">
                        <div className="text-block-28" onClick={handleMenuOpen}>Cursos</div>
                    </a>
                    <a href="/#servicios" className="linkmenu w-inline-block">
                        <div className="text-block-28" onClick={handleMenuOpen}>Servicios</div>
                    </a>
                    <a href="/#novedades" className="linkmenu w-inline-block">
                        <div className="text-block-28" onClick={handleMenuOpen}>Novedades</div>
                    </a>
                    <a href="https://campusnube.com.ar/login" className="linkmenu w-inline-block" target="_blank">
                        <div className="text-block-28" onClick={handleMenuOpen}>Plataforma</div>
                    </a>
                    <a href="/#contacto" className="linkmenu w-inline-block">
                        <div className="text-block-28" onClick={handleMenuOpen}>Contacto</div>
                    </a>
                </div>
            </div>
        </div>

        

    )

}

{/*<div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="navbar w-nav">
            <div className="div-block-55"><a href="#home" className="brand w-nav-brand"><img src="images/logo.png" alt="logo Saint Patrick" className="image-3" /><div className="div-block-46"><h2 className="heading-3">INSTITUTO DE INGLÉS</h2><h1 className="heading-4">SAINT PATRICK</h1></div></a>
                <nav role="navigation" className="nav-menu w-nav-menu">
                    <a href="/#inicio"  >Home</a>
                    <a href="/#quienesSomos" className="navlink w-nav-link">Quiénes somos</a>
                    <a href="/#cursos" className="navlink w-nav-link">Cursos</a>
                    <a href="#servicios" className="navlink w-nav-link">Servicios</a><a href="#novedades" className="navlink w-nav-link">Novedades</a>
                    <a href="https://campusnube.com.ar/login" className="navlink w-nav-link" target="_blank">Plataforma</a>
                    <a href="#contacto" className="navlink w-nav-link">Contacto</a>
                </nav>
            </div>
            <div id="menuButton" className="menu-button w-nav-button" onClick={handleMenu}>
                <div className="icon w-icon-nav-menu" />

            </div>
            <div className="contuser">
                <div className="user">
                    <Link href="/carro-de-compras">
                        <div title="Ira al carro de compras" className="containercarro"><img src="images/carro.png" alt="" className="image-21" />
                            <div className="text-block-25">{carro.length}</div>
                        </div>
                    </Link>
                </div>
                
            </div>
            <div id="navOverlay" className="w-nav-overlay" data-wf-ignore style={{  }}><nav role="navigation" className="nav-menu w-nav-menu" data-nav-menu-open style={{ transform: 'translateY(0px)', transition: 'transform 400ms ease 0s' }}><a href="#inicio" className="navlink w-nav-link w--nav-link-open">Home</a><a href="#quienesSomos" className="navlink w-nav-link w--current w--nav-link-open">Quiénes somos</a><a href="#cursos" className="navlink w-nav-link w--nav-link-open">Cursos</a><a href="#servicios" className="navlink w-nav-link w--nav-link-open">Servicios</a><a href="#novedades" className="navlink w-nav-link w--nav-link-open">Novedades</a><a href="#" className="navlink w-nav-link w--nav-link-open">Plataforma</a><a href="#contacto" className="navlink w-nav-link w--nav-link-open">Contacto</a></nav></div>
            <ToastContainer />

</div>}*/}