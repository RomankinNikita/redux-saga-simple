import { todoTypes } from "./todoActions";

const initialState = {
  loading: false,
  todos: [],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case todoTypes.SET_IS_FETCHING:
      return {
        ...state,
        loading: action.loading,
      };
    case todoTypes.FILL_TODOS:
      return {
        ...state,
        todos: action.todos,
      };
    default:
      return state;
  }
}
