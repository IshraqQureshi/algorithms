const reverse = (x) => {
    let negative = false;
    if(x < 0){
        x = Math.abs(x);
        negative = true;
    }
    const arr = Array.from(String(x)).reverse();
    let reverseNum = arr.join('');
    if(negative) {
        reverseNum = -Math.abs(reverseNum);
    }
    if(reverseNum < Math.pow(2, 31) && reverseNum > (Math.pow(-2, 31))){
        return reverseNum
    }
    else return 0;

}

console.log(reverse(-123))