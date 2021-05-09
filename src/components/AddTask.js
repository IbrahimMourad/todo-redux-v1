import React from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";

import "./AddTask.css";

const Task = ({ text, addTodo }) => {
  const handleChange = (e) => {
    return e.target.value;
  };
  const handleSubmit = (e) => {
    const val = document.querySelector("#my-input");
    e.preventDefault();
    addTodo(val.value);
    val.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-item" style={{ backgroundColor: "#9ddfd3" }}>
        <input
          className="add-task"
          id="my-input"
          type="text"
          name="todo"
          value={text}
          placeholder="Enter your todo..."
          onChange={handleChange}
          autocomplete="off"
        />
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});
const mapStateToProps = ({ text }) => ({
  text,
});
export default connect(mapStateToProps, mapDispatchToProps)(Task);
