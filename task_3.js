const task_3 = (integer) => {

    const binaryArr = [];

    for(let i = integer.length - 1; i >= 0; i--){
        binaryArr.push(("000000000" + integer[i].toString(2)).substr(-8))    
    }

    const compactInteger = parseInt(binaryArr.join(''), 2).toString(10)

    return compactInteger;
}

console.log(task_3([ 24, 85, 0 ]));