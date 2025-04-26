import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Grid2,
  Button,
} from '@mui/material';

// Función para dividir el texto cada X caracteres
const splitText = (text, maxLength) => {
  const result = [];
  for (let i = 0; i < text.length; i += maxLength) {
    result.push(text.slice(i, i + maxLength));
  }
  return result;
};

// Componente PecanCard
const PecanCard = ({ title, detail, image }) => {
  const titleParts = splitText(title, 20);
  const detailParts = splitText(detail, 30);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '2px solid #84a98c',
          backgroundColor: '#f8f9fa',
          boxShadow: 3,
          padding: 1,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            zIndex: 1,
          },
          flexGrow: 1,
          height: '100%',
        }}
      >
        <CardMedia
          component='img'
          sx={{
            borderRadius: 1,
            padding: 0,
            objectFit: 'cover',
            maxWidth: 300,
          }}
          image={image}
          alt={title}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Box
            sx={{
              height: '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {titleParts.map((part, index) => (
              <Typography
                key={index}
                variant={index === 0 ? 'h5' : 'body1'}
                component='div'
                gutterBottom
                align='center'
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  height: '100%',
                  lineHeight: '1.5',
                }}
              >
                {part}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {detailParts.map((part, index) => (
              <Typography
                key={index}
                variant='body2'
                color='text.secondary'
                align='center'
                sx={{
                  display: 'block',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  maxWidth: '100%',
                  lineHeight: '1.5',
                }}
              >
                {part}
              </Typography>
            ))}
          </Box>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
          <Button
            variant='contained'
            color='primary'
            href='https://wa.me/c/5492364514628'
            target='_blank'
            rel='noopener noreferrer'
          >
            Buy now!
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

// Lista de productos
const products = [
  {
    title: 'Classic Mix',
    detail: '500 g - $8000',
    image: '/assets/products/Mix-clasico-500-gr-$8000.jpg',
  },
  {
    title: 'Mix without Peanuts',
    detail: '500 g - $9000',
    image: '/assets/products/Mix-Premium-sin-mani-500-gr-$9000.jpg',
  },
  {
    title: 'Mix without Raisins',
    detail: '500 g - $9000',
    image: '/assets/products/Mix-premium-sin-pasas-500-gr-$9000.jpg',
  },
  {
    title: 'Caramelized Pecans',
    detail: '80 g - $3000',
    image: '/assets/products/Nueces-Pecan-caramelizadas-80-gr-$2500.jpg',
  },
  {
    title: 'Caramelized Pecans',
    detail: '250 g - $7000',
    image: '/assets/products/Nueces-Pecan-Caramelizadas-250-gr-$7000.jpg',
  },
  {
    title: 'Caramelized Pecans',
    detail: '500 g - $13000',
    image: '/assets/products/Nueces-Pecan-Caramelizadas-500-gr-$12000.jpg',
  },
  {
    title: 'Pecan Nuts',
    detail: '250 g - $5500',
    image: '/assets/products/Nueces-pecan-premium-250-gr-$5500.jpg',
  },
  {
    title: 'Cashew Nuts',
    detail: '250 g - $5500',
    image: '/assets/products/Castañas-de-Caju-natural-250-gr-$5500.jpg',
  },
];

// Componente para la lista de productos
const PecanCardList = () => {
  return (
    <Grid2 container spacing={2} justifyContent='center' sx={{ width: '100%' }}>
      {products.map((product, index) => (
        <Grid2
          key={index}
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          <PecanCard
            title={product.title}
            detail={product.detail}
            image={product.image}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default PecanCardList;
