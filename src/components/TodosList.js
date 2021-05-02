import React from "react";
import { connect } from "react-redux";

import Task from "./Task";

const TodosList = ({ todos }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {todos.map((todo, i) => (
        <Task key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
export default connect(mapStateToProps)(TodosList);
