const miniMaxSum = (arr) => {

    let min;
    let max;

    arr.forEach((value, index) => {
        const TEMP_ARR = new Array(...arr);
        TEMP_ARR.splice(index, 1);
        const sumArr = TEMP_ARR.reduce((a, b) => a + b, 0)
        if( !min || min > sumArr) min = sumArr;
        if( !max || max < sumArr) max = sumArr;
    })

    console.log(min, max)

}

console.log(miniMaxSum([ 1, 2, 3, 4, 5 ]))