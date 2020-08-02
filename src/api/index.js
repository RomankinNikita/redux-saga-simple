const ROOT_URI = "https://jsonplaceholder.typicode.com";

export const api = new (class Api {
  fetchTodos() {
    return fetch(`${ROOT_URI}/todos?_limit=5`);
  }
})();
