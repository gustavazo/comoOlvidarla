export default () => {

    return (
        
        <div>
            <div id="contacto" className="section-6">
                <div className="tituloseccion">
                    <h2 className="heading-8">Contacto</h2>
                </div>
                <div className="columns-7 w-row">
                    <div className="column-16 w-col w-col-6">
                        <div className="text-block-3">Sucursales</div>
                        <div>
                            <div className="datos">
                                <img src="images/localitation.png" alt className="image-5" />
                                <a href="#mapa" title="Ver mapa" className="link-2">
                                    Villa Gdor. Gálvez: Pje. Ghirardi 969{" "}
                                </a>
                                <div className="telefono">
                                    <a href="#" className="link-2">
                                        0341 4928448
              </a>
                                </div>
                            </div>
                            <div className="datos">
                                <img src="images/localitation.png" alt className="image-5" />
                                <a href="#" className="link-2">
                                    Alvear -  América esquina San Martin
            </a>
                                <div className="telefono">
                                    <a href="#" className="link-2">
                                        0341 6206007
              </a>
                                </div>
                            </div>
                            <div className="datos">
                                <img src="images/localitation.png" alt className="image-5" />
                                <a href="#" className="link-2">
                                    Funes:  Av. Fuerza Aérea 1908
                                </a>
                                <div className="telefono">
                                    <a href="#" className="link-2">
                                        0341 2310848
              </a>
                                </div>
                            </div>
                            <div className="datos">
                                <img src="images/localitation.png" alt className="image-5" />
                                <a href="#" className="link-2">
                                    Funes: Catamarca 1857
                                </a>
                                <div className="telefono">
                                    <a href="#" className="link-2">
                                        0341 4936094
              </a>
                                </div>
                            </div>
                        </div>
                        <div className="datos">
                            <img src="images/mail.png" alt className="image-6" />
                            <a href="#" className="link-2">
                                admin@saintpatrick.com.ar
          </a>
                        </div>
                    </div>
                    <div className="column-17 w-col w-col-6">
                        <div className="text-block-11">
                            Envíenos su consulta y a la brevedad le reponderemos
        </div>
                        <div className="w-form">
                            <form form action="https://formsubmit.co/administracion@institutosaintpatrick.com" method="POST"
                                id="email-form"
                                name="email-form"
                                data-name="Email Form"
                                className="w-clearfix"
                            >
                                <input 
                                    type="text"
                                    className="txtfield w-input"
                                    maxLength={256}
                                    name="name"
                                    data-name="Name"
                                    placeholder="Nombre"
                                    id="name"
                                />
                                <input
                                    type="email"
                                    className="txtfield w-input"
                                    maxLength={256}
                                    name="email"
                                    data-name="Email"
                                    placeholder="Email"
                                    id="email"
                                    required
                                />
                                <input
                                    type="text"
                                    className="txtfield w-input"
                                    maxLength={256}
                                    name="name-2"
                                    data-name="Name 2"
                                    placeholder="Teléfono"
                                    id="name-2"
                                />
                                <textarea
                                    placeholder="Mensaje"
                                    maxLength={5000}
                                    id="field"
                                    name="field"
                                    required
                                    className="txtfield w-input"
                                    defaultValue={""}
                                />
                                <input
                                    type="submit"
                                    defaultValue="Enviar"
                                    data-wait="Please wait..."
                                    className="submit w-button"
                                />
                            </form>
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
                                <li>
                                    <a href="/#inicio" className="linkfooter">
                                        Home
              </a>
                                </li>
                                <li>
                                    <a href="/#quienesSomos" className="linkfooter">
                                        Quiénes somos
              </a>
                                </li>
                                <li>
                                    <a href="/#cursos" className="linkfooter">
                                        Cursos
              </a>
                                </li>
                                <li>
                                    <a href="/#servicios" className="linkfooter">
                                        Servicios
              </a>
                                </li>
                                <li>
                                    <a href="/#novedades" className="linkfooter">
                                        Novedades
              </a>
                                </li>
                                <li>
                                    <a href="https://campusnube.com.ar/login" className="linkfooter" target="_blank">
                                        Plataforma
              </a>
                                </li>
                                <li>
                                    <a href="/#contacto" className="linkfooter">
                                        Contacto
              </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-col w-col-4">
                        <div className="div-block-36">
                            <img
                                src="images/logoFooter.png"
                                width={52}
                                alt
                                className="image-13"
                            />
                        </div>
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
                <div className="w-embed w-script"></div>
            </div>
            {/* [if lte IE 9]><![endif] */}
        </div>

        
    )

} 