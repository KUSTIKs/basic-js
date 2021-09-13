import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function clamp(min, value, max) {
  return Math.max(min, Math.min(max, value));
}

export default function minesweeper(matrix) {
  return matrix.map((row, rInd) =>
    row.map((_, cInd) => {
      let q = 0;
      q += matrix[rInd + 1]?.[cInd] ? 1 : 0;
      q += matrix[rInd - 1]?.[cInd] ? 1 : 0;
      q += matrix[rInd]?.[cInd - 1] ? 1 : 0;
      q += matrix[rInd]?.[cInd + 1] ? 1 : 0;
      q += matrix[rInd + 1]?.[cInd - 1] ? 1 : 0;
      q += matrix[rInd + 1]?.[cInd + 1] ? 1 : 0;
      q += matrix[rInd - 1]?.[cInd - 1] ? 1 : 0;
      q += matrix[rInd - 1]?.[cInd + 1] ? 1 : 0;
      return q;
    })
  );
}
