/**
 * @param {number[]} nums Array of numbers.
 * @param {number} k Goal sum of valid subarray.
 * @return {number} Count of subarrays for which elements sum up to k.
 * @summary Subarray Sum Equals K {@link https://leetcode.com/problems/subarray-sum-equals-k/}
 * @description Given array of integers and goal sum, return number of subarrays for which sum of elements equal k.
 * Space O(n) - Creating object literal (hashmap) with up to n keys.
 * Time O(n) - Input is traversed nums.length times.
 */
const subarraySum = (nums, k) => {
  let count = 0;
  let sum = 0;
  const results = {
    0: 1,
  };

  const length = nums.length;
  for (let i = 0; i < length; i++) {
    sum += nums[i];
    if (results[sum - k]) count += results[sum - k];
    results[sum] = results[sum] ? results[sum] + 1 : 1;
  }

  return count;
};
