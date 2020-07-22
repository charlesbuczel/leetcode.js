/**
 * @param {string} num1 First number to be added, represented as string.
 * @param {string} num2 Second number to be added, represented as string.
 * @return {string} String representing sum of num1 and num2.
 * @summary Add Strings {@link https://leetcode.com/problems/add-strings/}
 * @description Given two numbers represented as strings, return sum of them. No built-in library for handling big numbers allowed.
 * Space O(n) - Where n is Math.max(num1.length, num2.length).
 * Time O(n) - Where n is Math.max(num1.length, num2.length).
 */
const addStrings = (num1, num2) => {
  const answer = [];

  let carryOver = 0;
  let index1 = num1.length - 1;
  let index2 = num2.length - 1;

  while (index1 >= 0 || index2 >= 0) {
    const n1 = index1 >= 0 ? +num1[index1] : 0;
    const n2 = index2 >= 0 ? +num2[index2] : 0;

    const sum = n1 + n2 + carryOver;

    carryOver = sum > 9 ? 1 : 0;
    answer.unshift(sum % 10);

    index1--;
    index2--;
  }

  if (carryOver) answer.unshift(1);

  return answer.join('');
};
