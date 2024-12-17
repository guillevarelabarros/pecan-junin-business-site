import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', px: 2 }}>
      <Toolbar>
        {/* Logo y título */}
        <IconButton 
          edge="start" 
          color="inherit" 
          href="/" 
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <Box
            component="img"
            src="/assets/pecanes/logo.png"
            alt="Pecan Junín Logo"
            sx={{ width: 50, height: 'auto', mr: 1 }}
          />
          <Typography 
            variant="h6" 
            sx={{ fontWeight: 'bold', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
          >
            Pecan Junín!
          </Typography>
        </IconButton>
        
        {/* Espaciador */}
        <Box sx={{ flexGrow: 1 }} />
        
        {/* Botones de navegación */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Productos */}
          <Typography 
            variant="button" 
            onClick={() => {
              const section = document.getElementById('productos');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }} 
            sx={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              ':hover': { color: 'secondary.light' },
            }}
          >
            Productos
          </Typography>

          {/* Contacto - WhatsApp */}
          <Typography 
            variant="button" 
            onClick={() => window.open('https://wa.me/542364658923', '_blank')} 
            sx={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              ':hover': { color: 'secondary.light' },
            }}
          >
            Contacto
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};




// import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Box, Link } from '@mui/material';

// export const Navbar = () => {
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <AppBar position="static" sx={{ bgcolor: 'primary.main', px: 2 }}>
//       <Toolbar>
//         {/* Logo y título */}
//         <IconButton 
//           edge="start" 
//           color="inherit" 
//           component={Link} 
//           href="/" 
//           sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
//         >
//           <Box
//             component="img"
//             src="/assets/pecanes/logo.png"
//             alt="Pecan Junín Logo"
//             sx={{ width: 50, height: 'auto', mr: 1 }}
//           />
//           <Typography 
//             variant="h6" 
//             sx={{ fontWeight: 'bold', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
//           >
//             Pecan Junín!
//           </Typography>
//         </IconButton>
        
//         {/* Espaciador */}
//         <Box sx={{ flexGrow: 1 }} />
        
//         {/* Botones de navegación */}
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Typography 
//             variant="button" 
//             onClick={() => scrollToSection('productos')} 
//             sx={{
//               textDecoration: 'none',
//               color: 'white',
//               fontWeight: 'bold',
//               fontSize: '1rem',
//               cursor: 'pointer',
//               ':hover': { color: 'secondary.light' }
//             }}
//           >
//             Productos
//           </Typography>
//           <Typography 
//             variant="button" 
//             onClick={() => scrollToSection('contacto')} 
//             sx={{
//               textDecoration: 'none',
//               color: 'white',
//               fontWeight: 'bold',
//               fontSize: '1rem',
//               cursor: 'pointer',
//               ':hover': { color: 'secondary.light' }



//                     sx={{ color: '#fff' }}
//       variant="contained"
//       color="primary"
//       endIcon={<ShoppingBagIcon />}
//       component="a"
//       href="https://wa.me/542364658923"
//       target="_blank"
//       rel="noopener noreferrer"
//             }}
//           >
//             Contacto
//           </Typography>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };



// import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{ bgcolor: 'primary.main', px: 2 }}>
//       <Toolbar>
//         {/* Logo y título */}
//         <IconButton 
//           edge="start" 
//           color="inherit" 
//           component={Link} 
//           to="/"
//           sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
//         >
//           <Box
//             component="img"
//             src="/assets/pecanes/logo.png"
//             alt="Pecan Junín Logo"
//             sx={{ width: 50, height: 'auto', mr: 1 }}
//           />
//           <Typography 
//             variant="h6" 
//             sx={{ fontWeight: 'bold', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
//           >
//             Pecan Junín!
//           </Typography>
//         </IconButton>
        
//         {/* Espaciador (crea espacio entre el logo y posibles enlaces a la derecha) */}
//         <Box sx={{ flexGrow: 1 }} />
        
//         {/* Enlaces adicionales (si los necesitas más adelante) */}
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Typography 
//             variant="button" 
//             component={Link} 
//             to="/productos" 
//             sx={{ textDecoration: 'none', color: 'inherit', ':hover': { color: 'secondary.light' } }}
//           >
//             Productos
//           </Typography>
//           <Typography 
//             variant="button" 
//             component={Link} 
//             to="/contacto" 
//             sx={{ textDecoration: 'none', color: 'inherit', ':hover': { color: 'secondary.light' } }}
//           >
//             Contacto
//           </Typography>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };



// import { Link, NavLink } from 'react-router-dom';

// export const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

//             <Link className="navbar-brand d-flex align-items-center" to="/">
//                 <img src="/assets/pecanes/logo.png" alt="Pecan Junín Logo" style={{ width: '70px' }} />
//                 <span className="ml-2 text-nowrap fs-4">Pecan Junin!</span>
//             </Link>


//         </nav>
//     );
// }


            {/* <div className="navbar-collapse">
                <div className="navbar-nav"> */}
                    {/* <NavLink 
                        className={({ isActive }) => `nav-item nav-link fs-5 ${isActive ? 'active' : ''} text-nowrap`}
                        to="/home"
                    >
                        Home
                    </NavLink> */}

                    {/* <NavLink 
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
                    </NavLink> */}
                {/* </div>
            </div> */}

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