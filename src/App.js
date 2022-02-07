import Navbar from "./components/Navbar";
import Accordion from "./components/Accordion"
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ItemListContainer />
        <Accordion />
      </Router>
    </div>
  );
}
