    
    
export default (props) => {    
  const className = props.abajo ? 'stickymenu abajo' : 'stickymenu side';
  
  return (  
    <div className={className}>
        {props.categorias.map(categoria =>
            <>    
                <div className="titulosticky">{categoria.nombre}</div>
                    {categoria.categorias.map(categoria2 =>
                        <>
                            <div className="subtitulosticky">{categoria2.nombre}</div>
                                {categoria2.categorias.map(categoria3 =>    
                                    <a href="#" className="linkcurso2">{categoria3.nombre}</a>
                                )}    
                        </>
                    )}
            </>
        )}    
    </div>
  )  
}    

