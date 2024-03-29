import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/modal.css";
import { useContext, useState } from "react";
import { updateSupply } from "../services/apiService";
import { SupplyContext } from "../contexts/SupplyContext";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const EditSupply = ({ onClose }) => {
  const { state, dispatch } = useContext(SupplyContext);
  const [newItem, setNewItem] = useState({
    supply_name: state.selected.supply_name,
    category: state.selected.category,
    location: state.selected.location,
    quantity: state.selected.quantity,
    supplier: state.selected.supplier,
    unit_price: state.selected.unit_price,
  });

  const editItem = async () => {
    try {
      const response = await updateSupply(state.selected.supply_name, newItem);
      dispatch({ type: "UPDATE", payload: response });
      setNewItem({
        supply_name: "",
        category: "",
        location: "",
        quantity: "",
        supplier: "",
        unit_price: "",
      });
      onClose();
    } catch (error) {
      alert("An error occurred while updating the supply." + error);
    }
  };
  return (
    <Box className="modal">
      <h3>Edit Supply</h3>
      <div className="input-stack">
        <TextField
          required
          label="Name"
          variant="outlined"
          value={newItem.supply_name}
          onChange={(e) =>
            setNewItem({ ...newItem, supply_name: e.target.value })
          }
        />
        <TextField
          required
          label="Category"
          variant="outlined"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
      </div>
      <div className="input-stack">
        <TextField
          required
          label="Unit Price"
          variant="outlined"
          value={newItem.unit_price}
          type="number"
          onChange={(e) =>
            setNewItem({ ...newItem, unit_price: e.target.value })
          }
        />
        <TextField
          required
          label="Quantity"
          variant="outlined"
          value={newItem.quantity}
          type="number"
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
      </div>
      <div className="input-stack">
        <TextField
          required
          label="Supplier"
          variant="outlined"
          value={newItem.supplier}
          onChange={(e) => setNewItem({ ...newItem, supplier: e.target.value })}
        />
        <TextField
          required
          label="Location"
          variant="outlined"
          value={newItem.location}
          onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
        />
      </div>

      <Stack direction="row" spacing={5}>
        <Button
          onClick={() => {
            onClose();
            setNewItem({
              supply_name: "",
              category: "",
              location: "",
              quantity: "",
              supplier: "",
              unit_price: "",
            });
          }}>
          Cancel
        </Button>
            <Button onClick={editItem} variant="contained">Save</Button>
      </Stack>
    </Box>
  );
};

EditSupply.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditSupply;
