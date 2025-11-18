import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
});

export const exoplanetsAPI = {
  getAll: (filters) => api.get('/exoplanets', { params: filters }),
  getById: (id) => api.get(`/exoplanets/${id}`),
  search: (q) => api.get(`/exoplanets/search/${q}`)
};

export const favoritesAPI = {
  getAll: () => api.get('/favorites'),
  add: (planet) => api.post('/favorites', planet),
  remove: (id) => api.delete(`/favorites/${id}`)
};
