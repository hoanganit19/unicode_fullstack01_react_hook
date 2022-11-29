import { countReducer } from "./Reducers/countReducer";
import { toDoReducer } from "./Reducers/toDoReducer";
import { combineReducers, combineInitialStates } from "./core";
//Tạo reducer
// export const rootReducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + action.payload };

//     case "decrement":
//       return { ...state, count: state.count - action.payload };
//   }
// };

//Khởi tạo state mặc định

//const initialState = {};

const reducers = {
  //  counter: countReducer,
  todos: toDoReducer,
};

export const rootReducer = combineReducers(reducers);

export const initialState = combineInitialStates(reducers);
