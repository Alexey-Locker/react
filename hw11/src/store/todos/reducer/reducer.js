import { FETCH_CREATE_TODOS, FETCH_DELETE_TODOS, FETCH_GET_TODOS, FETCH_UPDATE_TODOS } from "../actions/actions";


export default function reducer(state = { list: [] }, { payload, type }) {

    switch (type) {
        case FETCH_GET_TODOS:
            return { list: [...payload] }
        case FETCH_UPDATE_TODOS:
            return { list: [...state.list.filter(el => el.id !== payload.id), payload] };
        case FETCH_DELETE_TODOS:
            return { list: state.list.filter(el => el.id !== payload) };
        case FETCH_CREATE_TODOS:
            return { list: [...state.list, payload] };
        default:
            return state;
    }

}