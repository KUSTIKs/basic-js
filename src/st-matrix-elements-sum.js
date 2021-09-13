import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const cols = Array(matrix[0].length)
    .fill()
    .map((_, ind) => matrix.map((row) => row[ind]));

  let sum = 0;
  for (let row = 0; row < cols.length; row++) {
    for (let col = 0; col < cols[row].length; col++) {
      const number = parseInt(cols[row][col]);
      console.log(number);
      if (number === 0) break;
      if (isNaN(number)) continue;
      sum += number;
    }
  }

  return Math.max(0, sum);
}
