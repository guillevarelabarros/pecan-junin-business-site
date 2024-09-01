import React from 'react';


export const AbautPage = () => {

  const pecanImageUrl = `/assets/pecanes/logo.png`;

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6">
          <img src={pecanImageUrl} className="img-fluid rounded" alt="Campo de nueces" />
        </div>
        <div className="col-md-6">
          <h1>Sobre Nosotros</h1>
          <p>
            En Pecan Junin, estamos dedicados a producir las mejores nueces pecan con el mayor respeto por la naturaleza. Nuestro campo, ubicado en Junin, se nutre de años de experiencia y de un profundo amor por la agricultura.
          </p>
          <p>
            Cultivamos nuestras nueces pecan con métodos sostenibles, asegurándonos de que cada nuez que ofrecemos a nuestros clientes sea de la más alta calidad. Desde la siembra hasta la cosecha, cuidamos cada detalle para que puedas disfrutar del sabor y los beneficios de nuestras nueces.
          </p>
          <p>
            Gracias por apoyar a una pequeña empresa familiar que pone su corazón en cada producto que vende. ¡Esperamos que disfrutes nuestras nueces tanto como nosotros disfrutamos cultivándolas!
          </p>
        </div>
      </div>
    </div>
  );
};