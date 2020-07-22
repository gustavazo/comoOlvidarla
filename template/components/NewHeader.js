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
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light, navBar" >
            
            {/*<a className="navbar-brand" href="#">Navbar</a>*/}
            
            <div className="div-block-55">
                <a href="/#inicio" className="brand w-nav-brand">
                    <img src="images/logo.png" alt="logo Saint Patrick" className="image-3" />
                    <div className="div-block-46">
                        <h2 className="heading-3">INSTITUTO DE INGLÉS</h2><h1 className="heading-4">SAINT PATRICK</h1>
                    </div>
                </a>
            </div>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse menuResponsive" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" style={{ justifyContent: 'flex-end', width: '100%'}}>
                    <li className="nav-item active">
                        <a className="navlink w-nav-link nav-link" style={{color: '#9b2019'}} href="/#inicio">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navlink w-nav-link" style={{color: '#9b2019'}} href="/#quienesSomos">Quienes somos</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link navlink w-nav-link" style={{color: '#9b2019'}} href="/#cursos">Cursos</a>
                    </li>
                    <div className="contuser">
                        <div className="user">
                            <Link href="/carro-de-compras">
                                <div title="Ira al carro de compras" className="containercarro"><img src="images/carro.png" alt="icono carro de compras" className="image-21" />
                                    <div className="text-block-25">{carro.length}</div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </ul>
               
                

            </div>
            
        </nav>

        

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