const plusMinus = (arr) => {

    let positiveIneger = 0;
    let negativeIneger = 0;
    let zero = 0;

    for( const value of arr ){
        if( value == 0 ) zero += 1;
        else if( value > 0 ) positiveIneger += 1
        else if (value < 0) negativeIneger += 1
    }

    console.log( (positiveIneger/arr.length).toFixed(6) )
    console.log( (negativeIneger/arr.length).toFixed(6) )
    console.log( (zero/arr.length).toFixed(6) )

}

console.log(plusMinus([ -4, 3, -9, 0, 4, 1 ]))