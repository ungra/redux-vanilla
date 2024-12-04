import { createStore } from "redux";

const Add = document.getElementById("Add");
const Minus = document.getElementById("Minus");
const Number = document.querySelector("span");

Number.innerText = "0";

const countModifirer = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifirer);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

const onChange = () => {
  Number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

Add.addEventListener("click", handleAdd);
Minus.addEventListener("click", handleMinus);
