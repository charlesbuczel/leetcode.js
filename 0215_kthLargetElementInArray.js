/**
 * @param {number[]} nums Unsorted array of numbers.
 * @param {number} k Kth largets element in array to return.
 * @return {number} Value of kth largest element in array.
 * @summary Kth Largest Element in an Array {@link https://leetcode.com/problems/kth-largest-element-in-an-array/}
 * @description Given unsorted array of numbers, return its kth largest element.
 * Space O(1) - Not creating any new arrays.
 * Time O(n) - in worst case N^2.
 */
const findKthLargest = (nums, k) => {
  const size = nums.length;

  const generateRandom = upTo => Math.floor(Math.random() * upTo);

  const partition = (left, right, pivot) => {
    let pivotValue = nums[pivot];

    [nums[pivot], nums[right]] = [nums[right], nums[pivot]];

    let index = left;

    for (let i = left; i <= right; i++) {
      if (nums[i] < pivotValue) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
        index++;
      }
    }

    [nums[index], nums[right]] = [nums[right], nums[index]];

    return index;
  };

  const quickselect = (left, right, target) => {
    if (left === right) nums[left];

    let pivot = left + generateRandom(right - left + 1);

    pivot = partition(left, right, pivot);

    if (target === pivot) return nums[target];
    else if (target < pivot) return quickselect(left, pivot - 1, target);
    return quickselect(pivot + 1, right, target);
  };

  return quickselect(0, size - 1, size - k);
};
