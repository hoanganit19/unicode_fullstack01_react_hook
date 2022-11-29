import { createReducer } from "../core";

const initState = {
  todoList: [],
};

export const toDoReducer = createReducer((state, action) => {
  switch (action.type) {
    case "todos/add":
      return { ...state, todoList: state.todoList.concat(action.payload) };

    case "todos/fetch":
      return { ...state, todoList: action.payload };

    case "todos/delete":
      const dataDelete = [...state.todoList];
      dataDelete.splice(action.payload, 1);
      return { ...state, todoList: dataDelete };

    case "todos/completed":
      const dataCompleted = [...state.todoList];
      dataCompleted[action.payload.index].isCompleted = action.payload.status;
      return { ...state, todoList: dataCompleted };
  }
}, initState);
