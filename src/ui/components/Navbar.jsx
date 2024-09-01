import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src="/assets/pecanes/logo.png" alt="Pecan Junín Logo" style={{ width: '70px' }} />
                <span className="ml-2 text-nowrap">Pecan Junin!</span>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} text-nowrap`}
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} text-nowrap`}
                        to="/abaut"
                    >
                        Quienes somos
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} text-nowrap`}
                        to="/promociones"
                    >
                        Promociones
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} text-nowrap`}
                        to="/howtobuy"
                    >
                        Como Comprar
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} text-nowrap`}
                        to="/contacto"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* 
                    <span className="nav-item nav-link text-primary">
                        Guillermo
                    </span>

                    <button className="nav-item nav-link btn">
                        Logout
                    </button>
                    */}
                </ul>
            </div>
        </nav>
    );
}




// import { Link, NavLink } from 'react-router-dom';


// export const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
//             <Link 
//                 className="navbar-brand" 
//                 to="/"
//             >
//                <img src="/assets/pecanes/logo.png" alt="Pecan Junín Logo" style={{ width: '70px' }} />
//                 Pecan Junin!
//             </Link>

//             <div className="navbar-collapse">
//                 <div className="navbar-nav">



//                     <NavLink 
//                         className={ ({isActive}) => `nav-item nav-link ${isActive} ? 'active' : '' ` }
//                         to="/home"
//                     >
//                         Home
//                     </NavLink>

//                     <NavLink 
//                         className={ ({isActive}) => `nav-item nav-link ${isActive} ? 'active' : '' ` }
//                         to="/abaut"
//                     >
//                         Sobre nosotros
//                     </NavLink>

//                     <NavLink 
//                         className={ ({isActive}) => `nav-item nav-link ${isActive} ? 'active' : '' ` }
//                         to="/promociones"
//                     >
//                         Promociones
//                     </NavLink>

//                     <NavLink 
//                         className={ ({isActive}) => `nav-item nav-link ${isActive} ? 'active' : '' ` }
//                         to="/howtobuy"
//                     >
//                         ComoComprar
//                     </NavLink>


//                     <NavLink 
//                         className={ ({isActive}) => `nav-item nav-link ${isActive} ? 'active' : '' ` }
//                         to="/contacto"
//                     >
//                         Contacto
//                     </NavLink>


//                 </div>
//             </div>

//             <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
//                 <ul className="navbar-nav ml-auto">

// {/* 
//               <span className="nav-item nav-link text-primary" >
//                 Guillermo
//               </span>

//               <button
//               className="nav-item nav-link btn"
//               >
//                 Logout
//               </button> */}


//                 </ul>
//             </div>
//         </nav>
//     )
// }