const twoSum = (nums, target) => {
    const hash = {};
    let index, remaining;

    for (index = 0; index < nums.length; index++) {
        remaining = target - nums[index];

        if (hash[remaining] !== undefined) {
            return [index, hash[remaining]];
        }

        hash[nums[index]] = index;
    }
};
