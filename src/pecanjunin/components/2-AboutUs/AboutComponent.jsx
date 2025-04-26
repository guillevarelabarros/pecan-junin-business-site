import { Box, Grid, Typography } from '@mui/material';

export const AboutComponent = () => {
  const pecanImageUrl = `/assets/pecanes/logo2png.png`;

  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 3, sm: 6 },
        bgcolor: 'background.paper',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems='center'
        direction={{ xs: 'column', md: 'row' }} // Cambio de dirección en pantallas pequeñas
      >
        {/* Imagen del lado izquierdo */}
        <Grid item xs={12} md={4}>
          <Box
            component='img'
            src={pecanImageUrl}
            alt='Campo de nueces'
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              animation: 'rollIn 1s', // Si quieres animaciones CSS.
              mb: { xs: 2, md: 0 }, // Margen inferior en pantallas pequeñas
            }}
          />
        </Grid>

        {/* Texto del lado derecho */}
        <Grid item xs={12} md={8}>
          <Typography
            variant='h4'
            component='h2'
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              fontSize: { xs: '1.5rem', sm: '2rem' },
            }} // Ajuste de tamaño de fuente
          >
            About Us
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              mb: 2,
              lineHeight: 1.6,
            }}
          >
            At Pecan Junín, we grow high-quality pecans straight from our family
            farm in Junín, Argentina.
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              mb: 2,
              lineHeight: 1.6,
            }}
          >
            We use sustainable methods to ensure a fresh and healthy product.
            Each nut is cultivated with dedication and respect for nature.
          </Typography>
          <Typography
            variant='body1'
            sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, lineHeight: 1.6 }}
          >
            Enjoy the authentic, natural flavor that only a local producer can
            offer!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
