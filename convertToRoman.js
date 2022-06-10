const intToRoman = function(num) {
    const keys = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1   
    }
    
    let str = '';
    
    for (let i of Object.keys(keys)) {
        let q = Math.floor(num / keys[i]);
        num -= q * keys[i];
        str += i.repeat(q);
    }
    
    return str
};

console.log(intToRoman(29))