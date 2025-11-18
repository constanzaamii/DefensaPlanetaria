import { Card, Form } from 'react-bootstrap';

const FilterSidebar = ({ filters, onChange }) => {
  const handleTypeChange = (e) => {
    const type = e.target.value;
    onChange(type ? { ...filters, type } : { ...filters, type: undefined });
  };

  const handleHabitableChange = (e) => {
    const habitable = e.target.checked;
    onChange(habitable ? { ...filters, habitable: true } : { ...filters, habitable: undefined });
  };

  return (
    <Card bg="dark" border="secondary" className="text-light sticky-top" style={{ top: '20px' }}>
      <Card.Body>
        <h5 className="mb-3">Filtros</h5>
        
        <Form.Group className="mb-3">
          <Form.Label>Tipo de Planeta</Form.Label>
          <Form.Select 
            value={filters.type || ''} 
            onChange={handleTypeChange}
            className="bg-dark text-light border-secondary"
          >
            <option value="">Todos</option>
            <option value="Terrestre">Terrestre</option>
            <option value="Super-Tierra">Super-Tierra</option>
            <option value="Neptuno">Neptuno</option>
            <option value="Júpiter Caliente">Júpiter Caliente</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Check 
            type="checkbox"
            label="Solo zona habitable"
            checked={filters.habitable || false}
            onChange={handleHabitableChange}
          />
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default FilterSidebar;
