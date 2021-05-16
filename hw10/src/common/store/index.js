import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducerTodos from "./todos/reducer/reducerTodos"

const rootReducer = combineReducers({ todos: reducerTodos });

const enchancer = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, enchancer)

export default store;