const zeroToNine = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
};

const tenToNineteen = {
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
};

const twentyToNinety = {
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety',
};

const BILLION = 1000000000;
const MILLION = 1000000;
const THOUSAND = 1000;
const HUNDRED = 100;
const TEN = 10;

const three = num => {
  const solution = [];

  const hundreds = parseInt(num / HUNDRED);

  if (hundreds >= 1) {
    solution.push(zeroToNine[hundreds] + ' Hundred');
    num = num - hundreds * HUNDRED;
  }

  if (num && num < 20) {
    solution.push(zeroToNine[num] || tenToNineteen[num]);
  } else {
    const tens = parseInt(num / TEN);
    if (tens) solution.push(twentyToNinety[tens]);
    num = num - tens * TEN;
    if (num) solution.push(zeroToNine[num]);
  }

  return solution.join(' ');
};

/**
 * @param {number} num Number to be converted to words.
 * @return {string} Result of converting input number to words.
 * @summary Integer to English Words {@link https://leetcode.com/problems/integer-to-english-words/}
 * @description Convert input string to english word representation.
 * Space O(1) - one resulting string.
 * Time O(n) - grows in line with size of the input.
 */
const numberToWords = num => {
  if (num < 19) return zeroToNine[num] || tenToNineteen[num];

  const billionCount = num < BILLION ? 0 : parseInt(num / BILLION);
  const millionCount = num < MILLION ? 0 : parseInt((num - billionCount * BILLION) / MILLION);
  const thousandCount =
    num < THOUSAND ? 0 : parseInt((num - billionCount * BILLION - millionCount * MILLION) / THOUSAND);
  const rest = parseInt(num - billionCount * BILLION - millionCount * MILLION - thousandCount * THOUSAND);

  const solution = [];

  if (billionCount >= 1) solution.push(three(billionCount) + ' Billion');
  if (millionCount >= 1) solution.push(three(millionCount) + ' Million');
  if (thousandCount >= 1) solution.push(three(thousandCount) + ' Thousand');
  if (rest >= 1) solution.push(three(rest));

  return solution.join(' ');
};
