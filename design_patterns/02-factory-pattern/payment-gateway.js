class PaymentMethod{
    orderDetails;
    amount;

    constructor (amount, orderDetails){
        this.amount = amount;
        this.orderDetails = orderDetails;
    }

    processPayment(){
        throw "This method must be implemented."
    }
}


class CreditCardPayment extends PaymentMethod {
    processPayment(cardNumber){
        console.log(`Payement for ${this.amount} for order ${this.orderDetails} using card number ${cardNumber} is success.`)
    }
}

class UpiPayment extends PaymentMethod {
    processPayment(upiId){
        console.log(`Payment for ${this.amount} for the order ${this.orderDetails} using UPI id ${upiId}  is success.`)
    }
}


class PaymentFactory {
    static createPaymentMethod(type, amount ,order){
        if (!amount || amount <= 0) {
            throw new Error("Invalid amount");
        }
        if (!order) {
            throw new Error("Order details are required");
        }

        switch (type){
            case 'upi':
                return new UpiPayment(amount, order);
            case 'creditCard':
                return new CreditCardPayment(amount, order);
            default:
                throw "Invalid payment type"
        }
    }
}


const amount = 100;
const orderDetails = {
    name: "Earphones ZC01",
    category: "electronics",
    subCategory: "Wearable Audio Device"
}
const paymentMethod = PaymentFactory.createPaymentMethod('upi', amount, orderDetails);
paymentMethod.processPayment('upiId@kotak');
const paymentMethod2 = PaymentFactory.createPaymentMethod('creditCard', amount, orderDetails);
paymentMethod2.processPayment('22333113023')