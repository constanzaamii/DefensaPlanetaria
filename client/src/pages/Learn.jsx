import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const Learn = () => {
  return (
    <div className="bg-dark text-light min-vh-100 py-5">
      <Container>
        <h2 className="mb-4">Aprende sobre Exoplanetas 📚</h2>

        {/* Métodos de Detección */}
        <Card bg="dark" border="secondary" className="mb-4">
          <Card.Body>
            <h3 className="mb-3">Métodos de Detección</h3>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="bg-dark text-light">
                <Accordion.Header>Método de Tránsito</Accordion.Header>
                <Accordion.Body className="bg-dark text-light">
                  <p>
                    Es el método más común para detectar exoplanetas. Consiste en observar 
                    la disminución en el brillo de una estrella cuando un planeta pasa 
                    frente a ella desde nuestra perspectiva.
                  </p>
                  <p className="text-muted small">
                    🔭 Misiones como Kepler y TESS utilizan este método.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="bg-dark text-light">
                <Accordion.Header>Velocidad Radial</Accordion.Header>
                <Accordion.Body className="bg-dark text-light">
                  <p>
                    También conocido como método Doppler, detecta el "bamboleo" de una 
                    estrella causado por la atracción gravitacional de un planeta que 
                    orbita a su alrededor.
                  </p>
                  <p className="text-muted small">
                    📡 Fue el primer método exitoso para detectar exoplanetas.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="bg-dark text-light">
                <Accordion.Header>Imágenes Directas</Accordion.Header>
                <Accordion.Body className="bg-dark text-light">
                  <p>
                    Consiste en fotografiar directamente el planeta bloqueando la luz 
                    de la estrella. Es muy difícil debido al brillo de las estrellas.
                  </p>
                  <p className="text-muted small">
                    📸 Solo funciona con planetas grandes y muy alejados de su estrella.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="bg-dark text-light">
                <Accordion.Header>Microlente Gravitacional</Accordion.Header>
                <Accordion.Body className="bg-dark text-light">
                  <p>
                    Se basa en el efecto de lente gravitacional predicho por Einstein. 
                    Cuando un sistema estelar pasa frente a una estrella de fondo, 
                    puede magnificar su luz.
                  </p>
                  <p className="text-muted small">
                    🌟 Útil para detectar planetas lejanos y de baja masa.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>

        {/* Tipos de Planetas */}
        <Card bg="dark" border="secondary" className="mb-4">
          <Card.Body>
            <h3 className="mb-3">Tipos de Exoplanetas</h3>
            <Row className="g-3">
              <Col md={6}>
                <Card bg="secondary" className="h-100">
                  <Card.Body>
                    <h5>🌍 Terrestres</h5>
                    <p className="small">
                      Planetas rocosos similares a la Tierra, Marte o Venus. 
                      Tienen superficies sólidas y son relativamente pequeños.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card bg="secondary" className="h-100">
                  <Card.Body>
                    <h5>🌎 Super-Tierras</h5>
                    <p className="small">
                      Planetas rocosos más grandes que la Tierra pero más pequeños 
                      que Neptuno. Pueden tener entre 2 y 10 veces la masa terrestre.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card bg="secondary" className="h-100">
                  <Card.Body>
                    <h5>🔵 Neptuno</h5>
                    <p className="small">
                      Planetas gaseosos del tamaño de Neptuno o Urano. Tienen 
                      atmósferas densas de hidrógeno y helio.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card bg="secondary" className="h-100">
                  <Card.Body>
                    <h5>🔥 Júpiter Caliente</h5>
                    <p className="small">
                      Gigantes gaseosos que orbitan muy cerca de sus estrellas, 
                      con temperaturas superficiales extremadamente altas.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Zona Habitable */}
        <Card bg="dark" border="success" className="mb-4">
          <Card.Body>
            <h3 className="mb-3">Zona Habitable 🌱</h3>
            <p>
              La zona habitable es la región alrededor de una estrella donde las 
              condiciones podrían permitir la existencia de agua líquida en la 
              superficie de un planeta.
            </p>
            <p>
              No significa que definitivamente haya vida, pero es un indicador importante 
              de que un planeta podría ser habitable.
            </p>
            <ul>
              <li>No muy cerca de la estrella (demasiado caliente)</li>
              <li>No muy lejos de la estrella (demasiado frío)</li>
              <li>Depende del tamaño y temperatura de la estrella</li>
            </ul>
          </Card.Body>
        </Card>

        {/* Glosario */}
        <Card bg="dark" border="secondary">
          <Card.Body>
            <h3 className="mb-3">Glosario</h3>
            <dl className="row">
              <dt className="col-sm-3">Exoplaneta</dt>
              <dd className="col-sm-9">
                Planeta que orbita una estrella fuera de nuestro sistema solar.
              </dd>

              <dt className="col-sm-3">Año luz</dt>
              <dd className="col-sm-9">
                Distancia que recorre la luz en un año (aproximadamente 9.46 billones de km).
              </dd>

              <dt className="col-sm-3">M🌍 / R🌍</dt>
              <dd className="col-sm-9">
                Masa y radio expresados en relación a la Tierra (1 = igual que la Tierra).
              </dd>

              <dt className="col-sm-3">Tránsito</dt>
              <dd className="col-sm-9">
                Paso de un planeta frente a su estrella desde nuestra perspectiva.
              </dd>

              <dt className="col-sm-3">Kelvin (K)</dt>
              <dd className="col-sm-9">
                Unidad de temperatura absoluta. 0K = -273.15°C, 273K = 0°C.
              </dd>

              <dt className="col-sm-3">Enana Roja</dt>
              <dd className="col-sm-9">
                Estrella pequeña y fría, el tipo más común en el universo.
              </dd>
            </dl>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Learn;
