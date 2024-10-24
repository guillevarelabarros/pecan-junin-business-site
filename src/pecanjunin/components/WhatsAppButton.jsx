import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de WhatsApp
import './WhatsAppButton.css'; // Asegúrate de crear este archivo CSS


export const WhatsAppButton = () => {
  return (
    <>
    <a
      className="whatsapp"
      href="https://wa.me/542364658923"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
    </a>
    
    </>
  )
}
