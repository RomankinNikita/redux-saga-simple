import { combineReducers } from "redux";

import { todoReducer as todo } from "../todos/todoReducer";

export const rootReducer = combineReducers({
  todo,
});
