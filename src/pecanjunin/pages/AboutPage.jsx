export const AboutPage = () => {

  const pecanImageUrl = `/assets/pecanes/logo2png.png`;

  return (
    <div className="container sobre-nosotros">
      <div className="row my-5">
        <div className="col-md-4">
          <img src={pecanImageUrl} className="img-fluid rounded mt-5" alt="Campo de nueces" />
        </div>
        <div className="col-md-8">
          <h1>Sobre Nosotros</h1>
          <p className="fs-4">
            En Pecan Junin, estamos dedicados a producir las mejores nueces pecan con el mayor respeto por la naturaleza. Nuestro campo, ubicado en Junin, se nutre de años de experiencia y de un profundo amor por la agricultura.
          </p>
          <p className="fs-4">
            Cultivamos nuestras nueces pecan con métodos sostenibles, asegurándonos de que cada nuez que ofrecemos a nuestros clientes sea de la más alta calidad. Desde la siembra hasta la cosecha, cuidamos cada detalle para que puedas disfrutar del sabor y los beneficios de nuestras nueces.
          </p>
          <p className="fs-4">
            Gracias por apoyar a una pequeña empresa familiar que pone su corazón en cada producto que vende. ¡Esperamos que disfrutes nuestras nueces tanto como nosotros disfrutamos cultivándolas!
          </p>
        </div>
      </div>
    </div>
  );
};