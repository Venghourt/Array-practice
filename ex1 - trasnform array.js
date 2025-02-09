/**
 * Transforms a list of numbers into a list of objects.
 * @param {array} listOfNumbers - a list of numbers
 * @returns {array} a list of objects
 */
function transformToObjects(listOfNumbers) {
  let result = listOfNumbers.map(num => ({ val: num }));
  return result;
}

// --------------------------------------------------------
// TESTS ZONE
// --------------------------------------------------------

console.log(JSON.stringify(transformToObjects([1, 2, 3]))); // Should return [{"val":1},{"val":2},{"val":3}]
