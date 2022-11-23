import React, { useReducer } from "react";

export default function DemoSetState() {
  const initialState = {
    msg: "",
    posts: [],
    count: 0,
  };

  const demoReducer = (state, newState) => {
    //console.log(state, newState);
    const data = { ...state };
    if (Object.keys(newState).length) {
      Object.keys(newState).forEach((key) => {
        data[key] = newState[key];
      });
    }

    return data; //giá trị mới
  };

  const [state, setState] = useReducer(demoReducer, initialState);

  const handleClick = () => {
    setState({
      msg: "Unicode",
      count: state.count + 1,
    });
  };

  const { count, msg } = state;

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>{msg}</h2>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

/*
Xây dựng hàm setState() giống class component

*/
