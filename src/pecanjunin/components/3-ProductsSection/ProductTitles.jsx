import { Typography, Box } from '@mui/material';

export const ProductTitles = () => {
  return (
    <Box id="productos" mb={5} sx={{ paddingX: { xs: 2, sm: 4, md: 6 } }}>
      {/* Título principal */}
      <Typography
        variant="h2"
        component="h1"
        textAlign="center"
        mb={4}
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          textTransform: 'uppercase',
          fontSize: {
            xs: '2rem', // Tamaño para pantallas pequeñas
            sm: '2.5rem',
            md: '3rem', // Tamaño para pantallas medianas
          },
        }}
      >
        Nuestros productos
      </Typography>

      {/* Subtítulo para Nueces Pecan comunes */}
      <Typography
        variant="h3"
        component="h2"
        textAlign="center"
        mb={4}
        sx={{
          fontWeight: 'medium',
          color: 'secondary.main',
          textTransform: 'capitalize',
          fontSize: {
            xs: '1.5rem', // Tamaño para pantallas pequeñas
            sm: '2rem',
            md: '2.5rem', // Tamaño para pantallas medianas
          },
        }}
      >
        Nueces Pecan
      </Typography>
    </Box>
  );
};
