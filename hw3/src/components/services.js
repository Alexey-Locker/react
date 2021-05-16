import { apiDB } from "./variabels";

/**
 * Function gets an array of customer data
 *
 * @returns {Promise}
 */
export async function getItems() {
  return fetch(apiDB).then((res) => res.json());
}

/**
 * Function delete item in Data Base
 * @param {integer} id - id item
 * @returns {Promise}
 *
 */
export function delItem(id) {
  return fetch(apiDB + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
/**
 * Function add item in Data Base
 * @param {Object} item
 * @returns {Promise}
 */
export function addItem(item) {
  return fetch(apiDB, {
    method: "POST",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  }).then((resp) => resp.json());
}

/**
 * The function sets the value of an element by id
 */
export function setItemId(item) {
  return fetch(apiDB + item.id, {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
}
