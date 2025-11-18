import { Container, Row, Col } from 'react-bootstrap';
import { useFavorites } from '../hooks/useFavorites';
import ExoplanetGrid from '../components/exoplanet/ExoplanetGrid';

const Favorites = () => {
  const { favorites, loading } = useFavorites();

  return (
    <div className="bg-dark text-light min-vh-100 py-5">
      <Container>
        <h2 className="mb-4">Mis Planetas Favoritos ⭐</h2>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : favorites.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <h4>No tienes planetas favoritos aún</h4>
            <p>Explora el catálogo y agrega algunos planetas a tus favoritos</p>
          </div>
        ) : (
          <ExoplanetGrid planets={favorites} />
        )}
      </Container>
    </div>
  );
};

export default Favorites;
