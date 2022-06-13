import { Link } from "react-router-dom"
import { Carrito }  from "./carrito/Carrito"
import { products } from '../data/data'
import { useState } from "react";
import swal from 'sweetalert';



export const Listado = () => {

    const [itemsCart, setItemsCart] = useState([]);
    const [total, setTotal] = useState(0);

    const query = new URLSearchParams(window.location.search);
    //obtengo el dato que quiero de la url, mandandole el param que quiero obtener x parametro
    const prod = query.get('prod')
    let productos = []
    if(prod){
        productos = products.filter(product => product.tipo === prod)
    }else{
        productos = products
    }

    const reset = () =>{
        setItemsCart([])
        setTotal(0)
    }

    const add = (id) => {
        const [newItem] = products.filter(product => product.id === id)
        const itemInCart = itemsCart.find(item => item.id === newItem.id)
        if (itemInCart) {
            setItemsCart(itemsCart.map(item => item.id === itemInCart.id
                ? { ...item, cantidad: item.cantidad + 1, precio: item.precio + newItem.precio } : item));
            setTotal(total + newItem.precio)
        } else {
            setItemsCart([...itemsCart, newItem])
            setTotal(total + newItem.precio)
        }

        swal({
            text: "Producto agregado al carrito",
            icon: "success",
            button: "Ok",
            timer: "2000"
        });
    }
    const remove = (id, precio, cantidad) => {
        const [item] = itemsCart.filter(product => product.id === id)
        if (item.cantidad === 1) {
            setItemsCart(itemsCart.filter(item => item.id !== id))
        }else{
            setItemsCart(itemsCart.map(item => item.id === id ? {...item, cantidad: item.cantidad-1, precio: item.precio - precio/cantidad}: item))
        }
        setTotal(total - precio/cantidad)
    }

    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Productos</h1>
        <div className="d-flex align-items-center me-5">  
            <Carrito 
                itemsCart={itemsCart}
                total={total}
                remove={remove}
                add={add} 
                reset={reset}
            />
        </div>
        </div>    
            <div className="row mt-3 ">
                {
                productos.map((product, idx) => {
                    return (
                        <div className="col-3 mb-5" key={idx}>
                            <div className="card">
                                <img src={`/assets/img/${product.img}`} height={270} alt={product.nombre} className="card-img-top" />
                                <div className="card-body text-center">
                                         <h5 className="card-title ">{product.nombre}</h5>
                                         <p className="card-text">$ {product.precio}</p>
                                    <Link to={`/detalle?ID=${product.id}`} className="btn btn-dark mx-3 px-5">Ver mas</Link>
                                    <button
                                        className="btn btn-success mx-3 px-5 mt-1"
                                        onClick={() => add(product.id)}
                                    >
                                        Agregar
                                    </button>
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
