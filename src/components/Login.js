import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export const Login = () => {
    const history = useHistory()

    const tokenExist = sessionStorage.getItem('token')
    
    const boton = () =>{
        console.log('boton')
    }

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

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            alert('Credenciales invalidas')
            return;
        }

        //envio de formulario. POST con axios.

        //se envia la url y como segundo parametro un objeto con los datos
        //obtengo el token
        try {
            const token = await (await axios.post('http://challenge-react.alkemy.org/', { email, password })).data.token
            await alert('Formulario enviado con exito!')
            //luego guardo el token en el localStorage
            sessionStorage.setItem('token', token);
            history.push('/listado');

        } catch (error) {
            alert('Error! no se pudo enviar formulario!')
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
                <button onClick={boton}>presioname</button>
            </div>
        </div>
    )
}
