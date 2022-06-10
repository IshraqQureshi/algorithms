const diagonalDifference = (arr) => {
    
    let primaryIndex = 0;
    let secondaryIndex = arr.length - 1;
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for( const value of arr ) {
        primaryDiagonal += value[primaryIndex]
        secondaryDiagonal += value[secondaryIndex]

        primaryIndex++;
        secondaryIndex--;
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);

}

console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))