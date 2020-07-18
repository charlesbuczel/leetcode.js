/**
 * @param {string} s String containing parentheses () [] {}.
 * @return {boolean} Is the input string valid.
 * @summary Valid Parentheses {@link https://leetcode.com/problems/valid-parentheses/}
 * @description Return true if opening and closing parentheses match, example ({[]}).
 * Space O(n) - put up to n characters on stack.
 * Time O(n) - iterate over n characters of input.
 */
const isValid = s => {
  const stack = [];

  for (let index = 0; index < s.length; index++) {
    let char = s[index];

    if (['{', '(', '['].includes(char)) {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (!top) return false;
      if (char === ')' && !(top === '(')) return false;
      if (char === ']' && !(top === '[')) return false;
      if (char === '}' && !(top === '{')) return false;
    }
  }

  return !stack.length;
};
