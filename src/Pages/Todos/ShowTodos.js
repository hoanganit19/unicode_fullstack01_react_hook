import React, { useContext, useEffect } from "react";
import { StateContext } from "../../StateProvider/StateProvier";
import config from "../../Config.json";
import TodoItem from "./TodoItem";
import {
  fetchTodos,
  deleteTodo,
  completedTodo,
} from "../../StateProvider/Actions/toDoActions";

const { SERVER_API } = config;

export default function ShowTodos() {
  const { state, dispatch } = useContext(StateContext);
  const { todoList } = state.todos;
  const getTodos = async () => {
    const res = await fetch(`${SERVER_API}/todos`);
    const data = await res.json();
    dispatch(fetchTodos(data));
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleDeleteTodo = async (id) => {
    if (window.confirm("Bạn có chắc")) {
      const res = await fetch(`${SERVER_API}/todos/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const index = todoList.findIndex((todo) => todo.id == id);

        dispatch(deleteTodo(index));
      }
    }
  };

  const handleCompletedTodo = async (id) => {
    const index = todoList.findIndex((todo) => todo.id == id);
    const status = todoList[index].isCompleted ? false : true;
    const res = await fetch(`${SERVER_API}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: status }),
    });

    if (res.ok) {
      dispatch(completedTodo(index, status));
    }
  };

  //console.log(todoList);

  return (
    <div className="todos__list">
      {todoList.length > 0 &&
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDeleteTodo={(e) => {
              e.preventDefault();
              handleDeleteTodo(todo.id);
            }}
            onCompletedTodo={() => {
              handleCompletedTodo(todo.id);
            }}
          />
        ))}
    </div>
  );
}
