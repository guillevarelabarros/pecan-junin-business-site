import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
// import './DiscountCountdown.css';

export const DiscountCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutos en segundos
  const [discountExpired, setDiscountExpired] = useState(false);
  const [countdownStarted, setCountdownStarted] = useState(false); // Control del inicio del contador

  useEffect(() => {
    const handleScroll = () => {
      // Verificar si el usuario ha llegado al final de la página
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setCountdownStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (countdownStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft <= 0) {
      setDiscountExpired(true);
    }
  }, [timeLeft, countdownStarted]);

  // Formatear el tiempo de segundos a mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box 
      component="section"
      textAlign="center"
      bgcolor="background.paper"
      py={4}
      mt={5}
      mb={5}
      mx="auto"
      maxWidth={{ xs: '100%', sm: '600px' }}  // Responsivo
    >
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 3, 
          backgroundColor: discountExpired ? '#ffe5e5' : '#e8f5e9', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {!discountExpired ? (
          <>
            <Typography 
              variant="h4" 
              color="primary" 
              gutterBottom
              fontWeight="bold"
              sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}  // Adaptable a pantallas pequeñas
            >
              ¡Descuento exclusivo!
            </Typography>
            <Typography 
              variant="h6" 
              color="secondary"
              gutterBottom
              sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}  // Adaptable a pantallas pequeñas
            >
              ¡40% de descuento en tu compra si nos escribes dentro de los próximos <strong>5 minutos!</strong>
            </Typography>
            <Typography 
              variant="body1" 
              mb={2}
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}  // Adaptable a pantallas pequeñas
            >
              Escríbenos por WhatsApp para aprovechar este descuento exclusivo.
            </Typography>
            <Typography 
              variant="h5" 
              color="error" 
              fontWeight="bold" 
              mb={3}
              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}  // Adaptable a pantallas pequeñas
            >
              Tiempo restante: {formatTime(timeLeft)}
            </Typography>
            <Button 
              variant="contained" 
              color="success" 
              href="https://wa.me/542364658923" 
              target="_blank" 
              rel="noopener noreferrer"
              size="large"
              sx={{ width: { xs: '100%', sm: 'auto' } }}  // Botón más grande en pantallas pequeñas
            >
              ¡Quiero mi descuento!
            </Button>
          </>
        ) : (
          <>
            <Typography 
              variant="h4" 
              color="error" 
              gutterBottom
              fontWeight="bold"
              sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}  // Adaptable a pantallas pequeñas
            >
              Lo sentimos, el descuento ha expirado.
            </Typography>
            <Typography 
              variant="body1" 
              mb={2}
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}  // Adaptable a pantallas pequeñas
            >
              De todos modos, ¡contáctanos para conocer otras ofertas!
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              href="https://wa.me/542364658923" 
              target="_blank" 
              rel="noopener noreferrer"
              size="large"
              sx={{ width: { xs: '100%', sm: 'auto' } }}  // Botón más grande en pantallas pequeñas
            >
              Contactar por WhatsApp
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
};
