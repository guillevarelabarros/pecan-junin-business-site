import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de Facebook

export const FacebookButton = () => {
  return (
    <a
      className="facebook"
      href="https://www.facebook.com/profile.php?id=61564890774998"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
    </a>
  );
};
