// Libraries
import {
  useState,
} from "react";

// Contexts
import MyContext from "./context/MyContext";

// Components
import Selector from "./components/Selector";
import DisplayWrapper from "./components/DisplayWrapper";
import FetchSample from "./components/FetchSample";


function App() {
  const [ state, setState ] = useState("");

  return (
    <FetchSample />
  );
}

export default App;
