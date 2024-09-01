export const HomePage = () => {

  const pecanImageUrl = `/assets/pecanes/pecanes.png`;

  return (
    <div className="container mt-5">
      {/* Banner de bienvenida */}
      <div className="jumbotron text-center bg-light">
        <h1 className="display-4">Bienvenidos a Pecan Junín</h1>
        <p className="lead">Calidad y tradición en cada nuez</p>
        <hr className="my-4" />
        <p>Descubre nuestras deliciosas nueces pecan cultivadas en Junín. Directas del campo a tu mesa.</p>
        <a className="btn btn-primary btn-lg" href="#productos" role="button">Ver productos</a>
      </div>

      {/* Sección sobre nosotros */}
      <div className="row mb-5">
        <div className="col-md-6">
          <img src={pecanImageUrl} alt="Campo en Junín" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h2>Sobre nosotros</h2>
            <p>Somos una familia dedicada a la producción de nueces pecan en nuestro campo en Junín. Nos enorgullece ofrecer productos de alta calidad directamente desde nuestro huerto a tu hogar.</p>
          </div>
        </div>
      </div>

      {/* Sección de productos */}
      <div id="productos" className="mb-5">
        <h2 className="text-center mb-4">Nuestros productos</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="imagen-bolsa-500g.jpg" className="card-img-top" alt="Bolsa de 500g" />
              <div className="card-body text-center">
                <h5 className="card-title">Bolsa de 500g</h5>
                <p className="card-text">Perfecta para pequeñas familias o como un delicioso snack.</p>
                <a href="/comprar" className="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="imagen-bolsa-1kg.jpg" className="card-img-top" alt="Bolsa de 1kg" />
              <div className="card-body text-center">
                <h5 className="card-title">Bolsa de 1kg</h5>
                <p className="card-text">Ideal para quienes disfrutan de las nueces en sus recetas favoritas.</p>
                <a href="/comprar" className="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="imagen-bolsa-5kg.jpg" className="card-img-top" alt="Bolsa de 5kg" />
              <div className="card-body text-center">
                <h5 className="card-title">Bolsa de 5kg</h5>
                <p className="card-text">Para los verdaderos amantes de las nueces, perfecto para grandes familias.</p>
                <a href="/comprar" className="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className="text-center mt-5">
        <h2>Contáctanos</h2>
        <p>¿Tienes alguna pregunta? No dudes en <a href="/contacto">contactarnos</a>.</p>
      </div>
    </div>
  );
}