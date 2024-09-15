import { Link } from 'react-router-dom'
import logo from '../../assets/react.svg';

export function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link to="/" className="nav-link px-2 link-secondary">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link px-2 link-secondary">Apžvalga</Link>
                    </li>
                    <li>
                        <Link to="/services" className="nav-link px-2">Teikiamos paslaugos</Link>
                    </li>
                    <li>
                        <Link to="/userslist" className="nav-link px-2">Vartotojų sąrašas</Link>
                    </li>
                    <li>
                        <Link to="/user" className="nav-link px-2">Vartotojo informacija</Link>
                    </li>
                    <li>
                        <Link to="/404" className="nav-link px-2">404</Link>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                   <Link to="/singin" className="btn btn-outline-primary me-2">Prisijungti</Link>
                    <Link to="/login" className="btn btn-primary">Registracija</Link>
                </div>
            </header>
        </div>
    );
}