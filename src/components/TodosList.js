import React from "react";
import { connect } from "react-redux";

import Task from "./Task";
import "./TodosList.css";

const TodosList = ({ todos }) => {
  return (
    <div className=" list">
      {todos.map((todo, idx) => {
        return (
          <Task
            key={todo.key}
            todo={todo.text}
            idx={idx}
            isDone={todo.isDone}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodosList);
