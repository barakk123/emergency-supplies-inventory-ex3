import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import useFindSupply from '../hooks/useFindSupply';
import '../styles/header.css';

const Header = ({ handleFoundSupply }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { find, foundSupply, loading, error, clearError } = useFindSupply();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    find(searchTerm);
  };

  const handleSetFoundSupply = useCallback((supply) => {
    handleFoundSupply(supply);
  }, [handleFoundSupply]);

  useEffect(() => {
    if (foundSupply) {
      handleSetFoundSupply(foundSupply);
    }
  }, [foundSupply, handleSetFoundSupply]);

  const handleClearSearch = () => {
    setSearchTerm('');
    handleSetFoundSupply(null);
    clearError();
  };

  useEffect(() => {
    if (!searchTerm) {
      handleSetFoundSupply(null);
      clearError();
    }
  }, [searchTerm, handleSetFoundSupply, clearError]);
  
  return (
    <div className="header">
      <h1>Supplies Inventory</h1>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Product name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        
        <button onClick={handleSearchSubmit} disabled={loading}>
          {loading ? 'Searching...' : 'Find'}
        </button>
        
        <button onClick={handleClearSearch}>Clear</button>
        
        {error && <p>Error: {error}</p>}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

Header.propTypes = {
  handleFoundSupply: PropTypes.func.isRequired,
};

export default Header;
