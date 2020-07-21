/**
 * @param {number[]} nums Array of integers.
 * @return {number[]} Array where each element is a product of all elements except of self.
 * @summary Product of Array Except Self {@link https://leetcode.com/problems/product-of-array-except-self/}
 * @description For a list of integers, return a list where output[i] is a product of all except of input[i].
 * Space O(n) - It's O(n) if not counting the answer array of nums.length elements.
 * Time O(n) - Two loops each of nums.length steps to calculate the sum.
 */
const productExceptSelf = nums => {
  const length = nums.length;
  const answer = Array(length);
  answer[0] = 1;
  let right = 1;
  let i;

  for (i = 1; i < length; i++) answer[i] = nums[i - 1] * answer[i - 1];
  for (i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right = right * nums[i];
  }

  return answer;
};
