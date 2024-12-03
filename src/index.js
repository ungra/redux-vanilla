import { createStore } from "redux";

const Add = document.getElementById("Add");
const Minus = document.getElementById("Minus");
const Number = document.querySelector("span");

const countModifirer = (count = 0) => {
  return count;
};

const countStore = createStore(countModifirer);
