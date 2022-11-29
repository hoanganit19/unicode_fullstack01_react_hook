import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowTodos from "./ShowTodos";
import AddTodo from "./AddTodo";
import "./Todos.scss";

export default function Todos() {
  return (
    <div className="container">
      <div className="todos">
        <h2>Todos App</h2>
        <ShowTodos />
        <hr />
        <AddTodo />
      </div>
    </div>
  );
}
