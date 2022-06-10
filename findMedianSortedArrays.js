var findMedianSortedArrays = function (nums1, nums2) {

    const sortNumbers = (a, b) => {
        console.log(a);
        console.log(b);
        console.log(a - b);
        console.log('----')

        return a - b;
    }

    const mergedArr = [...nums1, ...nums2].sort(sortNumbers);
    let median = 0;

    if (mergedArr.length % 2 == 0) {
        median = (mergedArr[mergedArr.length / 2] + mergedArr[mergedArr.length / 2 - 1]) / 2;
    } else {
        median = mergedArr[Math.floor(mergedArr.length / 2)]
    }

    return median;
};


console.log(findMedianSortedArrays([3], [-2, -1]));


