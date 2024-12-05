import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   console.log(action);
//   switch (action.type) {
//     case addTodo.type:
//       return [...state, { text: action.payload, id: Date.now() }];
//     case deleteTodo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  });
  builder.addCase(deleteTodo, (state, action) =>
    state.filter((todo) => todo.id === action.payload)
  );
});

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
