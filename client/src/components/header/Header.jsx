import { Link, useNavigate } from 'react-router-dom'
import logo from './draugas.png';
import style from './Header.module.css'
import { useContext } from 'react';

export function Header() {
    const { isLogedIn, changeLoginStatus } = useContext(GlobalContext);

    const navigate = useNavigate();

    function logout(){
        changeLoginStatus(false);
        navigate('/');
    }
    return (
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img className={style.img} src={logo} alt="Logo" />
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link to="/" className="nav-link px-2 link-secondary">Home</Link>
                    </li>
                    <li>
                        <Link to="/service" className="nav-link px-2 link-secondary">Sukurti paslaugą</Link>
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
                        <Link to="/users" className="nav-link px-2">Vartotojo informacija</Link>
                    </li>
                    <li>
                        <Link to="/chart" className="nav-link px-2">Pirkinių krepšelis</Link>
                    </li>
                    <li>
                        <Link to="/404" className="nav-link px-2">404</Link>
                    </li>
                </ul>

                {!isLogedIn &&   <div className="col-md-3 text-end">
                   <Link to="/singin" className="btn btn-outline-primary me-2">Prisijungti</Link>
                    <Link to="/register" className="btn btn-outline-primary me-2">Registracija</Link>
                </div>}
                {isLogedIn && 
                <div className="col-md-3 text-end">
 <Link to='/home' className="nav-link px-2">Pagrindinis</Link>
 <button onClick={logout} type='button' className="btn btn-primary">Atsijungti</button>
 
 </div>
 }
            </header>
    );
}