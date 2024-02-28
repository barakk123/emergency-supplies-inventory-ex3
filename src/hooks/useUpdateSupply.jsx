import { useState } from 'react';
import { updateSupply } from '../services/apiService';

const useUpdateSupply = () => {
  const clearError = () => setError(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  const update = async (supply_name, updatedSupplyData) => {
    setIsUpdating(true);
    try {
      await updateSupply(supply_name, updatedSupplyData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  return { update, isUpdating, error, clearError };
};

export default useUpdateSupply;
