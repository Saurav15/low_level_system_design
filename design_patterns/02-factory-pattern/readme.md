# Factory Pattern and Open-Closed Principle (OCP)

## 1. Open-Closed Principle (OCP)
The **Open-Closed Principle (OCP)** is one of the five SOLID design principles in object-oriented programming. It states that:
> "A class should be **open for extension but closed for modification**."

This means that the behavior of a class should be extendable without modifying its existing source code. Instead of altering the class directly, new functionality should be added through **inheritance, composition, or polymorphism**.

### Example of Violating OCP (Bad Design)
```javascript
class PaymentProcessor {
    process(paymentType) {
        if (paymentType === 'creditCard') {
            console.log('Processing credit card payment');
        } else if (paymentType === 'paypal') {
            console.log('Processing PayPal payment');
        } else {
            throw new Error('Invalid payment type');
        }
    }
}
```
### Why is this bad?
- If we add a new payment method (e.g., Bitcoin), we have to **modify** the `process` method.
- This **violates OCP** because we are modifying existing code instead of extending it.

### Correcting This Using OCP (Good Design)
```javascript
class PaymentProcessor {
    processPayment() {
        throw new Error("Method must be implemented");
    }
}

class CreditCardPayment extends PaymentProcessor {
    processPayment() {
        console.log("Processing credit card payment");
    }
}

class PayPalPayment extends PaymentProcessor {
    processPayment() {
        console.log("Processing PayPal payment");
    }
}

// New payment type added without modifying existing code
class BitcoinPayment extends PaymentProcessor {
    processPayment() {
        console.log("Processing Bitcoin payment");
    }
}
```
### Why is this better?
✅ New payment types can be **added without modifying** the existing `PaymentProcessor` class.  
✅ Follows the **Open-Closed Principle** by allowing **extension without modification**.

---

## 2. What is the Factory Pattern?
The **Factory Pattern** is a **creational design pattern** that provides a centralized way to create objects **without exposing the instantiation logic**.

Instead of calling `new ClassName()` directly, the factory method decides which object to instantiate based on given parameters.

---

## 3. When Should You Use the Factory Pattern?
- When **creating objects involves complex logic**.
- When you want to **centralize object creation** and make it reusable.
- When the exact type of object **isn't known until runtime**.
- When you want to **apply the Open-Closed Principle** by avoiding modifications to existing code.

---

## 4. What Happens If You Don't Use Factory Pattern Where It’s Needed?
If you don't use the Factory Pattern, you will end up with **tight coupling** and **violations of the Open-Closed Principle**.

### Example Without Factory Pattern (Bad Design)
```javascript
class EmailNotification {
    send(message) {
        console.log(`📧 Sending Email: ${message}`);
    }
}

class SMSNotification {
    send(message) {
        console.log(`📱 Sending SMS: ${message}`);
    }
}

class PushNotification {
    send(message) {
        console.log(`🔔 Sending Push Notification: ${message}`);
    }
}

function sendNotification(type, message) {
    let notification;
    if (type === 'email') {
        notification = new EmailNotification();
    } else if (type === 'sms') {
        notification = new SMSNotification();
    } else if (type === 'push') {
        notification = new PushNotification();
    } else {
        throw new Error("Invalid notification type");
    }
    notification.send(message);
}
```
### Cons of Not Using Factory Pattern
❌ **Tightly coupled code** - The `sendNotification` function directly depends on multiple classes.  
❌ **Difficult to maintain** - Adding a new notification type requires modifying `sendNotification`.  
❌ **Violates Open-Closed Principle** - Modifications are needed for every new notification type.  

---

## 5. Example: Implementing Factory Pattern (Good Design)
```javascript
class EmailNotification {
    send(message) {
        console.log(`📧 Sending Email: ${message}`);
    }
}

class SMSNotification {
    send(message) {
        console.log(`📱 Sending SMS: ${message}`);
    }
}

class PushNotification {
    send(message) {
        console.log(`🔔 Sending Push Notification: ${message}`);
    }
}

// Factory Class
class NotificationFactory {
    static createNotification(type) {
        switch (type) {
            case 'email': return new EmailNotification();
            case 'sms': return new SMSNotification();
            case 'push': return new PushNotification();
            default: throw new Error("Invalid notification type");
        }
    }
}

// Usage
function sendNotification(type, message) {
    const notification = NotificationFactory.createNotification(type);
    notification.send(message);
}

sendNotification('email', 'Hello via Email!');
sendNotification('sms', 'Hello via SMS!');
sendNotification('push', 'Hello via Push Notification!');
```

✅ **Centralized object creation** via `NotificationFactory`.  
✅ **Easier to add new notification types** without modifying `sendNotification()`.  
✅ **Applies Open-Closed Principle** - new notification types can be added without modifying existing logic.  

---

## 6. Another Example of Factory Pattern (Different Use Case)
### Problem: Creating Different Types of Vehicles
```javascript
class Car {
    drive() {
        console.log("🚗 Driving a car");
    }
}

class Bike {
    drive() {
        console.log("🏍️ Riding a bike");
    }
}

class Truck {
    drive() {
        console.log("🚛 Driving a truck");
    }
}

// Factory Class
class VehicleFactory {
    static createVehicle(type) {
        switch (type) {
            case 'car': return new Car();
            case 'bike': return new Bike();
            case 'truck': return new Truck();
            default: throw new Error("Invalid vehicle type");
        }
    }
}

// Usage
const myVehicle = VehicleFactory.createVehicle('bike');
myVehicle.drive(); // Output: 🏍️ Riding a bike
```

✅ **Reusability** - New vehicle types can be added without modifying `VehicleFactory`.  
✅ **Better organization** - Centralized object creation logic.  
✅ **Follows Open-Closed Principle** - The existing code remains unchanged when adding new vehicle types.  

---
### Conclusion
- **Open-Closed Principle (OCP)** promotes extending a system without modifying existing code.
- **Factory Pattern** improves **code maintainability, reduces coupling, and makes object creation scalable**.
- Avoiding the Factory Pattern leads to **violations of OCP, harder maintenance, and duplicated code**.

