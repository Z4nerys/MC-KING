import axios from 'axios'
import swAlert from '@sweetalert/with-react'
//el error/warning que tira en la consola es x swAlert
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
            swAlert(<h2>Los campos no pueden estar vacios</h2>)
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swAlert(<h2>Debes escribir una dirección de correo electrónico valida</h2>)
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(<h2>Credenciales invalidas</h2>)
            return;
        }

        //envio de formulario. POST con axios.

        //se envia la url y como segundo parametro un objeto con los datos
        //obtengo el token
        try {
            const token = await (await axios.post('http://challenge-react.alkemy.org/', { email, password })).data.token
            await swAlert(<h2>Formulario enviado con exito!</h2>)
            //luego guardo el token en el localStorage
            sessionStorage.setItem('token', token);
            history.push('/listado');

        } catch (error) {
            swAlert(<h2>Error! no se pudo enviar formulario!</h2>)
            console.log(error)
        }
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
