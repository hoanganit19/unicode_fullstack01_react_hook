import React, { useReducer, createContext } from "react";
import { rootReducer, initialState } from "./store";

export const StateContext = createContext();

export default function StateProvier({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
