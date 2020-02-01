import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { ON_CHANGE, ADD_TODO } from "../actions/types";

const TaskList = () => {
  const [{ todo, todos }, dispatch] = useReducer(todoReducer, initialState);

  const onTodoChange = e => {
    dispatch({
      type: ON_CHANGE,
      payload: { [e.target.name]: e.target.value }
    });
  };

  const addTodo = e => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
  };

  const toggleCompleted = (id, complete) => e => {
    e.preventDefault();
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: { id, complete }
    });
  };

  return (
    <div>
      {todos.map(todo => (
        <Task key={todo.id} todo={todo} />
      ))}
      <TaskForm
        todo={todo}
        onTodoChange={onTodoChange}
        addTodo={addTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
};

export default TaskList;
