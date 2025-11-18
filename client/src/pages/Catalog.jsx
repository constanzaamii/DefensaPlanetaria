import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useExoplanets } from '../hooks/useExoplanets';
import ExoplanetGrid from '../components/exoplanet/ExoplanetGrid';
import FilterSidebar from '../components/filters/FilterSidebar';
import SearchBar from '../components/filters/SearchBar';

const Catalog = () => {
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState('');
  const { planets, loading } = useExoplanets(filters, search);

  return (
    <Container fluid className="py-4 bg-dark min-vh-100">
      <Row>
        <Col lg={3}>
          <FilterSidebar filters={filters} onChange={setFilters} />
        </Col>
        <Col lg={9}>
          <h2 className="text-light mb-4">Catálogo de Exoplanetas</h2>
          <SearchBar value={search} onChange={setSearch} />
          {loading ? (
            <div className="text-center py-5 text-light">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : planets.length === 0 ? (
            <div className="text-center py-5 text-muted">
              No se encontraron planetas con los filtros seleccionados
            </div>
          ) : (
            <ExoplanetGrid planets={planets} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Catalog;
