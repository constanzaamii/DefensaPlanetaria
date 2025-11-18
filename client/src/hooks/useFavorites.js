import { useState, useEffect } from 'react';
import { favoritesAPI } from '../services/api';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = async () => {
    try {
      const { data } = await favoritesAPI.getAll();
      setFavorites(data);
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const addFavorite = async (planet) => {
    try {
      await favoritesAPI.add(planet);
      await loadFavorites();
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const removeFavorite = async (id) => {
    try {
      await favoritesAPI.remove(id);
      await loadFavorites();
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const isFavorite = (id) => favorites.some(f => f.id === id);

  return { favorites, loading, addFavorite, removeFavorite, isFavorite };
};
