export const ContactComponent = () => { 
  return (
    <>
      <section>
        <div className="text-center mt-5 mb-5">
          <h2 className="titulo-grande-css">Contáctanos</h2>
          <h3 className="mt-4 mb-3">¿Querés comprar nuestras deliciosas nueces?</h3>
          <p className="fs-5">Haz clic en el botón para enviarnos un mensaje en WhatsApp.</p>
          <a 
            href="https://wa.me/542364658923" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-success btn-lg mt-3"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
