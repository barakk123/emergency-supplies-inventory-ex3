import { useState } from 'react';
import { getSupply } from '../services/apiService';

const useFindSupply = () => {
  const [foundSupply, setFoundSupply] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const find = async (supplyName) => {
    if (!supplyName.trim()) {
      setError('Supply name cannot be empty');
      return;
    }
    setLoading(true);
    try {
      const data = await getSupply(supplyName);
      setFoundSupply(data);
      setError(null);
    } catch (err) {
      setError('Error fetching supply: ' + err.message);
      setFoundSupply(null);
    } finally {
      setLoading(false);
    }
  };
  const clearError = () => setError(null);

  return { find, foundSupply, loading, error, clearError };
};

export default useFindSupply;
