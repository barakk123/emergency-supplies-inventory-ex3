import axios from 'axios';

const API_BASE_URL = 'https://emergency-supplies-inventory.onrender.com/supplies'; 

export const getSupplies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    
    console.error('Error fetching supplies:', error);
    throw error;
  }
};

export const getSupply = async (supplyName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${supplyName}`);
    return response.data;
  } catch (error) {        
    console.error('Error fetching supply:', error);
    throw error;
  }
};

export const addSupply = async (newSupply) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/`, newSupply);
    return response.data;
  } catch (error) {
    console.error('Error adding new supply:', error);
    throw error;
  }
};

export const updateSupply = async (supplyName, updatedSupply) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${supplyName}`, updatedSupply);
    return response.data;
  } catch (error) {
    console.error('Error updating supply:', error);
    throw error;
  }
};

export const deleteSupply = async (supplyName) => {
  try {
    await axios.delete(`${API_BASE_URL}/${supplyName}`);
  } catch (error) {
    console.error('Error deleting supply:', error);
    throw error;
  }
};
