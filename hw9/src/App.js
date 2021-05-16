import { Provider } from 'react-redux';
import './App.css';
import store from './components/store/store';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <Provider store={ store }>
      <TodoList />
      <Form />
    </Provider>
  );
}

export default App;
