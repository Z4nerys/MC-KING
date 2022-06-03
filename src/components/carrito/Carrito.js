import React from 'react'
import { Item } from './Item'

export const Carrito = ({ itemsCart }) => {

    return (
        <div className='container'>
            <h4 className='text-center mt-2'>Cart</h4>
            <button className='btn btn-danger'>clear cart</button>
            <table className="table">
                <thead>
                    <tr>
                        <br/>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemsCart.map((item, idx) => {
                            return <Item
                                key={idx}
                                {...item}
                            />
                        })
                    }
                </tbody>
            </table>
            <table className='table'>
                <thead>
                </thead>
                <tbody>
                    <h5>final price: $50</h5>
                </tbody>
            </table>
        </div>
    )
}