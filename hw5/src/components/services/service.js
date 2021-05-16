import { URL } from './constants/constanst';

export function getElements() {
    return fetch(URL).then((res) => res.json());
}

export function updateElement(newItem) {
    return fetch(URL + newItem.id, {
        method: 'PUT',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function deleteElement(id) {
    return fetch(URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function createElement(newItem) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
