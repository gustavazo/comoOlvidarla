import { useRouter } from 'next/router'
import axios from 'axios';
import { API_URL } from '../config';



const Producto = props => {
    
    
    const precio = new Intl.NumberFormat("de-DE", {style: "currency", currency: "ARS"}).format(parseFloat(props.info.precio).toFixed(2)); 
    
    
     

    return (
        <div className="compra">
                    <div className="text-block-18 descripcion">{props.info.nombre}</div>
                    <div className="div-block-45">
                        <div className="text-block-19">{precio}</div>
                    </div>
                    <button className="anularcompra w-button" onClick={() => props.handleAnular(props.info)}>Anular compra</button>
        </div>
    )
}

export default () => {
    const [carro, setCarro] = React.useState([]);

    const elementRefCancelar = React.useRef();

    let sumaTotal = 0;
    
    carro.forEach(producto => {
        sumaTotal += parseFloat(producto.precio);
    })

    const handleAnular = (producto) => {
        const carroActual = [...carro];

        carroActual.splice(carroActual.indexOf(producto), 1);

        localStorage.setItem('carro', JSON.stringify(carroActual));

        setCarro(carroActual);
        
        let event = new CustomEvent("carroModificado", { detail: { mensaje: `El producto ${producto.nombre} ha sido eliminado` }, bubbles: true })

        elementRefCancelar.current.dispatchEvent(event);
    }
    
    React.useEffect(() => {
        // traemos el carro guardado, va a estar en modo string
        const carroString = localStorage.getItem('carro');

        // lo parseamos (se transfrorma en un tipo de dato real) y setemos la variable global carro
        setCarro(JSON.parse(carroString));
    }, [])
    
    return (

        <div className="section-10" ref={elementRefCancelar}>
            <div className="div-block-40">
                <h2 className="h2subrubro">Carro de compras</h2>
            </div>
            <div className="wrappercompras">
                
            {
                carro.map(producto => 
                    <Producto info={producto} handleAnular={handleAnular} referencia={elementRefCancelar}/>    
                )
            } 

            </div>
            <div className="totalcompra" />
            <div className="compra">
                <div className="text-block-18 descripcion"><strong>TOTAL A PAGAR:</strong></div>
                <div className="div-block-45">
                    
                    <div className="text-block-19">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "ARS"}).format(sumaTotal.toFixed(2))}</div>
                </div>
                <div className="div-block-59">
                    <div className="text-block-27">Pagar con</div><img src="images/mercaPago.png" alt="" className="image-23" /></div>
            </div>
        </div>

    )
}          