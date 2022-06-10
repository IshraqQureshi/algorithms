const task_4 = (amount) => {

    const hundredBills = Math.floor(amount / 100);
    amount = amount % 100;

    const twentyBills = Math.floor(amount / 20);
    amount = amount % 20;

    const fiftyBills = Math.floor(amount / 50);
    amount = amount % 50;
    

    return [hundredBills, fiftyBills, twentyBills];
}

console.log(task_4(230));