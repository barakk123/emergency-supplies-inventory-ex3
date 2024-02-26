import { useState } from 'react';
import { deleteSupply } from '../services/apiService';

const useDeleteSupply = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const remove = async (supply_name) => {
    setIsDeleting(true);
    try {
      await deleteSupply(supply_name);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return { remove, isDeleting, error };
};

export default useDeleteSupply;
