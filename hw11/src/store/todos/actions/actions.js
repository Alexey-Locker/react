import { api } from "../../../services/api";



export const FETCH_GET_TODOS = "FETCH_GET_TODOS";

export function getTodos() {
    return function (dispatch) {
        api.get().then(({ data }) => {
            dispatch({
                payload: data,
                type: FETCH_GET_TODOS
            })
        })
    }
}

export const FETCH_UPDATE_TODOS = "FETCH_UPDATE_TODOS";
export const FETCH_CREATE_TODOS = "FETCH_CREATE_TODOS";
export function createTodos(item) {
    if (item.id) {
        return function (dispatch) {
            api.put(item.id, item).then(({ data }) => {
                dispatch({
                    payload: item,
                    type: FETCH_UPDATE_TODOS
                })
            })
        }
    }
    return function (dispatch) {
        api.post("", item).then(({ data }) => {
            dispatch({
                payload: data,
                type: FETCH_CREATE_TODOS
            })
        })
    }
}

export const FETCH_DELETE_TODOS = "FETCH_DELETE_TODOS";

export function deleteTodos(id) {
    return function (dispatch) {
        api.delete(id).then(() => {
            dispatch({
                payload: id,
                type: FETCH_DELETE_TODOS
            })
        })
    }
}
