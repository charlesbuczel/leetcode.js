/**
 * @param {number[][]} intervals
 * @return {number[][]}
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