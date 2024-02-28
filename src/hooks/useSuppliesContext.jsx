// useSuppliesContext.jsx
import { useContext } from 'react';
import { SupplyContext } from '../contexts/SupplyContext';

export const useSuppliesContext = () => {
  return useContext(SupplyContext);
};
