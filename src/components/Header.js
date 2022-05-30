import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { Buscador } from "./Buscador"

export const Header = () => {

    const history = useHistory()
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        history.push('/')

    }

    return (
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li >
                            <Link className="nav-link text-light" to='/'> Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link text-light" to='/listado'> Listado</Link>
                        </li>
                    </ul>
                </div>
                <Buscador/>
                <button
                    className="text-light btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </nav>
        </header>
    )
}
