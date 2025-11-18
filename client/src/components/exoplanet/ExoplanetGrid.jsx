import { Row, Col } from 'react-bootstrap';
import ExoplanetCard from './ExoplanetCard';

const ExoplanetGrid = ({ planets }) => {
  return (
    <Row className="g-4">
      {planets.map(planet => (
        <Col key={planet.id} md={6} lg={4}>
          <ExoplanetCard planet={planet} />
        </Col>
      ))}
    </Row>
  );
};

export default ExoplanetGrid;
