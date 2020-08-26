    
    
export default (props) => {    
  const className = props.abajo ? 'stickymenu abajo' : 'stickymenu side';

  return (  
    <div className={className}>
        {props.categorias.map(categoria =>
            <>    
                <div className="titulosticky">{categoria.nombre}</div>
                    {categoria.categorias.map(categoria2 => {
                        const categoriaHilo = categoria.nombre + " > " + categoria2.nombre + " > "
                        
                        return (
                            <>
                            <div className="subtitulosticky">{categoria2.nombre}</div>
                                {categoria2.categorias.map(categoria3 =>    
                                    <a href={`/cursos?categoriaId=${categoria3.id}&categoriaStr=${categoriaHilo}`} 
                                         
                                        className="linkcurso2">{categoria3.nombre}
                                    </a>
                                )}    
                        </>
                        )
                    }
                        
                    )}
            </>
        )}    
    </div>
  )  
}    



{/*const categoriaHilo = `${props.cat1} > ${props.cat2} >`
    console.log("====>",`/cursos?categoriaId=${props.categoria.id}&categoriaStr=${categoriaHilo}`);

    return (
        <Link href={`/cursos?categoriaId=${props.categoria.id}&categoriaStr=${categoriaHilo}`} target="_blank">*/}