import { createReducer } from "../core";

const initState = {
  todo: [],
};

export const toDoReducer = createReducer((state, action) => {
  switch (action.type) {
    case "todos/add":
      return { ...state, todo: state.todo.concat(action.payload) };
  }
}, initState);
