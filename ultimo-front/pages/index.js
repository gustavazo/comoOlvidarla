import Layout from '../components/Layout'
import AmpState from '../components/amp/AmpState'
import AmpScript from '../components/amp/AmpScript'
import {
  AmpIncludeAmpList,
  AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'

export const config = { amp: true }

const Home = (props) => (
  <>
    <Layout
      title="Welcome to AMP"
      description="Learn how to build an AMP First with Next.js."
    >
      <div>
        <div className="modal">
          <div className="divmodal">
            <div className="login">
              <div className="form-block-2 w-form">
                <form id="email-form-3" name="email-form-3" data-name="Email Form 3" className="form-2">
                  <div className="text-block-26">Ingresar</div><input type="text" className="modalfield w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder="Nombre" id="name-3" /><input type="email" className="modalfield w-input" maxLength={256} name="email-3" data-name="Email 3" placeholder="Email" id="email-3" required /><input type="text" className="modalfield w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="Contraseña" id="field-3" required /><input type="submit" defaultValue="Enviar" data-wait="Please wait..." className="submitmodal w-button" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div className="div-block-56">X</div>
          </div>
          <div className="divmodal">
            <div className="login">
              <div className="form-block-2 w-form">
                <form id="email-form-3" name="email-form-3" data-name="Email Form 3" className="form-2">
                  <div className="text-block-26">Registrarse</div><input type="text" className="modalfield w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder="Nombre" id="name-3" /><input type="email" className="modalfield w-input" maxLength={256} name="email-3" data-name="Email 3" placeholder="Email" id="email-3" required /><input type="text" className="modalfield w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="Contraseña" id="field-3" required /><input type="text" className="modalfield w-input" maxLength={256} name="field-3" data-name="Field 3" placeholder="Confirmar contraseña" id="field-3" required /><input type="submit" defaultValue="Enviar" data-wait="Please wait..." className="submitmodal w-button" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div className="div-block-56">X</div>
          </div>
        </div>
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
        <div id="home" className="section">
          <div className="div-block-6">
            <div className="columns w-row">
              <div className="w-col w-col-8 w-col-small-6 w-col-tiny-tiny-stack">
                <div className="div-block-9">
                  <h1 className="heading">La forma más rápida<br />de aprender inglés</h1>
                  <div data-delay={4000} data-animation="outin" data-autoplay={1} data-easing="ease-in-out" data-duration={650} data-infinite={1} className="slider w-slider">
                    <div className="w-slider-mask">
                      <div className="w-slide">
                        <div className="div-block-7">
                          <div>
                            <h2 className="h2slider">Cursos regulares para niños,<br />adolescentes y adultos.</h2>
                            <p className="paragraph">Saint Patrick ofrece cursos especialmente diseñados para niños,<br />adolescentes y adultos en una amplia variedad de horarios y niveles.</p><a href="#cursos" className="boton1 w-button">Más información</a></div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="div-block-7">
                          <div>
                            <h2 className="h2slider">Inglés online</h2>
                            <p className="paragraph">Con nuestras aulas virtuales brindamos cursos online</p><a href="#" className="boton1 w-button">Más información</a></div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="div-block-7">
                          <div>
                            <h2 className="h2slider">Exámenes<br />internacionales</h2>
                            <p className="paragraph">Certificados Universidad de Cambridge</p><a href="#" className="boton1 w-button">Más información</a></div>
                        </div>
                      </div>
                      <div className="w-slide">
                        <div className="div-block-7">
                          <div>
                            <h2 className="h2slider">División viajes educativos<br />Travel &amp; learn</h2>
                            <p className="paragraph">Grupales a REINO UNIDO y USA<br />Arma tu propio Curso<br />Tramitación de VISAS</p><a href="#" className="boton1 w-button">Más información</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="left-arrow w-slider-arrow-left">
                      <div className="w-icon-slider-left" />
                    </div>
                    <div className="right-arrow w-slider-arrow-right">
                      <div className="w-icon-slider-right" />
                    </div>
                    <div className="slide-nav w-slider-nav" />
                  </div>
                </div>
              </div>
              <div className="column w-col w-col-4 w-col-small-6 w-col-tiny-tiny-stack">
                <div className="text-block-3">Sucursales</div>
                <div>
                  <div className="datos"><img src="images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2">Villa Gdor. Gálvez: Pje. Ghirardi 969 </a>
                    <div className="telefono"><a href="#" className="link-2">0341-4928448</a></div>
                  </div>
                  <div className="datos"><img src="images/localitation.png" alt="" className="image-5" /><a href="#" className="link-2">Funes: Av. Fuerza Aérea 1918 </a>
                    <div className="telefono"><a href="#" className="link-2">0341-2310848</a></div>
                  </div>
                  <div className="datos"><img src="images/localitation.png" alt="" className="image-5" /><a href="#" className="link-2">Funes: Colegio Joan Miro de Funes - Catamarca 1857 </a>
                    <div className="telefono"><a href="#" className="link-2">0341 493-6094</a></div>
                  </div>
                  <div className="datos"><img src="images/localitation.png" alt="" className="image-5" /><a href="#" className="link-2">Alvear - Av. América y San Martín - Av. San Martin y Anchorena</a>
                    <div className="telefono"><a href="#" className="link-2">0341-4921143</a></div>
                  </div>
                </div>
                <div className="telefono mail"><img src="images/mail.png" alt="" className="image-6" /><a href="#" className="link-2">admin@saintpatrick.com.ar</a></div>
                <div className="redessociales"><a href="#" className="linksocial w-inline-block"><img src="images/face.png" alt="" className="imgredsoc" /></a><a href="#" className="linksocial w-inline-block"><img src="images/insta.png" alt="" className="imgredsoc" /></a><a href="#" className="linksocial w-inline-block"><img src="images/twitter.png" alt="" className="imgredsoc" /></a><a href="#" className="linksocial w-inline-block"><img src="images/youtube.png" alt="" className="imgredsoc" /></a></div>
              </div>
            </div>
          </div>
          <div className="div-block-14"><img src="images/abajo2.png" alt="" className="image-7" /></div>
        </div>
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
                        <h3 className="heading-7">Saint Patrick ofrece cursos especialmente diseñados para niños, adolescentes y adultos en una amplia variedad de horarios y niveles.</h3>
                        <h2 className="heading-6">Cursos regulares para niños,<br />adolescentes y adultos.</h2>
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
                    <div className="div-block-53"><img src="images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2 azul"><strong>Villa Gdor. Gálvez</strong>: Pje. Ghirardi 969 </a>
                      <div className="telefono"><a href="#" className="link-2 azul">0341-4928448</a></div>
                    </div>
                    <div className="div-block-52"><a title="Enviar Whatsapp" href="https://wa.me/5493413099096?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="linkwhat w-inline-block"><img src="images/whatt.png" alt="" className="image-19" /></a></div>
                  </div>
                  <div className="datos">
                    <div className="div-block-53"><img src="images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2 azul"><strong>Funes: </strong>Av. Fuerza Aérea 1908</a>
                      <div className="telefono"><a href="#" className="link-2 azul">0341-2310848</a></div>
                    </div>
                    <div className="div-block-52"><a title="Enviar Whatsapp" href="https://wa.me/5493412310848?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="linkwhat w-inline-block"><img src="images/whatt.png" alt="" className="image-19" /></a></div>
                  </div>
                  <div className="datos">
                    <div className="div-block-53"><img src="images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2 azul"><strong>Funes: </strong>Catamarca 1857<strong><br /></strong></a>
                      <div className="telefono"><a href="#" className="link-2 azul">0341 4936094</a></div>
                    </div>
                    <div className="div-block-52"><a title="Enviar Whatsapp" href="https://wa.me/5493414936094?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="linkwhat w-inline-block"><img src="images/whatt.png" alt="" className="image-19" /></a></div>
                  </div>
                  <div className="datos">
                    <div className="div-block-53"><img src="images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2 azul"><strong>Alvear:</strong> América esquina San Martin </a>
                      <div className="telefono"><a href="#" className="link-2 azul">341 6206007</a></div>
                    </div>
                    <div className="div-block-52"><a title="Enviar Whatsapp" href="https://wa.me/5493416206007?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="linkwhat w-inline-block"><img src="images/whatt.png" alt="" className="image-19" /></a></div>
                  </div>
                </div>
              </div>
              <div className="column-24 w-col w-col-6 w-col-small-small-stack"><a href="#cursosOnline" className="link-block-2 w-inline-block"><img src="images/onLine.png" alt="" className="image-18" /><div data-w-id="67b45396-caf4-d828-2343-6e12181d725e" style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="text-block-23">Conocé más sobre<br />nuestros cursos<br />‍<strong><em>online!</em></strong></div></a></div>
            </div>
            <div className="social">
              <div className="redessociales"><a href="#" className="linksocial w-inline-block"><img src="images/face.png" alt="" className="imgredsoc" /></a><a href="#" className="linksocial w-inline-block"><img src="images/insta.png" alt="" className="imgredsoc" /></a><a href="#" className="linksocial w-inline-block"><img src="images/twitter.png" alt="" className="imgredsoc" /></a><a href="#" className="linksocial w-inline-block"><img src="images/youtube.png" alt="" className="imgredsoc" /></a></div>
            </div>
          </div>
        </div>
        <div id="cursosOnline" className="cursosonline">
          <div className="div-block-51">
            <h2 className="heading-9">Inscribite en nuestros<br />cursos <strong><em>online!</em></strong></h2>
            <h3 className="heading-10">Cursos para estudiar inglés cuando quieras y donde quieras.</h3>
            <p className="paragraph-7">Envianos un Email para mayor información:</p>
            <div className="form-block w-form">
              <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="form">
                <div className="columns-14 w-row">
                  <div className="column-25 w-col w-col-6 w-col-stack"><input type="text" className="txtfield2 w-input" maxLength={256} name="nombre" data-name="nombre" placeholder="Nombre" id="nombre-2" /><input type="email" className="txtfield2 w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Email" id="email-2" required /></div>
                  <div className="column-26 w-col w-col-6 w-col-stack"><textarea placeholder="Mensaje" maxLength={5000} id="field-2" name="field-2" className="txtfield2 msje w-input" defaultValue={""} /></div>
                </div>
                <div className="div-block-54"><input type="submit" defaultValue="Enviar" data-wait="Please wait..." className="buttonsubmit w-button" />
                  <a title="Click para enviar whatsapp" href="https://wa.me/5493413099096?text=Buen%20dia,%20necesito%20hacer%20una%20consulta" target="_blank" className="link-block-3 w-inline-block">
                    <div className="text-block-24">O envianos un whatsapp!</div><img src="images/whatsappIcon.png" alt="" className="image-20" /></a>
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div><a href="#" className="button-7 w-button">Ir a cursos online</a></div>
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
            <div data-w-id="dd619126-9a55-2987-29b4-57f64c32a728" style={{height: '0PX'}} className="columns-13 w-row">
              <div className="w-col w-col-6">
                <p className="parra1">La capacitación y actualización permanente de las docentes, lleva a brindar una calidad educativa que permite a nuestros alumnos alcanzar un destacado nivel en el manejo oral y escrito del idioma inglés, satisfaciendo de esta manera las expectativas de alumnos y padres. A nivel provincial el Ministerio de Educación de la provincia de Santa Fe a través de su departamento de Formación Profesional avala los certificados de nuestros alumnos según disposición 1/2015.</p>
              </div>
              <div className="w-col w-col-6">
                <p className="parra1">A nivel Nacional la <strong>UNIVERSIDAD TECNOLOGICA NACIONAL</strong> nos brinda la certificación de nuestros cursos y su aval para evaluar a los alumnos de toda la provincia de Santa Fe. <strong>Saint Patrick es OPEN VENUE</strong> de los exámenes internacionales de &nbsp;la <strong>Universidad de Cambridge</strong> por lo que nuestros alumnos rinden en nuestras instalaciones para obtener certificacion internacionalmente reconocida de su nivel de inglés.<br />A partir del año 2008 se incorpora &nbsp;<strong>DEPARTAMENTO DE VIAJES EDUCATIVOS</strong>&nbsp;llamado&nbsp;<strong>TRAVEL AND LEARN,</strong>&nbsp;para conocer nuevos lugares y aprender Inglés en la cuna del idioma. Nuestro Departamento de Capacitación docente ISP brinda cursos de actualización &nbsp;continua presenciales y <strong>online </strong>a toda la provincia.</p>
              </div>
            </div><a data-w-id="8b631f53-bc80-4ed7-53bf-a9e6348ccd5a" href="#" className="button-6 w-button">Ver más</a></div>
        </div>
        <div id="cursos" className="section-8">
          <div className="tituloseccion">
            <h2 className="heading-8">Cursos</h2>
          </div>
          <div className="text-block-8">Anuales</div>
          <p className="paragraph-3 centrado">El Instituto cuenta con computadoras en todos los salones de clase para ser usados y aprovechados durante la clase y también los alumnos pueden seguir usando el material en sus casas.<br />El uso de pantallas interactivas permite a los alumnos interactuar con el idioma. Todos los cursos cuentan con clases interactivas combinando la enseñanza tradicional con el uso de todas las herramientas que nos brindan las nuevas tecnologías.</p>
          <div className="wrapitems">
            <a title="Más información" href="modelo.html" target="_blank" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/CursoRegular.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Regulares</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/apoyoEscolar.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Clases personalizadas</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/businessClasses.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Business classes</div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-block-8">De verano</div>
          <div className="wrapitems">
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/atencionCliente.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Conversación &nbsp;y atención al cliente</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/conversacion.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Conversación niveles intermedios y avanzados</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/tradTecnica.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Traducción técnica</div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-block-8">Online | Aula virtual</div>
          <p className="paragraph-3 centrado">Un curso para estudiar inglés cuando quiera y donde quiera.</p>
          <div className="wrapitems">
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/cursoOnline.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Curso básico</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/cursoOnline2.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Niveles intermedios y avanzados</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="servicios" className="section-9">
          <div className="tituloseccion">
            <h2 className="heading-8">Servicios</h2>
          </div>
          <div className="text-block-8">Para empresas</div>
          <p className="paragraph-3 centrado">Cada día adquiere más importancia el conocimiento de idiomas en el ámbito profesional como herramienta de trabajo. Es importante una formación a la medida de las necesidades concretas de cada empresa y que se adecue a su horario laboral.</p>
          <div className="wrapitems">
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/ingleEmpresas2.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Inglés para empresas</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/inglesEjecutivos.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Inglés para ejecutivos</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/traduccion.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Traducción e interpretación</div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-block-8">Tramitación de visas</div>
          <div className="wrapitems">
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/canada.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Canadá</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/visa.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">USA</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/comunidadEuropea.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Otras</div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-block-8">Intercambios</div>
          <div className="wrapitems">
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/onlineTrans.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">De trabajo</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/pasantia.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Pasantías</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/workTravel.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Work and Travel</div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-block-8">División viajes educativos | Travel and learn</div>
          <div className="wrapitems">
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/ukTour.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Grupales al Reino Unido</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/usaTour.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Grupales a USA</div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-block-8">Certificación de exámenes</div>
          <div className="wrapitems">
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/santaFe.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Provincial</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/utn.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Nacional</div>
                </div>
              </div>
            </a>
            <a title="Más información" href="#" className="linkcurso w-inline-block">
              <div className="contcurso"><img src="images/cambridge.jpg" alt="" className="image-10" />
                <div className="namecurso">
                  <div className="txtcurso">Internacional</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="novedades" className="section-7">
          <div className="tituloseccion">
            <h2 className="heading-8">Novedades</h2>
          </div>
          <div className="wrapitems">
            <div className="novedad"><img src="images/businessClasses.jpg" alt="" className="imgnovedad" />
              <div className="txtnovedad">
                <div className="fecha">12/09/19</div>
                <div className="titnovedad">This is some text inside of a div block.</div>
                <p className="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
            </div>
            <div className="novedad"><img src="images/ukTour.jpg" alt="" className="imgnovedad" />
              <div className="txtnovedad">
                <div className="fecha">20/09/19</div>
                <div className="titnovedad">This is some text inside of a div block.</div>
                <p className="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
            </div>
            <div className="novedad"><img src="images/conversacion.jpg" alt="" className="imgnovedad" />
              <div className="txtnovedad">
                <div className="fecha">05/10/19</div>
                <div className="titnovedad">This is some text inside of a div block.</div>
                <p className="paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-32">
          <div className="text-block-8 centro">La opinión de nuestros alumnos</div>
          <div className="columns-6 w-row">
            <div className="w-col w-col-6">
              <div className="testimonio"><img src="images/alumna.jpg" alt="" className="imgtestimonio" />
                <div>
                  <blockquote className="block-quote">"Me gusta mucho estudiar en el instituto"</blockquote>
                  <div className="text-block-10">María Alvarez (12 años)</div>
                </div>
              </div>
            </div>
            <div className="w-col w-col-6">
              <div className="testimonio"><img src="images/rostro.png" alt="" className="imgtestimonio" />
                <div>
                  <blockquote className="block-quote">"He mejorado muchísimo mi nivel de inglés con el curso para ejecutivos"</blockquote>
                  <div className="text-block-10">Alejandra Fernández (28 años)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mapa" className="section-5">
          <div className="html-embed w-embed w-iframe"><iframe src="https://www.google.com/maps/d/u/0/embed?mid=1JyCXY3PMm4CUCuRSLtpCadM6GGAUsfbF" width="100%" height={400} /></div>
        </div>
        <div id="contacto" className="section-6">
          <div className="tituloseccion">
            <h2 className="heading-8">Contacto</h2>
          </div>
          <div className="columns-7 w-row">
            <div className="column-16 w-col w-col-6">
              <div className="text-block-3">Sucursales</div>
              <div>
                <div className="datos"><img src="images/localitation.png" alt="" className="image-5" /><a href="#mapa" title="Ver mapa" className="link-2">Villa Gdor. Gálvez: Pje. Ghirardi 969 </a>
                  <div className="telefono"><a href="#" className="link-2">0341 489563</a></div>
                </div>
                <div className="datos"><img src="images/localitation.png" alt="" className="image-5" /><a href="#" className="link-2">Alvear - Av. América y San Martín - Av. San Martin y Anchorena</a>
                  <div className="telefono"><a href="#" className="link-2">0341 489563</a></div>
                </div>
                <div className="datos"><img src="images/localitation.png" alt="" className="image-5" /><a href="#" className="link-2">Funes: Av. Fuerza Aérea &amp; Juan Elorza </a>
                  <div className="telefono"><a href="#" className="link-2">0341 489563</a></div>
                </div>
                <div className="datos"><img src="images/localitation.png" alt="" className="image-5" /><a href="#" className="link-2">Funes: Av. Fuerza Aérea &amp; Juan Elorza </a>
                  <div className="telefono"><a href="#" className="link-2">0341 489563</a></div>
                </div>
              </div>
              <div className="datos"><img src="images/mail.png" alt="" className="image-6" /><a href="#" className="link-2">admin@saintpatrick.com.ar</a></div>
            </div>
            <div className="column-17 w-col w-col-6">
              <div className="text-block-11">Envíenos su consulta y a la brevedad le reponderemos</div>
              <div className="w-form">
                <form id="email-form" name="email-form" data-name="Email Form" className="w-clearfix"><input type="text" className="txtfield w-input" maxLength={256} name="name" data-name="Name" placeholder="Nombre" id="name" /><input type="email" className="txtfield w-input" maxLength={256} name="email" data-name="Email" placeholder="Email" id="email" required /><input type="text" className="txtfield w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="Teléfono" id="name-2" /><textarea placeholder="Mensaje" maxLength={5000} id="field" name="field" required className="txtfield w-input" defaultValue={""} /><input type="submit" defaultValue="Enviar" data-wait="Please wait..." className="submit w-button" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns-8 w-row">
            <div className="column-23 w-col w-col-4">
              <div>
                <ul role="list" className="list">
                  <li><a href="#home" className="linkfooter">Home</a></li>
                  <li><a href="#" className="linkfooter">Quiénes somos</a></li>
                  <li><a href="#cursos" className="linkfooter">Cursos</a></li>
                  <li><a href="#servicios" className="linkfooter">Servicios</a></li>
                  <li><a href="#novedades" className="linkfooter">Novedades</a></li>
                  <li><a href="#contacto" className="linkfooter">Contacto</a></li>
                </ul>
              </div>
            </div>
            <div className="w-col w-col-4">
              <div className="div-block-36"><img src="images/logoFooter.png" width={52} alt="" className="image-13" /></div>
            </div>
            <div className="w-col w-col-4">
              <div className="div-block-37">
                <div className="w-embed w-script">
                  {/*  AddToAny BEGIN  */}
                  <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                    <a className="a2a_dd" href="https://www.addtoany.com/share" />
                    <a className="a2a_button_facebook" />
                    <a className="a2a_button_twitter" />
                    <a className="a2a_button_whatsapp" />
                    <a className="a2a_button_email" />
                  </div>
                  {/*  AddToAny END  */}
                </div>
                <div className="text-block-14">Compartir</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-38">
          <div className="w-embed w-script">
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default Home;