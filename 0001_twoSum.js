const twoSum = (nums, target) => {
    let hash = {}, index, remaining;

    for (index = 0; index < nums.length; index++) {
        remaining = target - nums[index];

        if (hash[remaining]) {
            return [index, hash[remaining]];
        }

        hash[nums[index]] = index;
    }
};
