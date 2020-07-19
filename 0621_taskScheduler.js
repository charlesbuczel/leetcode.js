/**
 * @param {string[]} taks List of tasks A-Z.
 * @param {number} n Cooling time between running same task.
 * @return {number} Time CPU will take to finish all tasks.
 * @summary Task Scheduler {@link https://leetcode.com/problems/task-scheduler/submissions/}
 * @description Given array of CPU taks and minimum cooling period between same task, return the minimum units of time CPU will take to finish all tasks.
 * Space O(1) - One hash of frequencies up to 26 keys.
 * Time O(n) - N is number of tasks to execute (<26).
 */
const leastInterval = (tasks, n) => {
  let maxCount = 0;

  const freq = tasks.reduce((acc, val) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    if (acc[val] > maxCount) maxCount = acc[val];
    return acc;
  }, {});

  const maxTasks = Object.keys(freq).reduce((acc, val) => (freq[val] === maxCount ? acc + 1 : acc), 0);

  return Math.max(tasks.length, (maxCount - 1) * (n + 1) + maxTasks);
};
