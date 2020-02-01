import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import Task from "./Task";

const TaskList = () => {
  const [{ todo, todos }, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      {todos.map(todo => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TaskList;
