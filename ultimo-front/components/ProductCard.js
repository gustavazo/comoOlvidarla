import Link from 'next/link';

export default (props) => {
    
    const categoriaHilo = `${props.cat1} > ${props.cat2} >`

    return (
        <a className="linkcurso w-inline-block" href={`/cursos?categoriaId=${props.categoria.id}&categoriaStr=${categoriaHilo}`} target="_blank">
            <div  title="Click para más información">
                <div className="contcurso"><img src={props.categoria.foto} alt="" className="image-10" />
                    <div className="namecurso">
                        <div className="txtcurso">{props.categoria.nombre}</div>
                    </div>
                </div>
            </div>
        </a>
    )
}                   