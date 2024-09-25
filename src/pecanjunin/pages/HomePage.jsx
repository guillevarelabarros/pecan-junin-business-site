import { AboutComponent, ContactComponent, WelcomeComponent } from '../components';
import { DiscountCountdown } from '../components/DiscountCountdown';


export const HomePage = () => {

  const pecanImageUrl = `/assets/pecanes/logo.png`;

  return (
    <div className="container mt-5">


      {/* Banner de bienvenida - WlcomeComponent.jsx */}
      <WelcomeComponent/>

      {/* Sección sobre nosotros - AboutComponent.jsx*/}
      <AboutComponent/>

      {/* Sección de productos */}


      {/* Sección de productos */}
      <section className="section-bg-css">
        <div id="productos" className="mb-5">
          <h2 className="text-center mb-4 titulo-grande-css">
            <span className="highlight-titulo-css">Nuestros productos</span>
          </h2>

          {/* Sección de Nueces Pecan comunes */}
          <h3 className="text-center mb-4">
            <span className="highlight-subtitulo-css">Nueces Pecan</span>
          </h3>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm" style={{ border: '2px solid #84a98c', backgroundColor: '#f8f9fa' }}>
                <img src="/assets/pecanes/250gr.jpg" className="card-img-top img-thumbnail" alt="Bolsa de 250g" />
                <div className="card-body text-center">
                  <h5 className="card-title">Bolsa de 250g</h5>
                  <p className="card-text">¡Perfecto para disfrutar en cualquier momento!</p>
                  <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-animated">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm" style={{ border: '2px solid #84a98c', backgroundColor: '#f8f9fa' }}>
                <img src="/assets/pecanes/500gr.jpg" className="card-img-top img-thumbnail" alt="Bolsa de 500gr" />
                <div className="card-body text-center">
                  <h5 className="card-title">Bolsa de 500g</h5>
                  <p className="card-text">Ideal para recetas y snacks saludables.</p>
                  <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-animated">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm" style={{ border: '2px solid #84a98c', backgroundColor: '#f8f9fa' }}>
                <img src="/assets/pecanes/5kg.jpg" className="card-img-top img-thumbnail" alt="Bolsa de 5kg" />
                <div className="card-body text-center">
                  <h5 className="card-title">Bolsa de 5kg</h5>
                  <p className="card-text">Perfecto para grandes familias.</p>
                  <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-animated">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

    {/* Sección de Nueces Pecan Caramelizadas */}
      <section className="section-bg2-css">
        <div id="productos2" className="mb-5">
            <h3 className="text-center mt-5 mb-4">
              <span className="highlight-producto-css">Producto</span><span className="highlight-css">Premium</span>
            </h3>
            <h3 className="text-center mt-2 mb-4">
              <span className="highlight-subtitulo-css">Nueces Pecan Caramelizadas</span>
            </h3>
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm" style={{ border: '2px solid #bc4749', backgroundColor: '#fff4e6' }}>
                  <img src="/assets/pecanes/250gr.jpg" className="card-img-top img-thumbnail" alt="Bolsa de 250g" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bolsa de 250g</h5>
                    <p className="card-text">¡Delicioso snack dulce para cualquier ocasión!</p>
                    <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-animated">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm" style={{ border: '2px solid #bc4749', backgroundColor: '#fff4e6' }}>
                  <img src="/assets/pecanes/500gr.jpg" className="card-img-top img-thumbnail" alt="Bolsa de 500g" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bolsa de 500g</h5>
                    <p className="card-text">Perfecto para compartir en familia.</p>
                    <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-animated">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm" style={{ border: '2px solid #bc4749', backgroundColor: '#fff4e6' }}>
                  <img src="/assets/pecanes/5kg.jpg" className="card-img-top img-thumbnail" alt="Bolsa de 5kg" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Bolsa de 5kg</h5>
                    <p className="card-text">Para quienes disfrutan lo dulce en grande.</p>
                    <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-animated">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>


      {/* Sección de contacto - ContactComponent.jsx */}

      <DiscountCountdown/>
      {/* <ContactComponent/> */}

      {/* <ContactComponent/> */}

    </div>
  );
}



  