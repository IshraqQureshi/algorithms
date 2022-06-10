const decryptPassword = (s) => {

    // let encryptedPassword = '';
    // let passwordArr = s.split('')

    // for(let i = 0; i < passwordArr.length; i++) {
        
    //     if( i + 1 < passwordArr.length && ( isNaN(passwordArr[i]) && passwordArr[i] == passwordArr[i].toLowerCase() ) && ( isNaN(passwordArr[i + 1]) && passwordArr[i + 1] == passwordArr[i + 1].toUpperCase() )) {
    //         encryptedPassword += `${passwordArr[i + 1]}${passwordArr[i]}*`;
    //         i += 1;
    //         continue;
    //     }

    //     if( !isNaN(passwordArr[i]) ){
    //         encryptedPassword = `${passwordArr[i]}${encryptedPassword}0`;
    //         continue;
    //     }

    //     encryptedPassword += passwordArr[i];
    // }

    // return encryptedPassword;


    let find= '*';
    let replace = '';
    
    while( s.indexOf(find) > -1)
    {
       var s = s.replace(find, replace);
    }
    
    let index = s.split('').findIndex(item => /[A-Z|a-z]/i.test(item));
    
    let i=0, r = s.slice(0,index);
    r = r.split('')
    s = s.slice(index, s.length).split('')
    
    while( s.indexOf('0') > -1){
        let post =  s.indexOf('0')
        s[post] =  r.pop() 
    }

    for(let i = 0; i < s.length; i++) {
        if( i + 1 < s.length && ( isNaN(s[i]) && s[i+1] == s[i+1].toLowerCase() ) && ( isNaN(s[i]) && s[i] == s[i].toUpperCase() )) {
            let temp = s[i]
            s[i] = s[i+1]
            s[i+1] = temp
            i += 1;
            continue;
        }
    }
    
    return s.join('')

}

console.log(decryptPassword('6UDTyn0Hm*BqBp*ur'))



// 487RESx*Fpd0Xukr0m0Du
RExSpFd