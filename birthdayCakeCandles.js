const birthdayCakeCandles = (arr) => {

    let max;
    let count = 0;
    arr.forEach((value, index) => {
        if(!max || max <= value) {
            if( max == value ) count++;
            else count = 1
            max = value;
        }
    });

    return count;

}

console.log(birthdayCakeCandles([3, 3, 3, 3]))