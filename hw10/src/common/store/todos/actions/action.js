import { addItem, delItem, getItems, setItemById } from "../../../services/services";
import { URL_DATABASE } from "../constants";
export const TODOS_DELETE = "TODOS_DELETE"

export function itemDelete(payload) {
    return { type: TODOS_DELETE, payload }
}
export const TODOS_READ = "TODOS_ADD";

export function itemsAdd(payload) {
    return { type: TODOS_READ, payload }
}
export const TODOS_UPDATE = "TODOS_UPDATE"
export function itemUpdate(payload) {
    return { type: TODOS_UPDATE, payload }
}
export const TODO_ADD = "TODO_ADD"
export function addTodoAction(payload) {
    return { type: TODO_ADD, payload }
}


/***************************************************************************/




//Create
export function addTodo(item) {
    return function (dispatch) {
        addItem(URL_DATABASE, item).then(({ data }) => dispatch(addTodoAction(data)))
    }
}
//Read
export function getTodos() {
    return function (dispatch) {
        getItems(URL_DATABASE).then(({ data }) => dispatch(itemsAdd(data)));
    }
}

//Update
export function updateTodo(item) {
    console.log(item)
    return function (dispatch) {
        setItemById(URL_DATABASE, item).then(() => {
            dispatch(itemUpdate(item))
        })
    }
}

//Delete
export function deleteTodo(id) {
    console.log(id)
    return function (dispatch) { delItem(URL_DATABASE, id).then(() => dispatch(itemDelete(id))); }
}

