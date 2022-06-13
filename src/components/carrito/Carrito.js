import React from 'react'
import { Item } from './Item'
import { Cart } from 'react-bootstrap-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';

export const Carrito = ({ itemsCart, total, remove, add, reset }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const endBuy = () =>{
        if(total !== 0){
            setShow(false);
            reset();
            swal({
                text: "Su compra se realizo con exito!",
                icon: "success",
                button: "Ok",
                timer: "1000"
            });
        }else{
            swal({
                text: "Carrito vacio",
                icon: "error",
                button: "Ok",
                timer: "500"
            });
        }
    }
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="success" onClick={handleShow} className="px-5 py-2">
                <Cart aria-label="cart" className='back' />
            </Button>
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
                    <Button className='btn mx-5 btn-danger' onClick={reset}>Vaciar</Button>
                    <h5>Precio final: ${total}</h5>
                    <Button variant="primary" onClick={endBuy}>
                        Terminar Compra
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}