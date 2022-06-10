const myAtoi = (s) => {
    
    function ltrim(str) {
        if(!str) return str;
        return str.replace(/^\s+/g, '');
    }

    const str = ltrim(s);
    let num = '';
    let isSign = false;
    let sign = '';
    let leadingZero = false;

    for(let i = 0;i<str.length;i++){
        if( (str[i] == '+' || str[i] == '-') && num.length == 0 ){
            if (isSign || leadingZero) break;
            isSign = true;
            sign = str[i];
            continue;
        } if(str[i] == '0' && num.length == 0){
            leadingZero = true;
            continue;
        };
        if(str[i] == '.' && num.length == 0) break;
        if ( str[i] == ' ' && num.length > 0 ) break;
        if( isNaN(str[i]) && num.length > 0 ) break;
        num += str[i];        
    }

    if(isSign) num = sign + num;
    
    let result = 0;

    if( num.length > 0 && !isNaN(num) && num != ' ') {            
        result = num.match(/-?(\d+)/);
        result = Math.floor(parseInt(result[0]))

        if(result < (Math.pow(2, 31) -1)  && result > (Math.pow(-2, 31) )) return result
        else return num > 0 ? Math.pow(2, 31) - 1 : Math.pow(-2, 31);
    }
    
    return result;





    // const arr = Array.from(String(s));
    // let num = '';

    // for(let i = 0; i < arr.length; i++){        
    //     if(!isNaN(parseInt(arr[i])) || arr[i] === '-' || arr[i] === '.') num += arr[i];
    //     else if(arr[i] == ' ') continue;
    //     else if( num.length == 0 ) return 0;
    // }

    // num = Math.floor(parseInt(num));

    // if(num < Math.pow(2, 31) && num > (Math.pow(-2, 31))) return num
    // else return Math.pow(-2, 31);
}

console.log(myAtoi("00000-42a1234"))


// -2147483648
// -91283472332