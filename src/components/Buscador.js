import React from 'react'
import { useHistory } from 'react-router-dom'

export const Buscador = () => {
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        //accedo al elemento a traves de su name
        const keyword = e.target.keyword.value.trim();
        if (keyword.length < 4 ) {
            alert('Tiene que tener mas de 3 caracteres')
            return;
        }
        e.target.keyword.value = '';
        history.push(`/resultados?keyword=${keyword}`)

    }
    return (
        <>
            <form onSubmit={submitHandler} className='d-flex aling-items-center mx-5'>
                <label className='form-label mb-0 mx-2'>
                    <input
                        className='form-control'
                        type='text'
                        name='keyword'
                        placeholder='Buscar'
                    />
                </label>
                <button
                    type='submit'
                    className='btn btn-success'
                >
                    Buscar
                </button>
            </form>
        </>
    )
}
