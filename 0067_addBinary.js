/**
 * @param {string} a String representing a binary number.
 * @param {string} b String representing a binary number.
 * @return {string} String representing a binary number being sum of both parameters.
 * @summary Add Binary {@link https://leetcode.com/problems/add-binary/}
 * @description Given a two binary numbers represented by a string, return their sum.
 * Space O(MaxOf(A, B)) - keeping the answer in separate string/array - A, B being length of input strings.
 * Time O(MaxOf(A, B)) - for amount of steps in iteration - A, B being length of input strings.
 */
const addBinary = (a, b) => {
  const binaryA = a.split('').reverse().join('');
  const binaryB = b.split('').reverse().join('');

  const length = Math.max(binaryA.length, binaryB.length);
  const result = [];
  let carryOver = 0;

  for (let index = 0; index < length; index++) {
    let numberA = +binaryA[index] || 0;
    let numberB = +binaryB[index] || 0;

    let sum = numberA + numberB + carryOver;
    result.unshift(sum % 2);

    carryOver = sum > 1 ? 1 : 0;
  }

  if (carryOver) result.unshift(carryOver);

  return result.join('');
};

// onliner using 0b notation and BigInt
// const addBinary = (a, b) => (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
