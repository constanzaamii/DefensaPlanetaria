import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <div className="text-center">
          <p className="mb-0">
            🌌 Defensa Planetaria - Exploración de Exoplanetas
          </p>
          <p className="text-muted small mb-0">
            Proyecto educativo © 2024
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
