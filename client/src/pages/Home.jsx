import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-dark text-light">
      {/* Hero Section */}
      <section className="py-5 text-center bg-gradient" style={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' 
      }}>
        <Container>
          <h1 className="display-3 fw-bold mb-3">Descubre Exoplanetas 🌌</h1>
          <p className="lead mb-4">
            Explora mundos más allá de nuestro sistema solar
          </p>
          <Button as={Link} to="/catalog" variant="primary" size="lg">
            Explorar Ahora 🚀
          </Button>
        </Container>
      </section>

      {/* Stats Section */}
      <Container className="py-5">
        <Row className="g-4 mb-5">
          <Col md={4}>
            <Card bg="dark" border="primary" className="h-100 text-center">
              <Card.Body>
                <h2 className="display-4 text-primary mb-0">12+</h2>
                <p className="text-muted">Planetas en catálogo</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="dark" border="success" className="h-100 text-center">
              <Card.Body>
                <h2 className="display-4 text-success mb-0">6</h2>
                <p className="text-muted">En zona habitable</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="dark" border="warning" className="h-100 text-center">
              <Card.Body>
                <h2 className="display-4 text-warning mb-0">4</h2>
                <p className="text-muted">Tipos diferentes</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Features */}
        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card bg="dark" border="secondary" className="h-100 text-center">
              <Card.Body>
                <div className="display-4 mb-3">🔍</div>
                <h5>Explorar</h5>
                <p className="text-muted small">
                  Navega por nuestro catálogo de exoplanetas
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card bg="dark" border="secondary" className="h-100 text-center">
              <Card.Body>
                <div className="display-4 mb-3">⭐</div>
                <h5>Favoritos</h5>
                <p className="text-muted small">
                  Guarda tus planetas favoritos
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card bg="dark" border="secondary" className="h-100 text-center">
              <Card.Body>
                <div className="display-4 mb-3">📊</div>
                <h5>Comparar</h5>
                <p className="text-muted small">
                  Compara características entre planetas
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card bg="dark" border="secondary" className="h-100 text-center">
              <Card.Body>
                <div className="display-4 mb-3">📚</div>
                <h5>Aprender</h5>
                <p className="text-muted small">
                  Descubre cómo se detectan los exoplanetas
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
