import StickyMenu from '../components/StickyMenu';
import { useRouter } from 'next/router'
import axios from 'axios';
import { API_URL } from '../config';

let carro;

const Producto = props => {
    const elementRef = React.useRef();

    const productoExiste = carro.filter(productoExistente => props.info.id === productoExistente.id).length > 0;

    const [productoAniadido, setProductoAniadido] = React.useState(productoExiste);

    const handleCompra = (producto) => {

        console.log('HANDLE COMPRA');

        //cambia el flag del boton
        setProductoAniadido(true);
        console.log(productoAniadido);

        // pusheamos el producto al carro 
        carro.push(producto);

        // pasamos a string el carro actualizado para setearlo y actualizarlo en el storage
        const carroActualizado = JSON.stringify(carro);
        localStorage.setItem('carro', carroActualizado);
        console.log(carro);

        let event = new CustomEvent("carroModificado", {detail: {mensaje: `El producto ${props.info.nombre} ha sido agregado`}, bubbles: true})

        elementRef.current.dispatchEvent(event);
    }

    const handleAnular = (producto) => {
        
        console.log(producto);
        //cambia el flag del boton
        setProductoAniadido(false);
        
        // borramos el producto del carro
        carro.splice(carro.indexOf(producto), 1);
        console.log(carro);
        
        // pasamos a string el carro actualizado para setearlo y actualizarlo en el storage
        const carroActualizado = JSON.stringify(carro);
        localStorage.setItem('carro', carroActualizado);

        let event = new CustomEvent("carroModificado", {detail: {mensaje: `El producto ${props.info.nombre} ha sido eliminado`}, bubbles: true})

        elementRef.current.dispatchEvent(event);
    }

    const precio = parseFloat(props.info.precio).toFixed(2);

    return (
        <div className="curso" ref={elementRef}>
            <h4 className="heading-2">{props.info.nombre}</h4>
            
            {/*<div dangerouslySetInnerHTML={{ __html: this.state.description }} />*/}
            
            <p className="paragraph-6" dangerouslySetInnerHTML={{ __html: props.info.descripcion}} />
            <div className="text-block-19">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "ARS"}).format(precio)}</div>



            <div className="div-block-42">
                <div className="div-block-41">
                    {!productoAniadido?
                        <>
                            <img src="images/carro.png" alt="carro de compras" className="image-15" />
                            <button className="button-5 w-button" onClick={() => handleCompra(props.info)}> Añadir al<br />carro de compras</button>
                        </>
                        :
                        <>
                            <img src="images/carro.png" alt="carro de compras" className="image-15" />
                            <button className="button-5b w-button" onClick={() => handleAnular(props.info)}> Eliminar del<br />carro de compras</button>
                        </>
                    }
                </div>
                
                <div className="div-block-41 azul"><img src="images/carro.png" alt="" className="image-15" /><a href="/carro-de-compras" target="_blank" className="button-5 w-button">Ir al carro<br />de compras</a></div>
            </div> 
        </div>  
    )
}

const UltimaCategoria = (props) => {    
    return (
        <div className="contcursos">
                <div className="imgcurso"><img src={props.categoria.foto} alt="" className="image-16" /></div>
                <div className="infocurso">
                    <h3 className="h3subsubrubro">{props.categoria.nombre}</h3>
                    <p className="paragraph-5" dangerouslySetInnerHTML={{ __html: props.categoria.descripcion}}></p>
                    <div className="wrappercursos">
                        {
                            props.categoria.productos.map(producto => 
                                <Producto info={producto}/>    
                            )
                        } 

                    </div>
                </div>
        </div>
    )
}
 
export default (props) => {
    const [categorias, setCategorias] = React.useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = React.useState({
        categorias: []
    });
    const [ categoriasPadres, setCategoriasPadres ] = React.useState('')

    console.log('CATEGORIA SELECCIONADA', categoriaSeleccionada);

    React.useEffect(() => {
        const categoriasString = localStorage.getItem('categorias');

        const urlParamsString = window.location.search;

        const urlParams = new URLSearchParams(urlParamsString);

        const categoriaId = urlParams.get('categoriaId');
        setCategoriasPadres(urlParams.get('categoriaStr'));

        console.log('categorias', categoriasPadres);
        
        const categoriasJSON = JSON.parse(categoriasString);

        setCategorias(categoriasJSON);

        axios.get(`${API_URL}/categorias/${categoriaId}`)
            .then(result => {
                const categoria = result.data;

                setCategoriaSeleccionada(categoria);
            })

        // traemos el carro guardado, va a estar en modo string
        const carroString = localStorage.getItem('carro');

        // lo parseamos (se transfrorma en un tipo de dato real) y setemos la variable global carro
        carro = JSON.parse(carroString);

    }, [])

    return (
        <div className="section-10 w-clearfix">
            <div className="div-block-40">
                <h1 className="h1rubro"></h1>
                <h2 className="h2subrubro">{categoriasPadres} Regulares</h2>
            </div>

            <StickyMenu categorias={categorias} />

            <div className="todoscursos">
            
                            {
                                categoriaSeleccionada.categorias.map(cat => 
                                    <UltimaCategoria categoria={cat}/>

                                )
                            }

            </div>

            <StickyMenu categorias={categorias} abajo />
        </div>
    )
}          