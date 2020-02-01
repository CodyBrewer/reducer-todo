import { ADD_TODO, ON_CHANGE, TOGGLE_COMPLETE } from "../actions/types";

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
    case TOGGLE_COMPLETE:
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
    default:
      return state;
  }
};
