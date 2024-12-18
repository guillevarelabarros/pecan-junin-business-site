import { Container, Grid2 } from '@mui/material';
import { AboutComponent, WelcomeComponent } from '../components';
import PecanCard from '../components/3-ProductsSection/PecanCard.jsx';
// import { ProductSection } from '../components/ProductSection.jsx';
import PecanCardList from '../components/3-ProductsSection/PecanCard.jsx';
import { ProductTitles } from '../components/3-ProductsSection/ProductTitles.jsx';
import { DiscountCountdown } from '../components/4-Discount-Promotions/DiscountCountdown.jsx';


export const HomePage = () => {

  return (
    <Container sx={{ mt: 5 }}>

      {/* Banner de bienvenida - WelcomeComponent.jsx */}
      <WelcomeComponent />

      {/* Sección sobre nosotros - AboutComponent.jsx*/}
      <AboutComponent />

      {/* Sección de productos */}
      <section>
        <Container>
          <div id="productos">
            
            {/* <ProductSection /> */}
              <ProductTitles/>
            {/* Productos normales */}
              <PecanCardList/>


            {/* Nueces Pecan Caramelizadas */}

          </div>
        </Container>
      </section>

      
       <DiscountCountdown/> 

    

    </Container>
  );
};



// TODO:  1. Migrar a Material UI, y eliminar BootStrap.
// TODO:  2. Ver que el Nombre de todos los componentes esté en inglés.
// TODO:  2. Que todos los componentes y todo sea responsive Design con Material UI para celulares iphone, android y tablets.
// TODO:  3. Eliminar las carpetas y componentes que sobran o archivos css que ya no utilizo. 
// TODO:  4. Resolver el tema de carga, que probablemente es desintalar todos los iconos e instalar solo el icono que necesito. 
// TODO:  5. Cambiarle las imagenes y descripciones.
// TODO:  6. Qué los textos y todo esté en español pero tmb en inglés, y sobre todo, todos los componentes en Inglés así queda para presentar en un laburo como CV.
// TODO:  7. Ver si le mejoro algo más y/o adaptarlo a la campaña de Marketing que quiera hacer, ej: Si hago un sorteo, ponerle algo del sorteo. 
// TODO:  8: Si va para CV, ponerlo todo en ingles o hacer una copia en inglés así busco laburo de eso, y otro CV con todo en Español.



  