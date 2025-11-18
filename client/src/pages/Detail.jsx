import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { exoplanetsAPI } from '../services/api';
import { useFavorites } from '../hooks/useFavorites';
import Viewer3D from '../components/exoplanet/Viewer3D';

const Detail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    const loadPlanet = async () => {
      try {
        const { data } = await exoplanetsAPI.getById(id);
        setPlanet(data);
      } catch (error) {
        console.error('Error loading planet:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPlanet();
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </Container>
    );
  }

  if (!planet) {
    return (
      <Container className="py-5 text-center text-light">
        <h2>Planeta no encontrado</h2>
        <Button as={Link} to="/catalog" variant="primary" className="mt-3">
          Volver al Catálogo
        </Button>
      </Container>
    );
  }

  const favorite = isFavorite(planet.id);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(planet.id);
    } else {
      addFavorite(planet);
    }
  };

  return (
    <div className="bg-dark text-light min-vh-100 py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <Button as={Link} to="/catalog" variant="outline-light" size="sm">
              ← Volver al Catálogo
            </Button>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={6}>
            <Card bg="dark" border="secondary">
              <Card.Img variant="top" src={planet.image} style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h2 className="mb-2">{planet.name}</h2>
                    <p className="text-muted">⭐ {planet.star}</p>
                  </div>
                  <Button 
                    variant={favorite ? 'warning' : 'outline-warning'}
                    onClick={toggleFavorite}
                  >
                    {favorite ? '⭐ Guardado' : '☆ Guardar'}
                  </Button>
                </div>

                <div className="mb-3">
                  <Badge bg="primary" className="me-2">{planet.type}</Badge>
                  {planet.habitable && <Badge bg="success">Zona Habitable</Badge>}
                </div>

                <p className="text-light">{planet.description}</p>

                <ListGroup variant="flush" className="bg-dark">
                  <ListGroup.Item className="bg-dark text-light border-secondary">
                    <strong>Masa:</strong> {planet.mass} M🌍
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-light border-secondary">
                    <strong>Radio:</strong> {planet.radius} R🌍
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-light border-secondary">
                    <strong>Distancia:</strong> {planet.distance} años luz
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-light border-secondary">
                    <strong>Temperatura:</strong> {planet.temperature}K
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-light border-secondary">
                    <strong>Año de descubrimiento:</strong> {planet.discoveryYear}
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-light border-secondary">
                    <strong>Método de detección:</strong> {planet.discoveryMethod}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card bg="dark" border="secondary" className="mb-4">
              <Card.Body>
                <h4 className="mb-3">Vista 3D</h4>
                <Viewer3D planet={planet} />
              </Card.Body>
            </Card>

            <Card bg="dark" border="secondary">
              <Card.Body>
                <h4 className="mb-3">Datos Científicos</h4>
                <p className="text-muted small">
                  Este planeta fue descubierto en {planet.discoveryYear} utilizando el método de {planet.discoveryMethod.toLowerCase()}.
                  {planet.habitable && ' Se encuentra en la zona habitable de su estrella, lo que significa que podría tener agua líquida en su superficie.'}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
