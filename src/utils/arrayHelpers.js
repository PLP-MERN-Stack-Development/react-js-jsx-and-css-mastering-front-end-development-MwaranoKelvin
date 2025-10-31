/**
 * Removes an item from an array by its index without mutating the original array.
 * @param {Array} array - The original array.
 * @param {number} index - The index of the item to remove.
 * @returns {Array} A new array with the item removed.
 */
export function removeItemByIndex(array, index) {
  return array.filter((_, i) => i !== index);
}

/**
 * Finds an item in an array by a key-value pair.
 * @param {Array} array - The array to search.
 * @param {string} key - The key to match.
 * @param {*} value - The value to match.
 * @returns {*} The found item or undefined if not found.
 */
export function findItemByKey(array, key, value) {
  return array.find(item => item[key] === value);
}

/**
 * Updates an item in an array by a key-value pair, returning a new array.
 * @param {Array} array - The original array.
 * @param {string} key - The key to match.
 * @param {*} value - The value to match.
 * @param {Object} newItem - The new item to replace the old one.
 * @returns {Array} A new array with the updated item.
 */
export function updateItemByKey(array, key, value, newItem) {
  return array.map(item => (item[key] === value ? newItem : item));
}

/**
 * Adds an item to the end of an array, returning a new array.
 * @param {Array} array - The original array.
 * @param {*} newItem - The item to add.
 * @returns {Array} A new array with the item added.
 */
export function addItem(array, newItem) {
  return [...array, newItem];
}