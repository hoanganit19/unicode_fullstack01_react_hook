export const createReducer = (reducer, initialState) => {
  return {
    reducer,
    initialState,
  };
};

export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const newState = {};

    for (let key in reducers) {
      newState[key] = reducers[key].reducer(state[key], action);
    }

    return newState;
  };
};

export const combineInitialStates = (reducers) => {
  const initialState = {};
  for (let key in reducers) {
    initialState[key] = reducers[key].initialState;
  }

  return initialState;
};
