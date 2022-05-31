import { Link} from "react-router-dom"
import { products } from '../data/data'

export const Listado = () => {

    return (
        <>
            {/* {!tokenExist && <Redirect to='/' />} */}

            <h1 >Productos</h1>
            <hr/>
            {/*modificar el estilo. el header tapa el titulo */}
            <h1 >Productos</h1>
            <div className="row mt-3 ">
                {products.map((product, idx) => {
                    return (
                        <div className="col-3 mb-5" key={idx}>
                            <div className="card">
                                <img src={`/assets/img/${product.img}`} alt="product" className="card-img-top" />

                                <div className="card-body">
                                    <h5 className="card-title">{product.nombre}</h5>
                                    <p className="card-text">{product.precio}</p>
                                    <Link to={`/detalle?movieID=${product.id}`} className="btn btn-dark mx-2">Comprar</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </>
    )
}
