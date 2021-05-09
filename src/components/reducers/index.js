let counterId = -1;
const initState = {
  todos: [],
  currentItem: {
    text: "",
    key: ++counterId,
    isDone: false,
  },
};

export const addTodo = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newItem = [
        {
          text: action.payload,
          key: counterId++,
          isDone: false,
        },
      ];
      return {
        ...state,
        todos: state.todos.concat(newItem),
        // currentItem: cleanItem,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== action.payload),
      };
    case "EDIT_TODO":
      let selectedKey = action.payload.key;
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.key === selectedKey) {
            item.text = action.payload.text;
            item.key = action.payload.key;
            item.isDone = action.payload.isDone;
          }
          return item;
        }),
      };
    case "SET_DONE":
      console.log(state);
      // let selectedKey = action.payload.key;

      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.key === action.payload.key) {
            item.text = action.payload.text;
            item.key = action.payload.key;
            item.isDone = !action.payload.isDone;
          }
          return item;
        }),
      };
    case "DELETE_ALL":
      return { ...state, todos: [] };
    default:
      return state;
  }
};
