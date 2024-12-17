import React from 'react';
import { IconButton } from '@mui/material'; // Importamos IconButton de Material UI
import FacebookIcon from '@mui/icons-material/Facebook'; // Importamos el icono de Facebook
import './FacebookButton.css'; // Asegúrate de tener el archivo CSS

export const FacebookButton = () => {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=61564890774998"
      target="_blank"
      rel="noopener noreferrer"
      className="facebook"
    >
      <IconButton
        sx={{
          backgroundColor: '#4267b2', // Color de fondo de Facebook
          borderRadius: '50%', // Botón redondo
          padding: 2, // Tamaño del botón
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Sombra
          '&:hover': {
            backgroundColor: '#3b5998', // Cambio de color al hacer hover
            transform: 'scale(1.2)', // Efecto de aumento del tamaño
          },
        }}
      >
        <FacebookIcon sx={{ color: 'white' }} /> {/* Icono de Facebook */}
      </IconButton>
    </a>
  );
};
