import { all } from "redux-saga/effects";
import { runTodoFetching } from "../todos/todoSaga";

export function* rootSaga() {
  try {
    yield all([runTodoFetching()]);
  } catch (error) {
    console.log("→ error caught", error);
  }
}
