import { useState } from 'react';
import { addSupply } from '../services/apiService';

const useCreateSupply = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const createSupply = async (newSupplyData) => {
    setIsSubmitting(true);
    try {
      await addSupply(newSupplyData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { createSupply, isSubmitting, error };
};

export default useCreateSupply;
