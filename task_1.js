const task_1 = (s) => {

    const stringArr = s.split('')

    const duplicate = stringArr.filter((value, index) => {
        if( stringArr.indexOf(value) != index) return value;
    })

    if(duplicate.length > 0) return false;

    return true;
}

console.log(task_1('abbcdefg'));