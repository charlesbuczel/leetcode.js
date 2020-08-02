/**
 * @param {number} n Number of unique functions
 * @param {string[]} logs Function execution logs
 * @return {number[]} Time each function spent executing.
 * @summary Exclusive Time of Functions {@link https://leetcode.com/problems/exclusive-time-of-functions/}
 * @description Given number of unique functions and their execution logs, return time each function spent executing.
 * Space O(n) - Where n is number of unique functions.
 * Time O(l) - Where l is number of log entries.
 */
const exclusiveTime = (n, logs) => {
  const stack = [];
  const response = Array(n).fill(0);

  let previousTime = 0;
  for (let index = 0; index < logs.length; index++) {
    let [process, instruction, time] = logs[index].split(':');
    process = +process;
    time = +time;
    const stackTop = stack[stack.length - 1];

    if (instruction === 'start') {
      if (stack.length) response[stackTop] += time - previousTime;
      stack.push(process);
      previousTime = time;
    } else {
      response[stackTop] += time - previousTime + 1;
      stack.pop();
      previousTime = time + 1;
    }
  }

  return response;
};
