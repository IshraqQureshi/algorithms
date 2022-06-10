function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let y = i + 1; y < nums.length; y++) {
            if (nums[i] + nums[y] === target) {
                return [i, y];
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i] === target) {
            return [i, i];
        }
    }

}
console.log(twoSum([3, 4, 4], 6));