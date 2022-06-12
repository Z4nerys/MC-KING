import React from 'react'
import { Item } from './Item'
import { Cart } from 'react-bootstrap-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';

export const Carrito = ({ itemsCart, total, remove, add, reset }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const Buy = () => { 
        if(total !== 0){
            swal("Muchas Gracias", "Su compra se realizo con exito!", "success")
        }else{
            swal("Carrito vacio", "Tenes que tener minimo un producto", "warning")
        }
        setShow(false); 
    }
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="success" onClick={handleShow} className="px-5 py-2">
                <Cart aria-label="cart" className='back' />
            </Button >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tus productos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-danger' onClick={reset}>Vaciar</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <h5>Precio final: ${total}</h5>
                    <Button variant="primary" onClick={Buy}>
                        Terminar Compra
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}