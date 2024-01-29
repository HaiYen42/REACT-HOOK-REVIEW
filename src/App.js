import logo from "./logo.svg";
import "./App.css";
import UseReduce from "./components/UseReduce";
import UseMemo from "./components/UseMemo";
import UseStateToDoList from "./components/UseStateToDoList";
import TwoWayBinding from "./components/TwoWayBinding";
import DomEvent from "./components/DomEvent-CallAPI";
import { useState } from "react";
import UseRef from "./components/UseRef";
import ToDoApp from "./components/ToDoApp-Reducer/ToDoApp";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <UseStateToDoList /> */}

      {/* <TwoWayBinding/> */}
      <div style={{ padding: 20 }}>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Toogle
        </button>
        {/* {show && <DomEvent />} */}
        {/* {show && <UseRef />} */}
        {/* {show && <UseMemo/>} */}
        {/* {show && <UseReduce />} */}
        {show && <ToDoApp />}
      </div>
    </div>
  );
}

export default App;
