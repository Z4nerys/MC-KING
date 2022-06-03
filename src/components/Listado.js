import { Link} from "react-router-dom"
import { Carrito } from "./carrito/Carrito"
import { products } from '../data/data'
import { useState } from "react";

export const Listado = () => {

    const [itemsCart, setItemsCart] = useState([]);

    const add = (id) =>{
        const [item] = products.filter(product => product.id === id)
        setItemsCart([...itemsCart, item])
    }

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
                                <img src={`/assets/img/${product.img}`} alt={product.nombre} className="card-img-top" />

                                <div className="card-body">
                                    <h5 className="card-title">{product.nombre}</h5>
                                    <p className="card-text">$ {product.precio}</p>
                                    <Link to={`/detalle?ID=${product.id}`} className="btn btn-dark mx-2">Ver mas</Link>
                                    <button 
                                        className="btn btn-primary"
                                        onClick={()=> add(product.id)}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <Carrito itemsCart={itemsCart}/> 
        </>
    )
}
