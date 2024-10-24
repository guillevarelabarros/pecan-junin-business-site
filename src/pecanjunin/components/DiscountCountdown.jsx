import './DiscountCountdown.css';
import { useEffect, useState } from 'react';

export const DiscountCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 15 minutes in seconds
  const [discountExpired, setDiscountExpired] = useState(false);
  const [countdownStarted, setCountdownStarted] = useState(false); // Nuevo estado para controlar el inicio del contador

  useEffect(() => {
    const handleScroll = () => {
      // Verificar si el usuario ha llegado al final de la página
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setCountdownStarted(true); // Iniciar el contador
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (countdownStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft <= 0) {
      setDiscountExpired(true); // Establecer el descuento como expirado cuando el tiempo se acabe
    }
  }, [timeLeft, countdownStarted]); // Agregar countdownStarted a las dependencias

  // Función para formatear el tiempo de segundos a mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="text-center bg-light mt-5 mb-5 py-3 border border-2 border-danger">
      {!discountExpired ? (
        <>
          <h2 className="titulo-grande-css mb-4"><span className="highlight-css">¡Descuento exclusivo!</span></h2>
          <h4 className="text-success"><span className="highlight-subtitulo-css">¡40% de descuento</span> en tu compra si nos escribes dentro de los próximos <span className="highlight-subtitulo-css">5 minutos!</span></h4>
          <p className="fs-5">Escríbenos por WhatsApp para aprovechar este descuento exclusivo.</p>
          <div className="fs-3 fw-bold text-danger">Tiempo restante: {formatTime(timeLeft)}</div>
          <a href="https://wa.me/542364658923" className="btn btn-success mt-3 fs-5" target="_blank" rel="noopener noreferrer">¡Quiero mi descuento!</a>
        </>
      ) : (
        <>
          <h4 className="text-danger">Lo sentimos, el descuento ha expirado.</h4>
          <p className="fs-5">De todos modos, ¡contáctanos para conocer otras ofertas!</p>
          <a href="https://wa.me/542364658923" className="btn btn-primary mt-3 fs-5" target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
        </>
      )}
    </section>
  );
};



// import { useEffect, useState } from 'react';

// export const DiscountCountdown = () => {
//   const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
//   const [discountExpired, setDiscountExpired] = useState(false);

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft(timeLeft - 1);
//       }, 1000);

//       return () => clearInterval(timer);
//     } else {
//       setDiscountExpired(true); // Set discount as expired when time runs out
//     }
//   }, [timeLeft]);

//   // Function to format time from seconds to mm:ss
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   return (

//     <section className="text-center bg-light mt-5 mb-5 py-3 border border-2 border-danger">
//       {!discountExpired ? (
//         <>
//           <h2 className="titulo-grande-css mb-4"><span className="highlight-css">¡Descuento exclusivo!</span></h2>
//           <h4 className="text-success"><span className="highlight-subtitulo-css">¡40% de descuento</span> en tu compra si nos escribes dentro de los próximos <span className="highlight-subtitulo-css">15 minutos!</span></h4>
//           <p className="fs-5">Escríbenos por WhatsApp para aprovechar este descuento exclusivo.</p>
//           <div className="fs-3 fw-bold text-danger">Tiempo restante: {formatTime(timeLeft)}</div>
//           <a href="https://wa.me/542364658923" className="btn btn-success mt-3 fs-5" target="_blank" rel="noopener noreferrer">¡Quiero mi descuento!</a>
//         </>
//       ) : (
//         <>
//           <h4 className="text-danger">Lo sentimos, el descuento ha expirado.</h4>
//           <p className="fs-5">De todos modos, ¡contáctanos para conocer otras ofertas!</p>
//           <a href="https://wa.me/542364658923" className="btn btn-primary mt-3 fs-5" target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
//         </>
//       )}
//     </section>
//   );
// };



