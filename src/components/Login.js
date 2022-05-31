import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export const Login = () => {
    const history = useHistory()

    const tokenExist = sessionStorage.getItem('token')

    const submitHandler = async e => {
        e.preventDefault()
        //capturar valores de los campos
        const email = e.target.email.value;
        const password = e.target.password.value;

        //validacion de que no esten vacios
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '' || password === '') {
            alert('Los campos no pueden estar vacios')
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            alert('Debes escribir una dirección de correo electrónico valida')
            return;
        }

        console.log('correo: day@unla.com')
        console.log('pass: unla')
        if (email !== 'day@unla.com' || password !== 'unla') {
            alert('Credenciales invalidas')
            return;
        }

        alert('Logueado con exito')
        sessionStorage.setItem('token', token);
        history.push('/listado');

    }

    return (
        <div className='row'>
            {tokenExist && <Redirect to='/listado' />}

            <div className='col-6 offset-3 mt-3'>
                <h1>Formulario de login</h1>
                <hr />
                <form onSubmit={submitHandler}>
                    <label className='form-label d-block mt-2'>
                        <span >Correo electronico: </span><br />
                        <input
                            className='form-control'
                            type='text'
                            name='email'
                            placeholder='Ingrese su email'
                        />
                    </label>
                    <br />
                    <label className='form-label d-block mt-2'>
                        <span>Contraseña: </span><br />
                        <input
                            className='form-control'
                            type='password'
                            name='password'
                            placeholder='Ingrese su password'
                        />
                    </label>
                    <br />
                    <button
                        type='submit'
                        className='btn btn-success mt-2'
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    )
}
