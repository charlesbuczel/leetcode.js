/**
 * @param {number[]} nums Array of integers.
 * @param {number} target Two numbers from nums array should add up to this target.
 * @return {number[]} Indices of two numbers from 'nums' that add up to 'target'
 * @summary Two Sum {@link https://leetcode.com/problems/two-sum/}
 * @description Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * Space O(n) - hash object storing data will have no more than n elements.
 * Time O(n) - one iteration of n elements.
 */
const twoSum = (nums, target) => {
    const hash = {};
    let index, remaining;

    for (index = 0; index < nums.length; index++) {
        remaining = target - nums[index];

        if (hash[remaining] !== undefined) {
            return [hash[remaining], index];
        }

        hash[nums[index]] = index;
    }
};
