import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

// must use capital letter for component function
function Todo(props) {

    // sets initial state of modal as 'false' (closed)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // calling with () in 'onClick' below would
    //   make the function to be executed whenever
    //   javascript evaluates the html code there 
    //   (component return block)
    // to execute when the element is clicked then
    //   we should call it simply by function name
    function deleteHandler() {
        setModalIsOpen(true);
    }

    // {modalIsOpen && <Modal />}
    //   .. is shorter for
    // {modalIsOpen ? <Modal /> : null}
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>Click here to delete</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {modalIsOpen && <Modal />}
        {modalIsOpen && <Backdrop />}
      </div>
    </div>
  );
}

export default Todo;
