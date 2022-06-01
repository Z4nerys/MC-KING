import React from 'react'
import { localidades } from '../data/data'

export const Locales = () => {
    return (
        <>
            <div>Locales</div>
            <div>Locales</div>
            <div>Locales</div>
            {
                localidades.map(localidad =>{
                    return (
                        <div className="mt-2" key={localidad.id}>
                            <p>{localidad.localidad}</p>
                            <p>{localidad.direccion}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}
