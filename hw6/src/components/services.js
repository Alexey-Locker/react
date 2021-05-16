import { api } from "../common/api/api";

/**
 * Function gets an array of customer data
 *
 * @returns {Promise}
 */
export async function getItems() {
  return api.get();
}

/**
 * Function delete item in Data Base
 * @param {integer} id - id item
 * @returns {Promise}
 *
 */
export function delItem(id) {
  return api.delete(`${id}`)
}
/**
 * Function add item in Data Base
 * @param {Object} item
 * @returns {Promise}
 */
export function addItem(item) {
  return api.post("", item)
}

/**
 * The function sets the value of an element by id
 * @param {Object} item
 */
export function setItemById(item) {
  return api.put(`${item.id}`, {
    data: item
  })

}
