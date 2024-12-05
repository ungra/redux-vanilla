import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ todos }) {
  const { id } = useParams();
  const todo = todos.find((t) => t.id === parseInt(id));
  return (
    <>
      <h1>{todo?.text}</h1>
      <h2>Create at: {todo?.id} </h2>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { todos: state };
}

export default connect(mapStateToProps)(Detail);
