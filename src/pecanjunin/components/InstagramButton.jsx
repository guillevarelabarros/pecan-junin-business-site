import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de Instagram
import './InstagramButton.css'

export const InstagramButton = () => {
  return (
    <a
      className="instagram"
      href="https://www.instagram.com/pecanjunin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
    </a>
  );
};
