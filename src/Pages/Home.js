import React, { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvier";
export default function Home() {
  const { state, dispatch } = useContext(StateContext);

  const { count } = state.counter;

  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 2,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 1,
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
