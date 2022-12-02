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
import CounterLimit from "./Effect/CounterLimit";
import Video from "./Refs/Video/Video";
import Form from "./React18/Form/Form";
import Search from "./React18/Search/Search";
import Search2 from "./React18/Search/Search2";
import Welcome from "./Welcome";

function App() {
  return (
    <StateProvier>
      <Welcome />
    </StateProvier>
  );
}

export default App;
