const processOrderList = (orderList, orderId, state) => {

    orderList.map((order, index) => {
        if(order.id == orderId) order.state = state;
        if(order.state == 'Delivered') orderList.splice(index, 1)
    })

    return orderList

}

const orderList = [
    { id: 1, state: 'Received' },
    { id: 2, state: 'Received' },
    { id: 3, state: 'Delivered' }
  ]

console.log(processOrderList(orderList, 1, 'Delivered'))