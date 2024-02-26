import '../styles/table.css';
import PropTypes from 'prop-types';

const Table = ({ supplies }) => {
  return (
    <table className="supplies-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Supplier</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {supplies.map(supply => (
          <tr key={supply.supply_name}>
            <td>{supply.supply_name}</td>
            <td>{supply.category}</td>
            <td>{supply.unit_price}</td>
            <td>{supply.quantity}</td>
            <td>{supply.supplier}</td>
            <td>{supply.location}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Table.propTypes = {
    supplies: PropTypes.array.isRequired,
  };
export default Table;
