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
    default:
      return state;
  }
};
