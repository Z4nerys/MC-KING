import React from 'react'

export const Contactenos = () => {

    const enviarDatos = (e) =>{
        e.preventDefault()
    }
    return (
        <>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                        type="text" 
                        placeholder="Nombre" 
                        className="form-control"  
                        name="nombre"
                    />
                </div>
                <div className="col-md-3">
                    <input 
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        name="apellido"
                    />
                </div>
                <div className="col-md-3">
                    <input 
                        type="text"
                        placeholder="Numero de telefono"
                        className="form-control"
                        name="apellido"
                    />
                </div>
                <textarea
                    placeholder="Mensaje"
                >

                </textarea>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}
