// must use capital letter for component function
function Todo(props) {

    // calling with () in 'onClick' below would
    //   make the function to be executed whenever
    //   javascript evaluates the html code there 
    //   (component return block)
    // to execute when the element is clicked then
    //   we should call it simply by function name
    function deleteHandler() {
        console.log("clicked!");
        console.log(props.text);
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>Click here to delete</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
