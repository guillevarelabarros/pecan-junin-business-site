import React from 'react';
import { IconButton } from '@mui/material'; // Importamos IconButton
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Importamos el icono de WhatsApp
import './WhatsAppButton.css'; // Asegúrate de tener el archivo CSS

export const WhatsAppButton = () => {
  return (
    <a
      href='https://wa.me/c/5492364514628'
      target='_blank'
      rel='noopener noreferrer'
      className='whatsapp'
    >
      <IconButton
        sx={{
          backgroundColor: '#25d366', // Color de fondo
          borderRadius: '50%',
          padding: 2, // Tamaño del botón
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#128c7e', // Cambia de color al pasar el ratón
            transform: 'scale(1.2)', // Aumenta el tamaño al hacer hover
          },
        }}
      >
        <WhatsAppIcon sx={{ color: 'white' }} /> {/* Icono de WhatsApp */}
      </IconButton>
    </a>
  );
};

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de WhatsApp
// import './WhatsAppButton.css'; // Asegúrate de crear este archivo CSS

// export const WhatsAppButton = () => {
//   return (
//     <>
//     <a
//       className="whatsapp"
//       href="https://wa.me/542364658923"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
//     </a>

//     </>
//   )
// }
