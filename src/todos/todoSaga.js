import { todoActions, todoTypes } from "./todoActions";
import { call, apply, take, put } from "redux-saga/effects";
import { api } from "../api";

function* fetchTodos() {
  const response = yield call(api.fetchTodos);
  const todos = yield apply(response, response.json);

  return todos;
}
export function* runTodoFetching() {
  while (true) {
    yield take(todoTypes.FETCH_TODOS_ASYNC);
    yield put(todoActions.setIsFetching(true));

    const todos = yield call(fetchTodos);

    yield put(todoActions.fillTodos(todos));
    yield put(todoActions.setIsFetching(false));
  }
}
