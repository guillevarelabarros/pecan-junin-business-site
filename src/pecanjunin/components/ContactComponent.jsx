import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const ContactComponent = () => {
  return (
    <Box 
      component="section" 
      textAlign="center" 
      py={5}
    >
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Contáctanos
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        ¿Querés comprar nuestras deliciosas nueces?
      </Typography>
      <Typography variant="body1" paragraph>
        Haz clic en el botón para enviarnos un mensaje en WhatsApp.
      </Typography>
      <Button
        variant="contained"
        color="success"
        href="https://wa.me/542364658923"
        target="_blank"
        rel="noopener noreferrer"
        size="large"
        startIcon={<WhatsAppIcon />}
      >
        Enviar mensaje por WhatsApp
      </Button>
    </Box>
  );
};

