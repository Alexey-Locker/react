import { ACTION_ADD, ACTION_DELETE, ACTION_UPDATE } from "../actions/actions";

const INITIAL_STATE = {
    list: [
        {
            id: 0,
            title: "New Item",
            isDone: false

        }
    ]
}

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    const list = state.list.sort((a, b) => a.id - b.id)
    const lastItem = list.length - 1;

    switch (type) {
        case ACTION_ADD:
            return { ...state, list: [...list, { id: list[lastItem].id + 1, title: payload, isDone: false }] }
        case ACTION_DELETE:
            return { ...state, list: list.filter(el => el.id !== payload ? true : false) };
        case ACTION_UPDATE:
            return { ...state, list: list.map(el => el.id === payload.id ? { ...el, isDone: payload.isDone } : el) }
        default:
            return state;
    }
}