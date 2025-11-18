import { useState, useEffect } from 'react';
import { exoplanetsAPI } from '../services/api';

export const useExoplanets = (filters = {}, search = '') => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = search 
          ? await exoplanetsAPI.search(search)
          : await exoplanetsAPI.getAll(filters);
        setPlanets(data);
      } catch (error) {
        console.error('Error loading planets:', error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [JSON.stringify(filters), search]);

  return { planets, loading };
};
