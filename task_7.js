const task_7 = (num, parts) => {
    
    let division;
    const mod = num % parts;
    let result = [];
    if(mod == 0){
        division = num/parts;
        result = Array(parts).fill(division);
    } else {
        division = (num-mod)/parts;
        result = Array(parts).fill(division);
        for(i=0;i<mod;i++){
            result[i] = result[i] + 1;
        }
        result.reverse()
    }

  return result;
}

console.log(task_7(10, 5))