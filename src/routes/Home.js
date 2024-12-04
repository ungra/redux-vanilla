import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <>
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write a todo"
          value={text}
          onChange={onChange}
        ></input>
        <button>Add</button>
      </form>
    </>
  );
}
