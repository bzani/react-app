import './App.css';
import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Code React' />
      <Todo text='Test React' />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
