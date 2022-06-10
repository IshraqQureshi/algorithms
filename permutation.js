function permuteUnique(nums) {
    if (nums.length === 1) {
        return [nums]
    }

    let res = []
    let prev = null;
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        const p = nums[i]
        if (p == prev) continue;
        prev = p;
        const restNums = [...nums]
        restNums.splice(i, 1)
        const perms = permuteUnique(restNums).map(x => [p, ...x])
        res.push(...perms)
    }
    return res
}
// permuteUnique([1, 1, 2])
console.log(permuteUnique([1, 1, 2]));