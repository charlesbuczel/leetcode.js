/**
 * @description Class to hold array of nums and randomply pick index of any value matching target.
 * @summary Random Pick Index {@link https://leetcode.com/problems/random-pick-index/}
 */
class Solution {
  /**
   * @param {number[]} nums Array of number values.
   */
  constructor(nums) {
    this.nums = nums;
  }

  /**
   * @description Return one of indexes where value === target. Return with equal probability.
   * @param {number} target Value to match in the nums array.
   * @return {number} Index of randomly picked value matching target.
   * Space O(1) - constant number of variables.
   * Time O(n) - where n is nums.length.
   */
  pick(target) {
    let result = 0;
    let matchedCount = 0;

    for (let index = 0; index < this.nums.length; index++) {
      if (this.nums[index] === target) {
        matchedCount++;
        if (Math.floor(Math.random() * matchedCount) === 0) result = index;
      }
    }

    return result;
  }
}
