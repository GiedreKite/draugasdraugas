import { Link, useNavigate } from 'react-router-dom'
import logo from './draugas.png';
import style from './Header.module.css'
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

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
                        <Link to="/about" className="nav-link px-2 link-secondary">Apžvalga</Link>
                    </li>
                  
                    <li>
                        <Link to="/services" className="nav-link px-2 link-secondary">Teikiamos paslaugos</Link>
                    </li>
                    <li>
                        <Link to="/service" className="nav-link px-2 link-secondary">Sukurti paslaugą</Link>
                    </li>
                    <li>
                        <Link to="/users" className="nav-link px-2 link-secondary">Vartotojų sąrašas</Link>
                    </li>
                    <li>
                        <Link to="/user" className="nav-link px-2 link-secondary"> Vartotojo informacija </Link>
                    </li>

                    <li>
                        <Link to="/chart" className="nav-link px-2 link-secondary">Pirkinių krepšelis</Link>
                    </li>

                </ul>

                {!isLogedIn &&   <div className="nav-link px-2">
                   <Link to="/singin" className="nav-link px-2">Prisijungti</Link>
                    <Link to="/register" className="nav-link px-2">Registracija</Link>
                </div>}
                {isLogedIn && 
                <div className="nav-link px-2">
 <Link to='/home' className="nav-link px-2">Administratorė</Link>
 <button onClick={logout} type='button' className="nav-link px-2">Atsijungti</button>
 
 </div>
 }
            </header>
    );
}