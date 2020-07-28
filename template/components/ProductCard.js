import Link from 'next/link';

export default (props) => {


    const categoriaHilo = `${props.cat1} > ${props.cat2} >`
    console.log("====>",`/cursos?categoriaId=${props.categoria.id}&categoriaStr=${categoriaHilo}`);

    return (
        <Link href={`/cursos?categoriaId=${props.categoria.id}&categoriaStr=${categoriaHilo}`} target="_blank">
            <div className="linkcurso w-inline-block" title="Click para más información">
                <div className="contcurso"><img src={props.categoria.foto} alt="" className="image-10" />
                    <div className="namecurso">
                        <div className="txtcurso">{props.categoria.nombre}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}                   