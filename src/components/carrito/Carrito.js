import React from 'react'
import { Item } from './Item'

export const Carrito = ({ itemsCart, total, remove, add, reset}) => {

    return (
        <div className='container'>
            <h4 className='text-center mt-2'>Cart</h4>
            <button className='btn btn-danger' onClick={reset}>clear cart</button>
            <table className="table mt-2">
                <tbody>
                    {
                        itemsCart.map((item, idx) => {
                            return <Item
                                key={idx}
                                {...item}
                                remove={remove}
                                add={add}
                            />
                        })
                    }
                </tbody>
            </table>
            <h5>Precio final: ${total}</h5>
        </div>
    )
}