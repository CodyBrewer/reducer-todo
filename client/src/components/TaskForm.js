import React from "react";

const TaskForm = props => {
  const { todo, onTodoChange, addTodo } = props;

  return (
    <form onSubmit={addTodo}>
      <label htmlFor="addTodo">New Todo</label>
      <input
        type="text"
        name="todo"
        id="todo"
        value={todo}
        onChange={onTodoChange}
        placeholder="...todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
