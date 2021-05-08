import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "./actions";

const Task = ({ todo, idx, isDone, deleteTodo, editTodo, selected }) => {
  // console.log(selected.text, "text");

  // console.log(todo, "todoooooooo");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid #ffffffa6",
        padding: "5px",
        margin: "5px",
      }}
    >
      <input
        type="text"
        value={selected.text}
        onChange={(e) =>
          editTodo({ text: e.target.value, key: idx, isDone: isDone })
        }
      />
      <button onClick={() => deleteTodo(idx)}>X</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
  editTodo: (key) => dispatch(editTodo(key)),
});

const mapStateToProps = (state, ownProps) => ({
  selected: state.todos[ownProps.idx],
});
export default connect(mapStateToProps, mapDispatchToProps)(Task);
