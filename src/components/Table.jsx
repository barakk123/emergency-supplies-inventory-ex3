import "../styles/table.css";
import { MdModeEdit, MdDeleteForever } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { getSupplies, deleteSupply } from "../services/apiService";
import { SupplyContext } from "../contexts/SupplyContext";
import Modal from "@mui/material/Modal";
import EditSupply from "../components/EditSupply";
import Skeleton from "@mui/material/Skeleton"

const Table = () => {
  const { state, dispatch } = useContext(SupplyContext);
  const { error } = state;
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getSupplies();
        dispatch({ type: "SET", payload: response });
      } catch (error) {
        console.log(error.message);
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);
  const { supplies, searchTerm } = state;

  const handleDelete = (supply_name) => async () => {
    const isConfirmed = window.confirm(`Are you sure you want to delete ${supply_name}?`);
    if (isConfirmed) {
      await deleteSupply(supply_name);
      dispatch({ type: "REMOVE", payload: supply_name });
    }
  };

  const handleEdit = (supply) => () => {
    dispatch({ type: "SELECT", payload: supply });
    openModal();
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
          {loading ? (
          <tr>
            <td colSpan="7">
              <Skeleton variant="rectangular" width="100%" height={118} animation="wave" />
            </td>
          </tr>) : supplies &&
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
                    <button onClick={handleEdit(supply)}>
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
      {loading && <p>Loading...</p>}
      {error && (
        <div className="error">
          <h4>Error fetching data</h4>
          <br />
          {error}
        </div>
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <>
          <EditSupply onClose={() => setOpen(false)} supply={state.selected} />
        </>
      </Modal>
    </>
  );
};

export default Table;
