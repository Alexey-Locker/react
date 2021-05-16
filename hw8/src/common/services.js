import { api } from "./api/api";

/**
 * Function gets an array of customer data
 *
 * @returns {Promise}
 */
export function getItems(url) {
  return api.get(url);
}

/**
 *  Get element by id
 * @param {String} url
 * @param {Number} userId 
 * @returns {Promise}
 */
export function getElement(url, id) {
  return api.get(url + id);
}
/**
 * Function delete item in Data Base
 * @param {integer} id - id item
 * @returns {Promise}
 *
 */
export function delItem(url, id) {
  return api.delete(url + id)
}
/**
 * Function add item in Data Base
 * @param {Object} item
 * @returns {Promise}
 */
export function addItem(url, item) {
  return api.post(url, item)
}

/**
 * The function sets the value of an element by id
 * @param {Object} item
 */
export function setItemById(url, item) {
  return api.put(url + item.id, item)

}
