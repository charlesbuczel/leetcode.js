let validExpressions, minimumRemoved, expression, input, length;

/**
 * @param {string} s String containing parentheses ().
 * @return {string[]} List of all possible results.
 * @summary Remove Invalid Parentheses {@link https://leetcode.com/problems/remove-invalid-parentheses/}
 * @description Remove the minimum number of invalid parentheses in order to make the input string valid.
 * Space O(n) - on recurrsion maximum call stack depth will be n.
 * Time O(2^n) - each step can generate up to two more paths (remoeve or keep parentheses).
 */
const removeInvalidParentheses = s => {
  validExpressions = {};
  minimumRemoved = Number.MAX_SAFE_INTEGER;
  expression = [];
  input = s;
  length = input.length;

  let openRemoveCount = 0;
  let closeRemoveCount = 0;
  for (let index = 0; index < length; index++) {
    if (s[index] === '(') openRemoveCount++;
    else if (s[index] === ')') {
      if (openRemoveCount === 0) closeRemoveCount++;
      if (openRemoveCount > 0) openRemoveCount--;
    }
  }

  removeMinimumParentheses(0, 0, 0, openRemoveCount, closeRemoveCount);

  return Object.keys(validExpressions);
};

/**
 * @param {number} i Current index.
 * @param {number} openCount Number of open parentheses '(' for currently tested solution.
 * @param {number} closeCount Number of close parentheses ')' for currently tested solution.
 * @param {number} minOpen Remaining count of open parentheses to be removed for optimal solution.
 * @param {number} minClose Remaining count of close parentheses to be removed for optimal solution.
 * @return {undefined} Actual solution is written to validExpressions.
 */
const removeMinimumParentheses = (i, openCount, closeCount, minOpen, minClose) => {
  if (i === length && !minOpen && !minClose) {
    const solution = expression.join('');
    validExpressions[solution] = true;
  } else if (i < length) {
    const char = input[i];

    if (char === '(' && minOpen > 0) {
      removeMinimumParentheses(i + 1, openCount, closeCount, minOpen - 1, minClose);
    }
    if (char === ')' && minClose > 0) {
      removeMinimumParentheses(i + 1, openCount, closeCount, minOpen, minClose - 1);
    }

    expression.push(char);

    if (char !== '(' && char !== ')') {
      removeMinimumParentheses(i + 1, openCount, closeCount, minOpen, minClose);
    } else if (char === '(') {
      removeMinimumParentheses(i + 1, openCount + 1, closeCount, minOpen, minClose);
    } else if (closeCount < openCount) {
      removeMinimumParentheses(i + 1, openCount, closeCount + 1, minOpen, minClose);
    }

    expression.pop();
  }
};
