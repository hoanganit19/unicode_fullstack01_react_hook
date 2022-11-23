import React, { useReducer } from "react";

export default function Counter() {
  /*
  Khởi tạo state mặc định
  */
  const initialState = {
    count: 0,
    posts: [],
    msg: "",
  };
  /*
  Định nghĩa Reducer
  Reducer là 1 function
  Xử lý các tác vụ cập nhật state
  */
  const countReducer = (state, action) => {
    switch (action) {
      case "increment":
        return { ...state, count: state.count + 1 };

      case "decrement":
        return { ...state, count: state.count - 1 };

      default:
        throw new Error(`Không tồn tại action: ${action}`);
    }
  };

  /*
  Gọi hook useReducer
  */
  const [state, dispatch] = useReducer(countReducer, initialState);

  /*
  Gọi hàm dispatch() khi thực hiện action
  */
  const handleIncrement = () => {
    dispatch("increment");
  };

  const handleDecrement = () => {
    dispatch("decrement");
  };

  console.log(state);

  const { count } = state;

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
