export const ACTION_ADD = "ACTION_ADD";
export const ACTION_DELETE = "ACTION_DELETE"
export const ACTION_UPDATE = "ACTION_UPDATE"
export function itemDelete(id) {
    return { type: ACTION_DELETE, payload: id }
}
export function itemAdd(title) {
    return { type: ACTION_ADD, payload: title }
}
export function itemUpdate(item) {
    return { type: ACTION_UPDATE, payload: { ...item, isDone: !item.isDone } }
}