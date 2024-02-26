import { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import useSupplies from './hooks/useSupplies';
import './App.css';
import PropTypes from 'prop-types';

const App = () => {
  const { supplies, loading, error } = useSupplies();
  const [foundSupply, setFoundSupply] = useState(null); // State for found supply

  const handleFoundSupply = (supply) => {
    setFoundSupply(supply); // Update found supply in state
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading supplies: {error}</p>;

  return (
    <div>
      {/* Pass handleFoundSupply to Header */}
      <Header handleFoundSupply={handleFoundSupply} />
      {/* Pass foundSupply to Table */}
      <Table supplies={foundSupply ? [foundSupply] : supplies} />
    </div>
  );
};
Header.propTypes = {
  handleFoundSupply: PropTypes.func.isRequired,
};
export default App;
