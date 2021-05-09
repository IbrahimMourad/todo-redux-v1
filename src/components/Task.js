import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo, setDone } from "./actions";
import "./Task.css";
const Task = ({ idx, isDone, deleteTodo, editTodo, selected, setDone }) => {
  // console.log(selected.text, "text");

  // console.log(todo, "todoooooooo");
  return (
    <div className="todo-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={selected.isDone}
        onChange={() => setDone({ key: idx, isDone: isDone })}
      />
      <input
        className="task-item"
        type="text"
        autocomplete="off"
        value={selected.text}
        onChange={(e) =>
          editTodo({ text: e.target.value, key: idx, isDone: isDone })
        }
      />
      <button className="delete-btn" onClick={() => deleteTodo(idx)}>
        <i class="fas fa-trash"></i>
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
  editTodo: (todo) => dispatch(editTodo(todo)),
  setDone: (obj) => dispatch(setDone(obj)),
});

const mapStateToProps = (state, ownProps) => ({
  selected: state.todos[ownProps.idx],
});
export default connect(mapStateToProps, mapDispatchToProps)(Task);
