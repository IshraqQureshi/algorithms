const task_2 = (first, second) => {

    const firstArr = first.split('')
    const secondArr = second.split('')
    
    if( first == second ) return 0;
    if( firstArr.length != secondArr.length ) return -1;


    for(let i = 0; i < secondArr.length; i++){
        const lastWord = firstArr.pop() 
        firstArr.unshift(lastWord);
        if( firstArr.join('') == second) return i + 1 
    }


    return -1;
}

console.log(task_2('dog', 'god'));