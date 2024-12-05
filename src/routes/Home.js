import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ todos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
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
      <ul>{JSON.stringify(todos)}</ul>
    </>
  );
}
function mapStateToProps(state, ownProps) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addTodo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
