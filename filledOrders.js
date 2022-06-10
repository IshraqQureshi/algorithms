const filledOrders = (order, k) => {

    let count = 0;
    const sortedOrders = order.sort(function(a,b) {
        return (+a) - (+b);
    });
    for( const value of sortedOrders ) {
        if( value <= k ) {
            count++;
            k = k - value;
        }
    }
    return count;

}

console.log(filledOrders([20, 30, 10, 4, 89, 2,], 100))