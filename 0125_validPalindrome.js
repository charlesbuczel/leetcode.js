/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @param {strng} s string to check if palindrome
 * @return {boolean} True if string is a palindrome (only counting alphanumeric chars).
 * @summary Valid palindrome {@link https://leetcode.com/problems/valid-palindrome/}
 * @description Given an input string, return true if its a palindrome (non-alphanumeric chars excluded);
 * Space O(1) - No extra space (few variables).
 * Time O(n) - Traverse over the input string.
 */
const isPalindrome = s => {
  if (!s) return true;

  const isAlphanumeric = c =>
    (c >= 'a'.charCodeAt() && c <= 'z'.charCodeAt()) || (c >= '0'.charCodeAt() && c <= '9'.charCodeAt());

  let left = 0;
  let right = s.length - 1;
  const mid = Math.ceil(s.length / 2);

  while (left <= right) {
    const leftChar = s[left].toLowerCase();
    const rightChar = s[right].toLowerCase();

    const isLeftValid = isAlphanumeric(leftChar.charCodeAt());
    const isRightValid = isAlphanumeric(rightChar.charCodeAt());

    if (isLeftValid && isRightValid && leftChar !== rightChar) return false;

    if (!isLeftValid && isRightValid) left++;
    else if (isLeftValid && !isRightValid) right--;
    else {
      left++;
      right--;
    }
  }

  return true;
};
