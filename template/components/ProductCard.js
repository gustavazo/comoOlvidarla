import Link from 'next/link';

export default (props) => {

    console.log("props=", props);

    return (
        <Link href={`/cursos?categoriaId=${props.categoria.id}`} target="_blank">
            <div className="linkcurso w-inline-block">
                <div className="contcurso"><img src={props.categoria.foto} alt="" className="image-10" />
                    <div className="namecurso">
                        <div className="txtcurso">{props.categoria.nombre}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}                   