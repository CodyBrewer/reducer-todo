import {
  ADD_TODO,
  ON_CHANGE,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED
} from "../actions/types";

export const initialState = {
  todos: [
    {
      task: "Complete Reducer Todo Assignment",
      completed: false,
      id: 1
    },
    {
      task: "Watch Bojack Horseman",
      completed: false,
      id: 2
    }
  ],
  todo: ""
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_CHANGE:
      return { ...state, ...payload };
    case ADD_TODO:
      const newTodo = { task: payload, id: Date.now() };
      return { ...state, todos: [...state.todos, newTodo], todo: "" };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return !todo.completed ? todo : null;
        })
      };
    default:
      return state;
  }
};
