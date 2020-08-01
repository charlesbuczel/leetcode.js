/**
 * @param {number[]} nums Array of integers.
 * @param {number} target Sum target of subarray elements.
 * @return {boolean} True if subarray of at least length 2 exists which elements add up to target
 * @summary Two Sum {@link https://leetcode.com/problems/continuous-subarray-sum/}
 * @description Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * Space O(t) - dictionary with at most size of target entries.
 * Time O(n) - we iterate through nums array once.
 */
const checkSubarraySum = (nums, target) => {
  const lookup = { 0: -1 };
  let movingModulo = 0;

  for (let index = 0; index < nums.length; index++) {
    movingModulo += nums[index];
    if (target !== 0) movingModulo = movingModulo % target;

    if (lookup[movingModulo] !== undefined) {
      if (index - lookup[movingModulo] >= 2) return true;
    } else lookup[movingModulo] = index;
  }

  return false;
};
