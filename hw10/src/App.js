import { Provider } from "react-redux";
import store from "./common/store";
import { getTodos } from "./common/store/todos/actions/action";
import RouterPage from "./components/RouterPage/RouterPage";

store.dispatch(getTodos())
function App() {
  return (
    <Provider store={ store }>
      <RouterPage />
    </Provider>
  );
}

export default App;
