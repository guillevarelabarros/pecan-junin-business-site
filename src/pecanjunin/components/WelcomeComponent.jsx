export const WelcomeComponent = () => {
  return (
    <>
      <div className="jumbotron text-center bg-brown mb-5 p-4">
        <h1 className="display-4 text-white">¡Bienvenidos a Pecan Junín!</h1>
        <p className="lead text-white fs-2">Nueces Pecan, frescas y deliciosas</p>
        <p className="text-white fs-4">
          Directo de nuestro campo a tu mesa - Calidad garantizada en cada nuez.
        </p>
        <hr className="my-4 text-white" />
        <div className="d-flex justify-content-center gap-3">
          <a href="#productos" 
             className="btn btn-outline-light btn-lg fs-5 px-4 py-2">
            Ver Nueces
          </a>
          <a href="https://wa.me/542364658923" 
             className="btn btn-danger btn-lg fs-5 px-4 py-2" 
             target="_blank" 
             rel="noopener noreferrer">
            ¡Comprar Ahora!
          </a>
        </div>
      </div>
    </>
  );
}


// export const WelcomeComponent = () => {
//   return (
//     <>
//       <div className="jumbotron text-center bg-brown mb-5 p-4">
//         <h1 className="display-4 text-white">¡Bienvenidos a Pecan Junín!</h1>
//         <p className="lead text-white fs-2">Nueces Pecan, frescas y deliciosas</p>
//         <p className="text-white fs-4">
//           Directo de nuestro campo en Junín, Argentina, a tu mesa. Calidad garantizada en cada nuez.
//         </p>
//         <hr className="my-4 text-white" />
//         <a href="https://wa.me/542364658923" 
//            className="btn btn-danger btn-lg fs-5 px-4 py-2" 
//            target="_blank" 
//            rel="noopener noreferrer">
//           ¡Comprar Ahora!
//         </a>
//       </div>
//     </>
//   );
// }

// export const WelcomeComponent = () => {
//   return (
//     <>
//         <div className="jumbotron  text-center bg-brown mb-5 p-4  ">
//           <h1 className="display-4 text-white">¡Bienvenidos a Pecan Junín..!</h1>
//           <p className="lead text-white fs-2">Calidad y tradición en cada nuez</p>
//           <p className="text-white fs-4">Descubre nuestras deliciosas Nueces Pecan cultivadas en Junín, Argentina. Directas del campo a tu mesa.</p>
//           <hr className="my-4 text-white" />
//           <a href="https://wa.me/542364658923" className="btn btn-danger fs-5" target="_blank" rel="noopener noreferrer">¡QUIERO COMPRAR NUECES!</a>
//         </div>
//     </>
//   )
// }