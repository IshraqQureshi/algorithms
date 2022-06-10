const isPalindrome = (x) => {

    const arr = Array.from(String(x));
    const reverseNum = arr.reverse().join('');    
    return x == reverseNum;

}

console.log(isPalindrome(10))