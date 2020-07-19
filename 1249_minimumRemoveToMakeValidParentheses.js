/**
 * @param {string} s Input string containing letters and parentheses.
 * @return {string} Possible solution to make string valid
 * @summary Minimum Remove to Make Valid Parentheses {@link https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/}
 * @description Given a string containing letters and parentheses, return valid string by removing minimum possible parentheses.
 * Space O(1) - using 3 arrays, each of them can have up to n elements.
 * Time O(n) - where n is input length.
 */
const minRemoveToMakeValid = s => {
  const stack = [];
  const toRemove = [];
  const length = s.length;

  for (let i = 0; i < length; i++) {
    const char = s[i];

    if (s[i] === ')') {
      if (!stack.length) toRemove.push(i);
      else stack.pop();
    }
    if (s[i] === '(') {
      stack.push(i);
    }
  }

  const solution = [];
  for (let i = 0; i < length; i++) {
    if (!stack.includes(i) && !toRemove.includes(i)) solution.push(s[i]);
  }

  return solution.join('');
};
