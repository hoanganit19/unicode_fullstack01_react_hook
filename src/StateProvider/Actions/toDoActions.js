export const fetchTodos = (todo) => {
  return {
    type: "todos/fetch",
    payload: todo,
  };
};

export const deleteTodo = (index) => {
  return {
    type: "todos/delete",
    payload: index,
  };
};

export const completedTodo = (index, status) => {
  return {
    type: "todos/completed",
    payload: {
      index: index,
      status: status,
    },
  };
};

export const addTodo = (todo) => {
  return {
    type: "todos/add",
    payload: todo,
  };
};
