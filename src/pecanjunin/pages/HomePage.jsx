import { Container, Grid2 } from '@mui/material';
import { AboutComponent, WelcomeComponent } from '../components';
import { DiscountCountdown } from '../components/DiscountCountdown';
// import PecanCard from '../components/PecanCard';
import { ProductSection } from '../components/ProductSection.jsx';
import PecanCardList from '../components/PecanCard';

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
            <ProductSection />

            {/* Productos normales */}
                <PecanCardList/>


            {/* Nueces Pecan Caramelizadas */}

          </div>
        </Container>
      </section>

      
       {/* <DiscountCountdown/>  */}

    

    </Container>
  );
};



// TODO:  1. Migrar a Material UI, y eliminar BootStrap.
// TODO:  2. Ver que el Nombre de todos los componentes esté en inglés.
// TODO:  3. Eliminar las carpetas y componentes que sobran o archivos css que ya no utilizo. 
// TODO:  4. Resolver el tema de carga, que probablemente es desintalar todos los iconos e instalar solo el icono que necesito. 
// TODO:  5. Cambiarle las imagenes y descripciones.
// TODO:  6. Ver si le mejoro algo más y/o adaptarlo a la campaña de Marketing que quiera hacer, ej: Si hago un sorteo, ponerle algo del sorteo. 
// TODO:  7: Si va para CV, ponerlo todo en ingles o hacer una copia en inglés así busco laburo de eso, y otro CV con todo en Español.



  