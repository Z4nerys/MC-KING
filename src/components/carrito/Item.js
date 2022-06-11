import React from 'react'

export const Item = ({
    id,
    nombre,
    img,
    precio,
    cantidad
}) => {
    
    return (
        <>
            <tr>
                <td>{nombre}</td>
                <td>{cantidad}</td>
                <td><img src={`/assets/img/${img}`} width={100} alt={nombre}/></td>
                <td>${precio}</td>
                <td><button className='btn btn-info'>remove</button></td>
            </tr>
        </>
    )
} 