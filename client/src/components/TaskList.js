import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { ON_CHANGE } from "../actions/types";

const TaskList = () => {
  const [{ todo, todos }, dispatch] = useReducer(todoReducer, initialState);

  const onTodoChange = e => {
    dispatch({
      type: ON_CHANGE,
      payload: { [e.target.name]: e.target.value }
    });
  };

  return (
    <div>
      {todos.map(todo => (
        <Task key={todo.id} todo={todo} />
      ))}
      <TaskForm onTodoChange={onTodoChange} todo={todo} />
    </div>
  );
};

export default TaskList;
