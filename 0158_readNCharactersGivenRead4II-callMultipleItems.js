/**
 * @typedf read4
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
const solution = read4 => {
  const temp = [];

  /**
   * @param {character[]} buf Destination buffer.
   * @param {number} n Number of characters to read.
   * @return {number} The number of actual characters read.
   * @summary Read N Characters Given Read4 II - Call multiple times {@link https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/}
   * @description
   * Space O() -
   * Time O() -
   */
  return (buf, n) => {
    while (n) {
      if (!temp.length) read4(temp);
      if (!temp.length) return;
      buf.push(temp.shift());
      n--;
    }
  };
};
