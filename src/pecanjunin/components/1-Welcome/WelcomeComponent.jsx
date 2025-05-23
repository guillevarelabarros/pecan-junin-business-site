import { Box, Typography, Button, Stack } from '@mui/material';

export const WelcomeComponent = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: { xs: 4, sm: 6 }, // Menor padding en pantallas pequeñas
        px: { xs: 2, sm: 4 },
        textAlign: 'center',
        borderRadius: 2,
        boxShadow: 3,
        mx: 'auto', // Centramos horizontalmente
        maxWidth: '900px', // Limitamos el ancho máximo
      }}
    >
      <Typography
        variant='h3'
        component='h1'
        gutterBottom
        sx={{
          fontWeight: 'bold',
          letterSpacing: 1,
          fontSize: { xs: '2rem', sm: '3rem' }, // Ajuste de tamaño según la pantalla
        }}
      >
        Welcome to Pecan Junín!
      </Typography>
      <Typography
        variant='h5'
        component='p'
        sx={{
          mb: 2,
          fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Ajuste de tamaño según la pantalla
        }}
      >
        Fresh and Delicious Pecan Nuts.
      </Typography>
      <Typography
        variant='body1'
        component='p'
        sx={{
          fontSize: { xs: '1rem', sm: '1.25rem' }, // Ajuste de tamaño según la pantalla
          mb: 4,
        }}
      >
        From Our Farm to Your Table – Guaranteed Quality in Every Nut.
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }} // Columna en pantallas pequeñas, fila en grandes
        spacing={2}
        justifyContent='center'
      >
        <Button
          variant='outlined'
          color='inherit'
          size='large'
          href='#productos'
          sx={{
            borderColor: 'white',
            color: 'white',
            ':hover': {
              bgcolor: 'white',
              color: 'primary.main',
            },
            width: { xs: '100%', sm: 'auto' }, // Botón ocupa todo el ancho en pantallas pequeñas
          }}
        >
          View Nuts
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='large'
          href='https://wa.me/c/5492364514628'
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            width: { xs: '100%', sm: 'auto' }, // Botón ocupa todo el ancho en pantallas pequeñas
          }}
        >
          Shop Now!
        </Button>
      </Stack>
    </Box>
  );
};
