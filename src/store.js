import { configureStore, createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todoReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id === action.payload),
  },
});

const store = configureStore({ reducer: todo.reducer });

export const { add, remove } = todo.actions;

export default store;
