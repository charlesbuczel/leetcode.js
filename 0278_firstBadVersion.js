/**
 * @param {funciton} isBadVersion Function returning true if passed version is bad.
 * @return {function} Function that returns first bad version.
 * @summary First Bad Version {@link https://leetcode.com/problems/first-bad-version/}
 * @description For a list of versions, return first bad verions of software.
 * Space O(1) - Always using 3 variables.
 * Time O(logn) - Binary search - we always divide remaining possibilites in 2.
 */
const solution = isBadVersion => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return n => {
    let left = 1;
    let right = n;

    while (left < right) {
      let guess = parseInt(left + (right - left) / 2);

      if (isBadVersion(guess)) right = guess;
      else left = guess + 1;
    }

    return left;
  };
};
