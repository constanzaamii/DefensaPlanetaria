import { Form, InputGroup } from 'react-bootstrap';

const SearchBar = ({ value, onChange }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>🔍</InputGroup.Text>
      <Form.Control
        type="text"
        placeholder="Buscar por nombre o estrella..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
