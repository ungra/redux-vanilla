const Add = document.getElementById("Add");
const Minus = document.getElementById("Minus");
const Number = document.querySelector("span");

let count = 0;

Number.innerText = count;

const handleAdd = () => {
  count = count + 1;
  updateNumber();
};

const handleMinus = () => {
  count = count - 1;
  updateNumber();
};

const updateNumber = () => {
  Number.innerText = count;
};

Add.addEventListener("click", handleAdd);
Minus.addEventListener("click", handleMinus);
