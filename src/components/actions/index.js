export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = (key) => ({
  type: "DELETE_TODO",
  payload: key,
});

export const editTodo = (todo) => ({
  type: "EDIT_TODO",
  payload: todo,
});

export const setDone = (obj) => ({
  type: "SET_DONE",
  payload: obj,
});

export const deleteAll = () => ({
  type: "DELETE_ALL",
});
