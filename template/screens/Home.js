import ProductCard from '../components/ProductCard';
import GoogleMapReact from 'google-map-react';

const SectionCategoria = (props) => {
  
  return (
    <div id={props.categoria.nombre.toLowerCase()} className="section-9">
      <div className="tituloseccion">
        <h2 className="heading-8">{props.categoria.nombre}</h2>
      </div>

      {props.categoria.categorias.map(categoria2 => {
        console.log('antes', categoria2.nombre)
        const idSinEspacios = categoria2.nombre.replace(/\s/g,'')
        const idSinAcentosNiEspacio = idSinEspacios.replace(/\ó/, 'o')

        console.log('ID', idSinEspacios);
      
        return (
            <div>
              <div id={idSinAcentosNiEspacio} className="text-block-8">{categoria2.nombre}</div>
              <div className="paragraph-3 centrado" dangerouslySetInnerHTML={{__html: categoria2.descripcion}} /> 
              <div className="wrapitems">

                {categoria2.categorias.map(categoria3 => (
                  <ProductCard categoria={categoria3} cat2={categoria2.nombre} cat1={props.categoria.nombre}/>
                ))}

              </div>
            </div>
          )
        }
      )}
    </div>
  )
};

const Novedad = (props) => {
  
  let fechaTotal = new Date(props.novedad.fecha);

  
  let fecha = fechaTotal.getDate() + '/' + (Number(fechaTotal.getMonth()) + 1) + '/' + fechaTotal.getFullYear();
  
  return (
    <div className="novedad"><img src={props.novedad.foto} alt={props.novedad.titulo} className="imgnovedad" />
      <div className="txtnovedad">
        <div className="fecha">{fecha}</div>
        <div className="titnovedad">{props.novedad.titulo}</div>
        <div className="paragraph-4" dangerouslySetInnerHTML={{__html: props.novedad.descripcion}} />
      </div>
    </div>
  )
}


export default (props) => {
  console.log('LA CONCHANDE TU MADRE')

  React.useEffect(() => {
    const categoriasString = JSON.stringify(props.categorias);
    console.log('LA CONCHANDE TU MADRE')

    localStorage.setItem('categorias', categoriasString);
    
    if (!localStorage.getItem('carro')) {
      localStorage.setItem('carro', '[]');
    }

  }, [])

  const handleShow = () => {
    document.getElementById('forro').style = 'max-height: 280px'; 
    document.getElementById('botonVerMas').style = 'display: none';    
  }

  return (
    <div>
      <div id="inicio" className="home">
        <div className="div-block-48">
          <div className="columns-11 w-row">
            <div className="column-22 w-col w-col-6 w-col-small-small-stack">
              <div>
                <h1 className="heading-5">Saint Patrick,<br />La forma más rápida de aprender Inglés.</h1>
              </div>
              <div data-delay={4000} data-animation="outin" data-autoplay={1} data-duration={500} data-infinite={1} className="slider-2 w-slider">
                <div className="w-slider-mask">
                  <div className="w-slide">
                    <div className="div-block-47">
                      <h2 className="heading-6">Cursos regulares para niños,<br />adolescentes y adultos.</h2>
                      <h3 className="heading-7">Saint Patrick ofrece cursos especialmente diseñados para niños, adolescentes y adultos en una amplia variedad de horarios y niveles.</h3>
                      
                    </div>
                  </div>
                  <div className="w-slide">
                    <div className="div-block-47">
                      <h2 className="heading-6">Inglés online</h2>
                      <h3 className="heading-7">Con nuestras aulas virtuales brindamos cursos online.</h3>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div className="div-block-47">
                      <h2 className="heading-6">Exámenes internacionales</h2>
                      <h3 className="heading-7">Certificados Universidad de Cambridge.</h3>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div className="div-block-47">
                      <h2 className="heading-6">División viajes educativos<br />Travel &amp; learn.</h2>
                      <h3 className="heading-7">Grupales a REINO UNIDO y USA.<br />Armá tu propio Curso.<br />Tramitación de VISAS.</h3>
                    </div>
                  </div>
                </div>
                <div className="left-arrow-2 w-slider-arrow-left">
                  <div className="w-icon-slider-left" />
                </div>
                <div className="right-arrow-2 w-slider-arrow-right">
                  <div className="w-icon-slider-right" />
                </div>
                <div className="slide-nav-2 w-slider-nav w-slider-nav-invert w-shadow" />
              </div>
              <div className="direcciones">
                <div className="datos">
                  <div className="div-block-53"><img src="/images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2 azul"><strong>Villa Gdor. Gálvez</strong>: Pje. Ghirardi 969 </a>
                    <div className="telefono"><a href="#" className="link-2 azul">0341-4928448</a></div>
                  </div>
                  <div className="div-block-52"><a title="Enviar Whatsapp" href="https://wa.me/5493413099096?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="linkwhat w-inline-block"><img src="/images/whatt.png" alt="" className="image-19" /></a></div>
                </div>
                <div className="datos">
                  <div className="div-block-53"><img src="/images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2 azul"><strong>Funes: </strong>Av. Fuerza Aérea 1908</a>
                    <div className="telefono"><a href="#" className="link-2 azul">0341-2310848</a></div>
                  </div>
                  <div className="div-block-52"><a title="Enviar Whatsapp" href="https://wa.me/5493412310848?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="linkwhat w-inline-block"><img src="/images/whatt.png" alt="" className="image-19" /></a></div>
                </div>
                <div className="datos">
                  <div className="div-block-53"><img src="/images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2 azul"><strong>Funes: </strong>Catamarca 1857<strong><br /></strong></a>
                    <div className="telefono"><a href="#" className="link-2 azul">0341 4936094</a></div>
                  </div>
                  <div className="div-block-52"><a title="Enviar Whatsapp" href="https://wa.me/5493414936094?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="linkwhat w-inline-block"><img src="/images/whatt.png" alt="" className="image-19" /></a></div>
                </div>
                <div className="datos">
                  <div className="div-block-53"><img src="/images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2 azul"><strong>Alvear:</strong> América esquina San Martin </a>
                    <div className="telefono"><a href="#" className="link-2 azul">341 6206007</a></div>
                  </div>
                  <div className="div-block-52"><a title="Enviar Whatsapp" href="https://wa.me/5493416206007?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="linkwhat w-inline-block"><img src="/images/whatt.png" alt="" className="image-19" /></a></div>
                </div>
              </div>
            </div>
            <div className="column-24 w-col w-col-6 w-col-small-small-stack"><a href="#cursosOnline" className="link-block-2 w-inline-block"><img src="/images/onLine.png" alt="" className="image-18" /><div data-w-id="67b45396-caf4-d828-2343-6e12181d725e" style={{ WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }} className="text-block-23">Conocé más sobre<br />nuestros cursos<br />‍<strong><em>online!</em></strong></div></a></div>
          </div>
          
          <div className="social">
            <div className="redessociales">
              <a title="Facebook" href="https://www.facebook.com/institutosaintpatrick" target="_blanck" className="linksocial w-inline-block"><img src="/images/face.png" alt="" className="imgredsoc" /></a>
              <a title="Instagram" href="https://www.instagram.com/inst.saintpatrick/" target="_blanck" className="linksocial w-inline-block"><img src="/images/insta.png" alt="" className="imgredsoc" /></a>
              <a title="Blog" href="#" className="linksocial w-inline-block"><img src="/images/blog.png" alt="" className="imgredsoc" /></a>
              <a href="#" className="linksocial w-inline-block"><img src="/images/youtube.png" alt="" className="imgredsoc" /></a>
            </div>
          </div>

        </div>
      </div>
      <div id="cursosOnline" className="cursosonline">
        <div className="div-block-51">
          <h2 className="heading-9">Inscribite en nuestros<br />cursos <strong><em>online!</em></strong></h2>
          <h3 className="heading-10">Cursos para estudiar inglés cuando quieras y donde quieras.</h3>
          <p className="paragraph-7">Envianos un Email para mayor información:</p>
          <div className="form-block w-form">
            
            <form action="https://formsubmit.co/administracion@institutosaintpatrick.com" method="POST" className="form">
              <div className="columns-14 w-row">
                <div className="column-25 w-col w-col-6 w-col-stack">
                  <input type="text" className="txtfield2 w-input" maxLength={256} name="nombre" data-name="nombre" placeholder="Nombre" id="nombre-2" />
                  <input type="email" className="txtfield2 w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Email" id="email-2" required /></div>
                <div className="column-26 w-col w-col-6 w-col-stack"><textarea placeholder="Mensaje" maxLength={5000} id="field-2" name="field-2" className="txtfield2 msje w-input" defaultValue={""} /></div>
              </div>
              <div className="div-block-54"><input type="submit" defaultValue="Enviar" data-wait="Please wait..." className="buttonsubmit w-button" />
                <a title="Click para enviar whatsapp" href="https://wa.me/5493413099096?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="link-block-3 w-inline-block">
                  <div className="text-block-24">O envianos un whatsapp!</div><img src="/images/whatsappIcon.png" alt="" className="image-20" /></a>
              </div>
            </form>

            {/*<div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>*/}


          </div><a href="/cursos?categoriaId=29&categoriaStr=Cursos%20>%20Anuales%20>" className="button-7 w-button">Ir a cursos online</a></div>
      </div>
      
      <div id="quienesSomos" className="section-11">
        <div className="tituloseccion">
          <h2 className="heading-8">Quienes somos</h2>
        </div>
        <div className="div-block-49" />
        <div className="div-block-50">
          <div className="columns-12 w-row">
            <div className="w-col w-col-6">
              <p className="parra1"><strong>ISP</strong>&nbsp;es una institución especializada en <strong>servicios lingüísticos</strong> y en <strong>cursos de formación en Inglés</strong> para la comunidad. En el año 1990 iniciamos nuestras actividades en la enseñanza del inglés británico con grupos de jóvenes y niños brindando apoyo escolar y cursos generales para el aprendizaje del idioma. La dirección del Instituto se encuentra a cargo de la Sra. Profesora Betina Filippini quien, con el apoyo de un cuerpo docente de alto nivel, ha desarrollado cursos de capacitación eficaces y actualizados.</p>
            </div>
            <div className="w-col w-col-6">
              <p className="parra1">Desde el año 2000 la institución ha brindado capacitación en<strong> inglés comercial</strong> y <strong>servicio de Traducción</strong> en eventos a la Asociación de Comercio e Industria de la localidad, como también a empresas privadas, organizaciones y empresas públicas de la localidad. Nuestras sedes brindan a nuestros alumnos todo lo necesario para hacer las clases más motivadoras y efectivas: ambientes climatizados, cómodamente amueblados, equipados con sistema de audio y con las últimas tecnologías en pantallas interactivas &nbsp;y una extensa biblioteca a disposición de nuestros alumnos.</p>
            </div>
          </div>
          <div data-w-id="dd619126-9a55-2987-29b4-57f64c32a728" id="forro" className="columns-13 w-row toShow">
            <div className="w-col w-col-6">
              <p className="parra1">La capacitación y actualización permanente de las docentes, lleva a brindar una calidad educativa que permite a nuestros alumnos alcanzar un destacado nivel en el manejo oral y escrito del idioma inglés, satisfaciendo de esta manera las expectativas de alumnos y padres. A nivel provincial el Ministerio de Educación de la provincia de Santa Fe a través de su departamento de Formación Profesional avala los certificados de nuestros alumnos según disposición 1/2015.</p>
            </div>
            <div className="w-col w-col-6">
              <p className="parra1">A nivel Nacional la <strong>UNIVERSIDAD TECNOLOGICA NACIONAL</strong> nos brinda la certificación de nuestros cursos y su aval para evaluar a los alumnos de toda la provincia de Santa Fe. <strong>Saint Patrick es OPEN VENUE</strong> de los exámenes internacionales de &nbsp;la <strong>Universidad de Cambridge</strong> por lo que nuestros alumnos rinden en nuestras instalaciones para obtener certificacion internacionalmente reconocida de su nivel de inglés.<br />A partir del año 2008 se incorpora &nbsp;<strong>DEPARTAMENTO DE VIAJES EDUCATIVOS</strong>&nbsp;llamado&nbsp;<strong>TRAVEL AND LEARN,</strong>&nbsp;para conocer nuevos lugares y aprender Inglés en la cuna del idioma. Nuestro Departamento de Capacitación docente ISP brinda cursos de actualización &nbsp;continua presenciales y <strong>online </strong>a toda la provincia.</p>
            </div>
          </div><div id="botonVerMas" data-w-id="8b631f53-bc80-4ed7-53bf-a9e6348ccd5a" className="button-6 w-button verMas" onClick={handleShow}>Ver más</div></div>
      </div>

      {props.categorias.map(categoria => (
        <SectionCategoria categoria={categoria} />
      ))}

      {/*<ProductCard  producto={props}/>*/}





      <div id="novedades" className="section-7">
        <div className="tituloseccion">
          <h2 className="heading-8">Novedades</h2>
        </div>
        <div className="wrapitems">
          
          {props.novedades.map(novedad => (
            <Novedad novedad={novedad} />
          ))}
          

        </div>
      </div>



      <div className="div-block-32">
        <div className="text-block-8 centro">La opinión de nuestros alumnos</div>
        <div className="columns-6 w-row">
          <div className="w-col w-col-6">
            <div className="testimonio"><img src="/images/alumna.jpg" alt="" className="imgtestimonio" />
              <div>
                <blockquote className="block-quote">"Me gusta mucho estudiar en el instituto"</blockquote>
                <div className="text-block-10">María Alvarez (12 años)</div>
              </div>
            </div>
          </div>
          <div className="w-col w-col-6">
            <div className="testimonio"><img src="/images/rostro.png" alt="" className="imgtestimonio" />
              <div>
                <blockquote className="block-quote">"He mejorado muchísimo mi nivel de inglés con el curso para ejecutivos"</blockquote>
                <div className="text-block-10">Alejandra Fernández (28 años)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mapa" className="section-5">
        <div className="html-embed w-embed w-iframe"><iframe src="https://www.google.com/maps/d/u/0/embed?mid=1JyCXY3PMm4CUCuRSLtpCadM6GGAUsfbF" width="100%" height="400"></iframe></div>
      </div>
    </div>
  );
}