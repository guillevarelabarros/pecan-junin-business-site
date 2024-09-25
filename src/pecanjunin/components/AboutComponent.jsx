export const AboutComponent = () => {
  const pecanImageUrl = `/assets/pecanes/logo2png.png`;

  return (
    <div className="container sobre-nosotros my-5">
      <div className="row">
        <div className="col-md-4">
          <img src={pecanImageUrl} className="img-fluid rounded animate__animated animate__rollIn" alt="Campo de nueces" />
        </div>
        <div className="col-md-8">
          <h2 className="titulo-grande-css">Sobre Nosotros</h2>
          <p className="fs-3">
            En Pecan Junín cultivamos nueces de alta calidad, directo desde nuestro campo familiar en Junín, Argentina.
          </p>
          <p className="fs-3">
            Usamos métodos sostenibles para garantizar un producto fresco y saludable. Cada nuez es cultivada con dedicación y respeto por la naturaleza.
          </p>
          <p className="fs-3">
            ¡Disfruta del sabor auténtico y natural que solo un productor local puede ofrecer!
          </p>
        </div>
      </div>
    </div>
  );
};


// export const AboutComponent = () => {

//   const pecanImageUrl = `/assets/pecanes/logo2png.png`;

//   return (
//     <div className="container sobre-nosotros">
//       <div className="row my-5">
//         <div className="col-md-4">
//           <img src={pecanImageUrl} className="img-fluid rounded mt-5" alt="Campo de nueces" />
//         </div>
//         <div className="col-md-8">
//           <h2 className="titulo-grande-css">Sobre Nosotros</h2>
//           <p className="fs-4">
//             En Pecan Junin, estamos dedicados a producir las mejores nueces pecan con el mayor respeto por la naturaleza. Nuestro campo, ubicado en Junin, se nutre de años de experiencia y de un profundo amor por la agricultura.
//           </p>
//           <p className="fs-4">
//             Cultivamos nuestras nueces pecan con métodos sostenibles, asegurándonos de que cada nuez que ofrecemos a nuestros clientes sea de la más alta calidad. Desde la siembra hasta la cosecha, cuidamos cada detalle para que puedas disfrutar del sabor y los beneficios de nuestras nueces.
//           </p>
//           <p className="fs-4">
//             Gracias por apoyar a una pequeña empresa familiar que pone su corazón en cada producto que vende. ¡Esperamos que disfrutes nuestras nueces tanto como nosotros disfrutamos cultivándolas!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };