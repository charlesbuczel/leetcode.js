const distance = point => point[0] ** 2 + point[1] ** 2;

/**
 * @param {number[][]} points Array of points on a plane.
 * @param {number} k How many closes points to 0,0 to return.
 * @return {number[][]} Array of k closes points to 0,0.
 * @summary K Closest Points to Origin {@link https://leetcode.com/problems/k-closest-points-to-origin/}
 * @description Given list of points, return k closest points to 0,0 (Euclidean distance).
 * Space O(n) - create array of length k.
 * Time O(nlogn) - logn for js built in sorting, n comparison operations(?).
 */
const kClosest = (points, k) => points.sort((a, b) => distance(a) - distance(b)).slice(0, k);
