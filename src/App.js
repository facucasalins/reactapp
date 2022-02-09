import Navbar from "./components/Navbar";
// import Accordion from "./components/Accordion"
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Contador from "./components/ItemCount";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ItemListContainer/>
        <Contador stock={5} inicial={1} />
        {/* <Accordion /> */}
      </Router>
    </div>
  );
}
