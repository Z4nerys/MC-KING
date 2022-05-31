import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import './styles.css';
/* import { Buscador } from '../Buscador' */

export const Header = () => {

    const history = useHistory()
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        history.push('/')

    }

    return (
        <header>
            <div className="logo">
                <Link className="log" to='/'>MC</Link>
            </div>
            <nav className="">
                <ul className="">
                    <li >
                        <Link className="link" to='/listado'> Productos</Link>
                    </li>
                    <li>
                        <Link className="link" to='/locales'> Locales</Link>
                    </li>
                    <li>
                        <Link className="link" to='/listado'> Promociones</Link>
                    </li>
                    <li>
                        <Link className="link" to='/listado'> Contactanos</Link>
                    </li>
                </ul>
            </nav>
            {/* <Buscador/> */}
            <button
                onClick={handleLogout}
            >
                Logout
            </button>
        </header>
    )
}   
