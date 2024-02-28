import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
const initialState = {
  supplies: [],
  selected: {},
  searchTerm: "",
  error: "",
};

const supplyReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, supplies: action.payload };

    case "ADD":
      return { ...state, supplies: [...state.supplies, action.payload] };

    case "SELECT":
      return { ...state, selected: action.payload };

    case "REMOVE":
      return {
        ...state,
        supplies: state.supplies.filter(
          (item) => item.supply_name !== action.payload
        ),
        filteredSupplies: state.supplies.filter(
          (item) => item.supply_name !== action.payload
        ),
        selected: {},
      };
    case "UPDATE":
      return {
        ...state,
        supplies: state.supplies.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        selected: {},
      };

    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

const SupplyContext = createContext();

const SupplyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(supplyReducer, initialState);

  return (
    <SupplyContext.Provider value={{ state, dispatch }}>
      {children}
    </SupplyContext.Provider>
  );
};

SupplyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SupplyContext, SupplyProvider };
