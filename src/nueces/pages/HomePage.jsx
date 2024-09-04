export const HomePage = () => {

  const pecanImageUrl = `/assets/pecanes/logo.png`;

  return (
    <div className="container mt-5">
      {/* Banner de bienvenida */}
      <div className="jumbotron text-center bg-light">
        <h1 className="display-4">Bienvenidos a Pecan Junín</h1>
        <p className="lead">Calidad y tradición en cada nuez</p>
        <hr className="my-4" />
        <p>Descubre nuestras deliciosas nueces pecan cultivadas en Junín. Directas del campo a tu mesa.</p>
        {/* <a className="btn btn-primary btn-lg" href="#productos" role="button">Ver productos</a> */}
      </div>

      {/* Sección sobre nosotros */}
      {/* <div className="row mb-5">
        <div className="col-md-6">
          <img src={pecanImageUrl} alt="Campo en Junín" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h2>Sobre nosotros</h2>
            <p>Somos una familia dedicada a la producción de nueces pecan en nuestro campo en Junín. Nos enorgullece ofrecer productos de alta calidad directamente desde nuestro huerto a tu hogar.</p>
          </div>
        </div>
      </div> */}

      {/* Sección de productos */}
      <div id="productos" className="mb-5">
        <h2 className="text-center mb-4">Nuestros productos</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/assets/pecanes/250gr.jpg" className="card-img-top" alt="Bolsa de 500g" />
              <div className="card-body text-center">
                <h5 className="card-title">Bolsa de 250g</h5>
                <p className="card-text">Perfecta para pequeñas familias o como un delicioso snack.</p>
                {/* <a href="/comprar" className="btn btn-primary">Comprar</a> */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/assets/pecanes/500gr.jpg" className="card-img-top" alt="Bolsa de 1kg" />
              <div className="card-body text-center">
                <h5 className="card-title">Bolsa de 500gr</h5>
                <p className="card-text">Ideal para quienes disfrutan de las nueces en sus recetas favoritas.</p>
                {/* <a href="/comprar" className="btn btn-primary">Comprar</a> */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/assets/pecanes/5kg.jpg" className="card-img-top" alt="Bolsa de 5kg" />
              <div className="card-body text-center">
                <h5 className="card-title">Bolsa de 5kg</h5>
                <p className="card-text">Para los verdaderos amantes de las nueces, perfecto para grandes familias.</p>
                {/* <a href="/comprar" className="btn btn-primary">Comprar</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className="text-center mt-5">
        <h2>Contáctanos</h2>
        <br />
        {/* <p>¿Tienes alguna pregunta? No dudes en <a href="/contacto">contactarnos</a>.</p> */}
        <h5>¿Querés comprar éstas deliciosas nueces?</h5>
        <br />
        <p><strong>WhatsApp:   </strong>Envía un mensaje al número <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer">+54 2364 658923</a> (solo mensajes de whatsapp, no atendemos llamadas).</p>
        <p><strong>Instagram: </strong>Mándanos un mensaje a nuestra cuenta de <a href="https://www.instagram.com/pecanjunin" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
      </div>
    </div>
  );
}



  // <ul>
  //         <li><strong>Formulario:</strong> Completa el formulario arriba y te responderemos a la brevedad.</li>
  //         <li><strong>WhatsApp:</strong> Envía un mensaje al número <a href="https://wa.me/542364658923" target="_blank" rel="noopener noreferrer">+54 2364 658923</a> (solo mensajes, no atendemos llamadas).</li>
  //         <li><strong>Instagram:</strong> Mándanos un mensaje a nuestra cuenta de <a href="https://www.instagram.com/pecanjunin" target="_blank" rel="noopener noreferrer">Instagram</a>.</li>
  //         {/* <li><strong>Facebook:</strong> Contáctanos a través de nuestra página de <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61564890774998" target="_blank" rel="noopener noreferrer">Facebook</a>.</li> */}
  //       </ul>