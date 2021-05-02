const initState = {
  todos: [],
  text: "",
  selected: undefined,
};

export const addTodo = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return { ...state, text: action.payload };
    case "ADD_TODO":
      return { ...state, todos: state.todos.concat(action.payload), text: "" };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        text: state.todos[action.payload],
        selected: action.payload,
      };

    case "DELETE_ALL":
      return { ...state, todos: [], text: "" };
    default:
      return state;
  }
};
