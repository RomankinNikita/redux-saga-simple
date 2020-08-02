import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "./todos/todoActions";

function App() {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.todo);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {todos && todos.length ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      ) : (
        <p>There are no todos...</p>
      )}

      <button
        onClick={() => {
          dispatch(todoActions.fetchTodosAsync());
        }}
      >
        FETCH TODOS
      </button>
    </div>
  );
}

export default App;
