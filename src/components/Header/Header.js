import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import './styles.css';
/* import { Buscador } from '../Buscador' */

export const Header = () => {

    const history = useHistory()
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <>
            <div className="container-header">
                <header className="container">
                    <div className="logo">
                        <Link className="link-img" to='/'>
                            <img src="/assets/img/logo-bg-white.png" width="68px" height="68px" alt="logo"/>
                        </Link>
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
                                <Link className="link" to='/contacto'> Contactenos</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* <Buscador/> */}
                    <button
                        onClick={handleLogout}
                    >
                        Login
                    </button>
                </header>
            </div>
            <div className="header-space"></div>
        </>
    )
}   
