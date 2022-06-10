const isMatch = (s, p) => {

    var regex = new RegExp('^' + p + '$', 'm');
    return regex.test(s);

}

console.log(isMatch("aa", "aa*"))