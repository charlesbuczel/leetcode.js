/**
 * @param {number[][]} intervals Array of intervals.
 * @return {number[][]} Array of intervals after merging all that were overlapping.
 * @summary Merge Intervals {@link https://leetcode.com/problems/merge-intervals/}
 * @description Given an array of intervals (start, finish), return array with overlapping intervals merged.
 * Space O(1) - depending on js engine sort implementation (can it be done in place?).
 * Time O(nlogn) - sort (logn) + one iteration of n elements. Depends on js engine sort implementation though.
 */
const merge = intervals => {
    intervals.sort((a, b) => a[0] > b[0] ? 1 : -1);

    const merged = [];

    intervals.forEach(interval => {
        if (!merged.length || merged[merged.length - 1][1] < interval[0]) merged.push(interval);
        else merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
    })

    return merged;
};