import { useContext, useState } from "react";
import "../styles/header.css";
import { BsSearch } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { SupplyContext } from "../contexts/SupplyContext";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddSupply from "./AddSupply";

const Header = () => {
  const { dispatch } = useContext(SupplyContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value == "") {
      dispatch({ type: "SET_SEARCH_TERM", payload: "" });
    }
  };
  const handleSearchSubmit = () => {
    dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <div className="header">
      <h1>Supplies Inventory</h1>
      <Button
        onClick={openModal}
        startIcon={<IoMdAdd />}
        variant="contained"
        sx={{ textTransform: "none" }}>
        Add New Supply
      </Button>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a supply..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchSubmit}>
          <BsSearch className="BsSearch" />
        </button>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <>
          <AddSupply onClose={() => setOpen(false)} />
        </>
      </Modal>
    </div>
  );
};

export default Header;
