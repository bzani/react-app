function Modal(props) {
  
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  // we can use eg. 'props.onCancel' directly
  // instead of calling 'cancelHandler' as onClick arg
  // as we see for Backdrop jsx
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
