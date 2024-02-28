import { useState } from 'react';
import { getSupply } from '../services/apiService';

const useFindSupply = () => {
  const clearError = () => setError(null);
  const [foundSupply, setFoundSupply] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const find = async (supplyName) => {
    if (!supplyName.trim()) {
      return;
    }
    setLoading(true);
    try {
      const data = await getSupply(supplyName);
      setFoundSupply(data);
      setError(null);
    } catch (err) {
      setError(`Could not find product name "${supplyName}"`);
      setFoundSupply(null);
    } finally {
      setLoading(false);
    }
  };

  return { find, foundSupply, loading, error, clearError };
};

export default useFindSupply;
