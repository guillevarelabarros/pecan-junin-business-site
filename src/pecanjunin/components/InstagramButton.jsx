import React from 'react';
import { IconButton } from '@mui/material'; // Importamos IconButton de Material UI
import InstagramIcon from '@mui/icons-material/Instagram'; // Importamos el icono de Instagram
import './InstagramButton.css'; // Asegúrate de tener el archivo CSS

export const InstagramButton = () => {
  return (
    <a
      href="https://www.instagram.com/pecanjunin"
      target="_blank"
      rel="noopener noreferrer"
      className="instagram"
    >
      <IconButton
        sx={{
          backgroundColor: '#e1306c', // Color de fondo
          borderRadius: '50%', // Botón redondo
          padding: 2, // Tamaño del botón
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Sombra
          '&:hover': {
            backgroundColor: '#c13584', // Cambio de color al hacer hover
            transform: 'scale(1.2)', // Efecto de aumentar el tamaño
          },
        }}
      >
        <InstagramIcon sx={{ color: 'white' }} /> {/* Icono de Instagram */}
      </IconButton>
    </a>
  );
};
