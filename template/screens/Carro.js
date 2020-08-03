import { useRouter } from 'next/router'
import axios from 'axios';
import { API_URL } from '../config';
import SocketIOClient from 'socket.io-client';
import Modal from 'react-modal';
import Iframe from 'react-iframe'

const uuid = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
let socket;

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '80%',
      height                : '80%'
    }
  };
  

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
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [iframeUrl,setIframeUrl] = React.useState('');
    const [ preference, usePreference ] = React.useState({});
    const [ uniId, setUniId ] = React.useState(uuid())

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

    function openModal() {
        setIsOpen(true);
      }
  
      function closeModal(){
        setIsOpen(false);
      }

      const pay = async () => {
  
        const items = carro.map((item, index) => {
  
          const p = item.precio.replace(',', '.');
          const x = parseFloat(p).toFixed(2);
  
          const _item = {
            title: item.nombre,
            description: '',
            quantity: 1,
            currency_id: 'ARS',
            unit_price: 1000
          };
  
          return _item;
        });
  
        const res = await axios.post(`http://localhost:3005/api/preferences?external_reference=${uniId}`, {items: JSON.stringify(items)});
        const url = res.data.body.init_point;
  
        let productos = '';
  
        // sharedProps.cart.items.forEach(i => {
        //   productos += i.name + ' ';
        // });
  
        // const emailParams = {
        //   to: 'taringacomunidad93@gmail.com',
        //   subject: 'Alguien quiere comprar tu curso',
        //   text: `${credentials.name} (${credentials.email}) quiere comprar ${cantidad} productos`,
        //   html: `
        //     <b>Nombre: ${credentials.name}</b><br>
        //     <b>Email: ${credentials.email}</b><br>
        //     <b>Cursos: ${productos}</b><br>
        //     <b>Total: ${total}</b>
        //     <b>Método: MercadoPago </b>
        //   `
        // }
  
        // const email = await axios.post(`http://localhost:3005/api/PorFavors/sendEmail`, {
        //   msg: emailParams
        // })
  
        setIframeUrl(url);
      
        openModal();
      };

    React.useEffect(() => {
        // traemos el carro guardado, va a estar en modo string
        const carroString = localStorage.getItem('carro');

        // lo parseamos (se transfrorma en un tipo de dato real) y setemos la variable global carro
        setCarro(JSON.parse(carroString));

        socket = SocketIOClient('http://localhost:3005', {secure: false})

        socket.on('connect', () => {
            console.log('connected');
            setUniId(uuid());
          });

        socket.on('error', () => console.log('error'));
      
        socket.on(uniId, msg => {
            console.log(msg); 
            // toast('Compra realizada exitosamente');
            closeModal();
            cleanCart();
          });
    }, [])
    
    return (

        <div className="section-10" ref={elementRefCancelar}>
        <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <Iframe url={iframeUrl}
                  width="100%"
                  height="100%"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"/>
          </Modal>
          
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
                    <div className="text-block-27" onClick={pay}>Pagar con</div><img src="images/mercaPago.png" alt="" className="image-23" /></div>
            </div>
        </div>

    )
}          