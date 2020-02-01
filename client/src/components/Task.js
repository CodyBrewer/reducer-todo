import React from "react";

const Task = props => {
  const { todo } = props;

  return <p>{todo.task}</p>;
};

export default Task;
