import React from 'react';
import Button from '@mui/material/Button';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const ComprarButton = ({ message }) => {
  const phoneNumber = "542364658923";
  const encodedMessage = encodeURIComponent(message); // Codifica el mensaje
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Button
      sx={{ color: '#fff' }}
      variant="contained"
      color="primary"
      endIcon={<ShoppingBagIcon />}
      component="a"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Comprar
    </Button>
  );
};

export default ComprarButton;


// import React from 'react';
// import Button from '@mui/material/Button';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// const ComprarButton = () => {
//   return (
//     <Button
//       sx={{ color: '#fff' }}
//       variant="contained"
//       color="primary"
//       endIcon={<ShoppingBagIcon />}
//       component="a"
//       href="https://wa.me/542364658923"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Comprar
//     </Button>
//   );
// };

// export default ComprarButton;
