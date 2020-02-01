import React from "react";

const Task = props => {
  const { todo, toggleCompleted } = props;

  return (
    <>
      {todo.completed ? (
        <p className="line-through">{todo.task}</p>
      ) : (
        <p>{todo.task}</p>
      )}
      <button onClick={() => toggleCompleted}>Complete!</button>
    </>
  );
};

export default Task;
