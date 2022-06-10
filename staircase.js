const staircase = (n) => {
    
    for(let x = 1; x <= n; x++){
        let stair = '';
        for(let y = x; y < n; y++){
            stair += ' ';
        }
        for(let z = 0; z < x; z++){
            stair += '#';
        }
        console.log(stair)
    }

    return true;
}

console.log(staircase(6))