const task_5 = (a, b) => {

    if (a == null && b == null) return true;

    

    if (a != null && b != null) {

        if( a.val != b.val ) return false;

        return (a.data == b.data && task_5(a.left, b.left) && task_5(a.right, b.right));
    }
    
    return false;
}

console.log(task_5(
    { val: 1, left: null, right: null },
    { val: 2, left: null, right: null }
))


