import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src="/assets/pecanes/logo.png" alt="Pecan Junín Logo" style={{ width: '70px' }} />
                <span className="ml-2 text-nowrap fs-4">Pecan Junin!</span>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link fs-5 ${isActive ? 'active' : ''} text-nowrap`}
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link fs-5 ${isActive ? 'active' : ''} text-nowrap`}
                        to="/about"
                    >
                        Quienes somos
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link fs-5 ${isActive ? 'active' : ''} text-nowrap`}
                        to="/promotions"
                    >
                        Promociones
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link fs-5 ${isActive ? 'active' : ''} text-nowrap`}
                        to="/contact"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>

          {/* CÓDIGO PARA AGREGAR UN USUARIO Y BOTON DE LOG OUT */}
          
            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className="nav-item nav-link text-primary">
                        Guillermo
                    </span>

                    <button className="nav-item nav-link btn">
                        Logout
                    </button>
                   
                </ul>
            </div> */}
        </nav>
    );
}
