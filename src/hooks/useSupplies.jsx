import { useState, useEffect } from 'react';
import { getSupplies } from '../services/apiService';

const useSupplies = () => {
  const clearError = () => setError(null);
  const [supplies, setSupplies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupplies = async () => {
      setLoading(true);
      try {
        const data = await getSupplies();
        setSupplies(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSupplies();
  }, []);

  return { supplies, loading, error, clearError };
};

export default useSupplies;
