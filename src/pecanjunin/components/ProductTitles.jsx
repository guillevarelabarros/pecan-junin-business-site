import { Typography, Box } from '@mui/material';

export const ProductTitles = () => {
  return (
    <Box textAlign="center" mt={5} mb={4}>
      <Typography 
        variant="h3" 
        component="h1" 
        color="primary" 
        sx={{
          fontWeight: 'bold',
          display: 'inline',
          marginRight: 1, // Espacio entre palabras
        }}
      >
        Producto
      </Typography>
      <Typography 
        variant="h3" 
        component="h1" 
        color="secondary" 
        sx={{ fontWeight: 'bold', display: 'inline' }}
      >
        Premium
      </Typography>

      <Typography 
        variant="h4" 
        component="h2" 
        color="textSecondary" 
        mt={2} 
        sx={{
          fontWeight: 'medium',
          textDecoration: 'underline',
          textUnderlineOffset: '6px',
        }}
      >
        Nueces Pecan Caramelizadas
      </Typography>
    </Box>
  );
};
