import Todos from "./components/Todos/Todos";
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store/store";
import { getTodos } from "./store/todos/actions/actions";

store.dispatch(getTodos());
function App() {
  return (
    <Provider store={ store }>
      <Router >
        <Todos />
      </Router>
    </Provider>
  );
}

export default App;
