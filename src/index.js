import { createStore } from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const AddTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const DeleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return [];
  }
};

const store = createStore(reducer);

const dispatchAddTodo = (text) => {
  if (text === "") return;
  store.dispatch(AddTodo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(DeleteTodo(id));
};

const paintTodos = () => {
  const todos = store.getState();
  ul.innerText = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchDeleteTodo);
    btn.innerText = "Delete";
    li.id = todo.id;
    li.innerText = todo.text;
    input.value = "";
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintTodos);

const onSubmit = (e) => {
  e.preventDefault();
  if (input.value === "") return;
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);
