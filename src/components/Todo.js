function Todo(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>Click here to delete</span>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;