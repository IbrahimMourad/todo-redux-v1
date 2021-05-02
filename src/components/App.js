import React from "react";
import { connect } from "react-redux";

import "./App.css";
import AddTask from "./AddTask";
import TodosList from "./TodosList";
import { deleteAll } from "./actions";

const App = ({ deleteAll }) => {
  return (
    <div className="App">
      <AddTask />
      <TodosList />
      <div>
        <button onClick={deleteAll}>Delete All</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
});

export default connect(null, mapDispatchToProps)(App);
