import React, { useContext, useRef, useEffect } from "react";
import { StateContext } from "../../StateProvider/StateProvier";
import { v4 as uniqueId } from "uuid";
import config from "../../Config.json";
import { addTodo as addTodoAction } from "../../StateProvider/Actions/toDoActions";

const { SERVER_API } = config;

export default function AddTodo() {
  const { state, dispatch } = useContext(StateContext);
  const todoRef = useRef();

  useEffect(() => {
    todoRef.current.focus();
  }, []);

  const addTodo = async (todo) => {
    const res = await fetch(`${SERVER_API}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (res.ok) {
      dispatch(addTodoAction(todo));
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const doName = todoRef.current.value;
    console.log(doName);

    const todo = {
      id: uniqueId(),
      name: doName,
      isCompleted: false,
    };

    addTodo(todo);

    todoRef.current.value = "";
  };

  return (
    <form onSubmit={handleAdd}>
      <div className="input-group">
        <input
          type={"text"}
          className="form-control"
          ref={todoRef}
          placeholder="Name..."
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
