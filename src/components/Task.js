import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "./actions";

const Task = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
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
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
      <button onClick={() => deleteTodo(idx)}>X</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
  editTodo: (key) => dispatch(editTodo(key)),
});

const mapStateToProps = (state) => ({
  text: state.text,
  selected: state.selected,
});
export default connect(mapStateToProps, mapDispatchToProps)(Task);
