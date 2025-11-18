import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';

const ExoplanetCard = ({ planet }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(planet.id);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFavorite(planet.id);
    } else {
      addFavorite(planet);
    }
  };

  return (
    <Card bg="dark" border="secondary" className="h-100 text-light">
      <Card.Img 
        variant="top" 
        src={planet.image} 
        style={{ height: '200px', objectFit: 'cover' }} 
        alt={planet.name}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title>{planet.name}</Card.Title>
          <Button 
            variant="link" 
            className="p-0 text-warning"
            onClick={toggleFavorite}
          >
            {favorite ? '⭐' : '☆'}
          </Button>
        </div>
        <Card.Text className="text-muted small">⭐ {planet.star}</Card.Text>
        
        <div className="mb-3">
          <Badge bg="primary" className="me-2">{planet.type}</Badge>
          {planet.habitable && <Badge bg="success">Zona Habitable</Badge>}
        </div>

        <div className="small text-muted mb-3">
          <div>📏 Radio: {planet.radius} R🌍</div>
          <div>📍 {planet.distance} años luz</div>
          <div>🌡️ {planet.temperature}K</div>
        </div>

        <Button 
          as={Link} 
          to={`/planet/${planet.id}`} 
          variant="primary" 
          size="sm" 
          className="mt-auto"
        >
          Ver Detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ExoplanetCard;
