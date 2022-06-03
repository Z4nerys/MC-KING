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
                        <th scope="col">Name</th>
                        <th scope="col">Img</th>
                        <th scope="col">Price</th>
                        <th scope="col">Minutes</th>
                        <th scope="col">Remove</th>
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
                    <tr>
                        <th scope="col">Final Price</th>
                        <th scope="col">Ready in total</th>
                        <th scope="col">Health Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>$ price</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}