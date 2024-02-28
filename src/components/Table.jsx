import "../styles/table.css";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import { useContext, useEffect } from "react";
import { getSupplies, deleteSupply } from "../services/apiService";
import { SupplyContext } from "../contexts/SupplyContext";

const Table = () => {
  const { state, dispatch } = useContext(SupplyContext);
  const { error } = state;
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSupplies();
        dispatch({ type: "SET", payload: response });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    };
    fetchData();
  }, [dispatch]);
  const { supplies, searchTerm } = state;

  const handleDelete = (supply_name) => async () => {
    const result = await deleteSupply(supply_name);
    dispatch({ type: "REMOVE", payload: supply_name });
    result
  };

  

  return (
    <>
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
          {supplies &&
            supplies
              .filter((supply) =>
                supply.supply_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((supply) => (
                <tr key={supply.supply_name}>
                  <td>{supply.supply_name}</td>
                  <td>{supply.category}</td>
                  <td>{supply.unit_price}</td>
                  <td>{supply.quantity}</td>
                  <td>{supply.supplier}</td>
                  <td>{supply.location}</td>
                  <td>
                    <button>
                      <MdModeEdit />
                    </button>
                    <button onClick={handleDelete(supply.supply_name)}>
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      {error && (
        <div className="error">
          <h4>Error fetching data</h4>
          <br />
          {error}
        </div>
      )}
      
    </>
  );
};

export default Table;
