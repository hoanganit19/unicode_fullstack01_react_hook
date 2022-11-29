import React from "react";
import ToDos from "./Effect/ToDos";
//import Counter from "./State/Counter/Counter";
import Login from "./State/Login/Login";
import RefDemo from "./Refs/RefDemo";
import Player from "./Player/Player";
import ContextDemo from "./Context/ContextDemo";
import Main from "./Context/Main";
//import Counter from "./Reducer/Counter";
import DemoSetState from "./Reducer/DemoSetState";
import StateProvier from "./StateProvider/StateProvier";
import Home from "./Pages/Home";
import Todos from "./Pages/Todos/Todos";
import Counter from "./Memo/Counter";
import Products from "./Memo/Products";

function App() {
  return (
    <StateProvier>
      <Counter />
    </StateProvier>
  );
}

export default App;
