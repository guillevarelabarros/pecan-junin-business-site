import { Typography, Box } from '@mui/material';

export const ProductSection = () => {
  return (
    <Box id="productos" mb={5}>
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
        }}
      >
        Nueces Pecan
      </Typography>
    </Box>
  );
};
