import { createReducer } from "../core";

const initState = {
  count: 0,
};

export const countReducer = createReducer((state, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + action.payload };

    case "counter/decrement":
      return { ...state, count: state.count - action.payload };
  }
}, initState);
