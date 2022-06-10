function Activity(amount) {
    this.amount = amount;
}

Activity.prototype.setAmount = function(amount) {
    if(amount <= 0) return false;
    this.amount = amount
    return true
}

Activity.prototype.getAmount = function() {
    return this.amount;
}

function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.receiver = receiver;
}

Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Activity;


Payment.prototype.setReceiver = function(receiver) {
    this.receiver = receiver
}

Payment.prototype.getReceiver = function() {
    return this.receiver
}


function Refund(amount, sender) {
    Activity.call(this, amount);
    this.sender = sender;
}

Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Activity;


Refund.prototype.setSender = function(sender) {
    this.sender = sender
}

Refund.prototype.getSender = function() {
    return this.sender
}

var payment = new Payment(5000, 'John');

