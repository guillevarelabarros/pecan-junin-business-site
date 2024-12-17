import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

export const WelcomeComponent = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        px: 4,
        textAlign: 'center',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{ fontWeight: 'bold', letterSpacing: 1 }}
      >
        ¡Bienvenidos a Pecan Junín!
      </Typography>
      <Typography 
        variant="h5" 
        component="p" 
        sx={{ mb: 2 }}
      >
        Nueces Pecan, frescas y deliciosas
      </Typography>
      <Typography 
        variant="body1" 
        component="p" 
        sx={{ fontSize: '1.25rem', mb: 4 }}
      >
        Directo de nuestro campo a tu mesa - Calidad garantizada en cada nuez.
      </Typography>
      <Stack 
        direction="row" 
        spacing={2} 
        justifyContent="center"
      >
        <Button 
          variant="outlined" 
          color="inherit" 
          size="large" 
          href="#productos"
          sx={{
            borderColor: 'white',
            color: 'white',
            ':hover': {
              bgcolor: 'white',
              color: 'primary.main',
            },
          }}
        >
          Ver Nueces
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large" 
          href="https://wa.me/542364658923" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          ¡Comprar Ahora!
        </Button>
      </Stack>
    </Box>
  );
};
