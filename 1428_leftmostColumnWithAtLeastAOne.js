/**
 * @typedef {Object} BinaryMatrix
 * This is the BinaryMatrix's API interface.
 * You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix Class to interface with binary matrix.
 * @return {number} Index of leftmost column where '1' exists, or '-1' if none.
 * @summary Leftmost Column with atLeast a One {@link https://leetcode.com/problems/leftmost-column-with-at-least-a-one/}
 * @description Given a class to interface with binary matrix (where rows are ordered in ascending order), return leftmost column that contains a '1' or -1 if none.
 * Space O(R + C) - where R is number of rows, C is number of columns.
 * Time O(1) - always have 2 variables.
 */
const leftMostColumnWithOne = binaryMatrix => {
  const [rows, columns] = binaryMatrix.dimensions();

  let row = 0;
  let col = columns - 1;

  while (row < rows && col >= 0) {
    if (binaryMatrix.get(row, col)) col--;
    else row++;
  }

  return col === columns - 1 ? -1 : col + 1;
};
