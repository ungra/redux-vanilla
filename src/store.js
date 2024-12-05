import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = createReducer([], (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  });
  builder.addCase(deleteTodo, (state, action) =>
    state.filter((todo) => todo.id === action.payload)
  );
});

const store = configureStore({ reducer: reducer });

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
