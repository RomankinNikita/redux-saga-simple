const FETCH_TODOS_ASYNC = "FETCH_TODOS_ASYNC";
const fetchTodosAsync = () => ({
  type: FETCH_TODOS_ASYNC,
});

const SET_IS_FETCHING = "SET_IS_FETCHING";
const setIsFetching = (loading) => ({
  type: SET_IS_FETCHING,
  loading,
});

const FILL_TODOS = "FILL_TODOS";
const fillTodos = (todos) => ({
  type: FILL_TODOS,
  todos,
});

export const todoTypes = {
  FETCH_TODOS_ASYNC,
  SET_IS_FETCHING,
  FILL_TODOS,
};

export const todoActions = {
  fetchTodosAsync,
  setIsFetching,
  fillTodos,
};
