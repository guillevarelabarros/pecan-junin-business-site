import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        {/* Logo y Título */}
        <IconButton
          edge='start'
          color='inherit'
          href='/'
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <Box
            component='img'
            src='/assets/pecanes/logo.png'
            alt='Pecan Junín Logo'
            sx={{ width: 40, height: 'auto', mr: 1 }}
          />
          <Typography
            variant='h6'
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Pecan Junín
          </Typography>
        </IconButton>

        {/* Espaciador */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Menú de navegación responsive */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          <Typography
            variant='button'
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
          <Typography
            variant='button'
            onClick={() =>
              window.open('https://wa.me/c/5492364514628', '_blank')
            }
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

        {/* Icono de menú para pantallas pequeñas */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton color='inherit' onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { bgcolor: 'primary.main', color: 'white' },
            }}
          >
            <MenuItem
              onClick={() => {
                handleMenuClose();
                const section = document.getElementById('productos');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Productos
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                window.open('https://wa.me/542364658923', '_blank');
              }}
            >
              Contacto
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
