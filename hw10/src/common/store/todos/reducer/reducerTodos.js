import { TODOS_READ, TODOS_DELETE, TODOS_UPDATE, TODO_ADD } from "../actions/action";

const INITIAL_STATE = {
    list: []
}

export default function reducerTodos(state = INITIAL_STATE, { type, payload }) {
    const list = state.list;
    switch (type) {
        case TODO_ADD:
            return { list: [...list, payload] }
        case TODOS_READ:
            return { list: [...payload] }
        case TODOS_DELETE:
            return { list: list.filter((el) => el.id !== payload ? el : null) }
        case TODOS_UPDATE:
            return { list: list.map((el) => el.id !== payload.id ? el : payload) }
        default:
            return state;
    }
}