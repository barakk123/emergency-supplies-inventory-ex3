import Header from "./components/Header";
import Table from "./components/Table";
import { SupplyProvider } from "./contexts/SupplyContext";

const App = () => {
  return (
    <SupplyProvider>
      <Header />      
      <Table />
    </SupplyProvider>
  );
};

export default App;
