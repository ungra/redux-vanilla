import { createStore } from "redux";

const Add = document.getElementById("Add");
const Minus = document.getElementById("Minus");
const Number = document.querySelector("span");

Number.innerText = "0";

const ADD = "ADD";
const MINUS = "MINUS";

const countModifirer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifirer);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

const onChange = () => {
  Number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

Add.addEventListener("click", handleAdd);
Minus.addEventListener("click", handleMinus);
