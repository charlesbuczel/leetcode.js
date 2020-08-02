/**
 * @param {number[][]} a Sparse matrix.
 * @param {number[][]} b Sparse matrix.
 * @return {number[]} Indices of two numbers from 'nums' that add up to 'target'
 * @summary Sparse Matrix Multiplication {@link https://leetcode.com/problems/sparse-matrix-multiplication/}
 * @description Given two sparse matrices, return their multiplication.
 * Space O(n*m) - rows of a and cols of b.
 * Time O(n^3) - with optimization for skipping zeros should skip most of the iteration.
 */
const multiply = (a, b) => {
  const rows = a.length;
  const columns = b[0].length;

  const c = Array(rows);
  for (let index = 0; index < rows; index++) c[index] = Array(columns).fill(0);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 0) continue;

      for (let k = 0; k < b[0].length; k++) {
        if (b[j][k] === 0) continue;
        c[i][k] += a[i][j] * b[j][k];
      }
    }
  }

  return c;
};
