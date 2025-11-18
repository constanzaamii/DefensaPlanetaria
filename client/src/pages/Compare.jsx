import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import { useExoplanets } from '../hooks/useExoplanets';

const Compare = () => {
  const { planets } = useExoplanets();
  const [selected, setSelected] = useState([]);

  const handleSelect = (planetId) => {
    if (selected.includes(planetId)) {
      setSelected(selected.filter(id => id !== planetId));
    } else if (selected.length < 3) {
      setSelected([...selected, planetId]);
    }
  };

  const selectedPlanets = planets.filter(p => selected.includes(p.id));

  return (
    <div className="bg-dark text-light min-vh-100 py-5">
      <Container>
        <h2 className="mb-4">Comparar Exoplanetas 📊</h2>

        <Card bg="dark" border="secondary" className="mb-4">
          <Card.Body>
            <h5 className="mb-3">Selecciona hasta 3 planetas para comparar</h5>
            <Form>
              <Row>
                {planets.slice(0, 12).map(planet => (
                  <Col key={planet.id} md={4} lg={3} className="mb-2">
                    <Form.Check
                      type="checkbox"
                      label={planet.name}
                      checked={selected.includes(planet.id)}
                      onChange={() => handleSelect(planet.id)}
                      disabled={!selected.includes(planet.id) && selected.length >= 3}
                    />
                  </Col>
                ))}
              </Row>
            </Form>
          </Card.Body>
        </Card>

        {selectedPlanets.length > 0 && (
          <Card bg="dark" border="secondary">
            <Card.Body>
              <h5 className="mb-3">Comparación</h5>
              <div className="table-responsive">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Característica</th>
                      {selectedPlanets.map(planet => (
                        <th key={planet.id}>{planet.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Tipo</strong></td>
                      {selectedPlanets.map(planet => (
                        <td key={planet.id}>{planet.type}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Estrella</strong></td>
                      {selectedPlanets.map(planet => (
                        <td key={planet.id}>{planet.star}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Masa (M🌍)</strong></td>
                      {selectedPlanets.map(planet => (
                        <td key={planet.id}>{planet.mass}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Radio (R🌍)</strong></td>
                      {selectedPlanets.map(planet => (
                        <td key={planet.id}>{planet.radius}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Distancia (años luz)</strong></td>
                      {selectedPlanets.map(planet => (
                        <td key={planet.id}>{planet.distance}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Temperatura (K)</strong></td>
                      {selectedPlanets.map(planet => (
                        <td key={planet.id}>{planet.temperature}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Zona Habitable</strong></td>
                      {selectedPlanets.map(planet => (
                        <td key={planet.id}>
                          {planet.habitable ? '✅ Sí' : '❌ No'}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Año de descubrimiento</strong></td>
                      {selectedPlanets.map(planet => (
                        <td key={planet.id}>{planet.discoveryYear}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Método de detección</strong></td>
                      {selectedPlanets.map(planet => (
                        <td key={planet.id}>{planet.discoveryMethod}</td>
                      ))}
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        )}

        {selectedPlanets.length === 0 && (
          <div className="text-center py-5 text-muted">
            <h4>Selecciona algunos planetas para comenzar la comparación</h4>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Compare;
