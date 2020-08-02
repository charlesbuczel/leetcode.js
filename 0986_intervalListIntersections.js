/**
 * @param {number[][]} a Array of intervals of a.
 * @param {number[][]} b Arra of intervals of b.
 * @return {number[][]} Intersection of intervals.
 * @summary Interval List Intersection {@link https://leetcode.com/problems/interval-list-intersections/}
 * @description Given two list of intervals, return their intersection.
 * Space O(m+n) - Maximum of size of both arrays.
 * Time O(m+n) - Maximum of size of both arrays.
 */
const intervalIntersection = (a, b) => {
  const answer = [];
  let [indexA, indexB] = [0, 0];

  while (indexA < a.length && indexB < b.length) {
    const commonStart = Math.max(a[indexA][0], b[indexB][0]);
    const commonEnd = Math.min(a[indexA][1], b[indexB][1]);

    if (commonStart <= commonEnd) {
      answer.push([commonStart, commonEnd]);
    }

    if (a[indexA][1] < b[indexB][1]) indexA++;
    else indexB++;
  }

  return answer;
};
