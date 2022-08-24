import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Code React' />
      <Todo text='Test React' />
    </div>
  );
}

export default App;
