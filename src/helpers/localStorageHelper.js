export function storeTodos(todos) {
  const todosString = JSON.stringify(todos);
  localStorage.setItem("todos", todosString);
}

export function getTodos() {
  const todos = JSON.parse(window.localStorage.getItem("todos"));
  if (!todos || Array.isArray(todos) === false) {
    return [];
  }
  return todos;
}

export function addTodo(todo, todos) {
  todos.push(todo);
  storeTodos(todos);
}

export function updateTodo(id, todos) {
  const updatedTodos = todos.map((value) => {
    if (value.id === id) {
      return { ...value, isCompleted: !value.isCompleted };
    }
    return value;
  });
  storeTodos(updatedTodos);
}

export function deleteTodo(id, todos) {
  const updatedTodos = todos.filter((value) => {
    if (value.id === id) {
      return false;
    }
    return true;
  });
  storeTodos(updatedTodos);
}
