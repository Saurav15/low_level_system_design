
# Understanding Interface, Abstract Class, and Normal Class

This document explains the difference between **Interface**, **Abstract Class**, and **Normal Class** in object-oriented programming (OOP) with examples in JavaScript and TypeScript.

## Table of Contents
1. [Normal Class](#normal-class)
2. [Abstract Class](#abstract-class)
3. [Interface](#interface)
4. [Comparison Table](#comparison-table)
5. [Examples](#examples)

## Normal Class

A **normal class** is a regular class that can be instantiated directly. It can have fully implemented methods, member variables, and constructors.

### Example:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log("Car started");
  }
}

const car = new Car("Toyota", "Corolla");
car.start(); // Outputs: Car started
```

## Abstract Class

An **abstract class** cannot be instantiated directly. It can have both implemented methods (like a normal class) and abstract methods (which are placeholders for methods that must be implemented by subclasses). 

### Example:

```javascript
// Abstract Class (simulated in JavaScript)
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Concrete method
  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  // Abstract method (just a placeholder)
  speak() {
    throw "Method 'speak' must be implemented by subclass";
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Outputs: Woof!
```

## Interface

An **interface** defines the contract that a class must follow. It only specifies the method signatures and does not provide any implementation. Classes that implement the interface must define the behavior of these methods.

> Note: JavaScript does not support interfaces directly, but this is an example in TypeScript.

### Example (in TypeScript):

```typescript
interface PaymentMethod {
  processPayment(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  processPayment(amount: number) {
    console.log(`Processing credit card payment of ${amount}`);
  }
}

class PayPalPayment implements PaymentMethod {
  processPayment(amount: number) {
    console.log(`Processing PayPal payment of ${amount}`);
  }
}

const creditCard = new CreditCardPayment();
creditCard.processPayment(100); // Outputs: Processing credit card payment of 100
```

## Comparison Table

| Feature                | **Normal Class**                              | **Abstract Class**                                      | **Interface**                             |
|------------------------|------------------------------------------------|---------------------------------------------------------|-------------------------------------------|
| **Instantiation**       | Can be instantiated directly.                 | Cannot be instantiated directly.                        | Cannot be instantiated directly.          |
| **Method Implementation** | Can have fully implemented methods.           | Can have both implemented and abstract methods.         | Cannot have any method implementations.   |
| **Member Variables**    | Can have member variables.                    | Can have member variables.                              | Cannot have member variables.             |
| **Inheritance**         | Can inherit from other classes.               | Can inherit from other classes.                         | A class can implement multiple interfaces.|
| **Purpose**             | Encapsulates data and behavior.               | Provides a common base with shared behavior.            | Enforces a contract for methods.         |

## Examples

### 1. **Normal Class** Example

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log("Car started");
  }
}
```

### 2. **Abstract Class** Example

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  speak() {
    throw "Method 'speak' must be implemented by subclass";
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Outputs: Woof!
```

### 3. **Interface** Example (TypeScript)

```typescript
interface PaymentMethod {
  processPayment(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  processPayment(amount: number) {
    console.log(`Processing credit card payment of ${amount}`);
  }
}

class PayPalPayment implements PaymentMethod {
  processPayment(amount: number) {
    console.log(`Processing PayPal payment of ${amount}`);
  }
}
```

## Conclusion

- **Normal classes** are used for general object instantiation, with methods and member variables.
- **Abstract classes** define common behavior and leave some details to be implemented by subclasses.
- **Interfaces** enforce a contract, ensuring that a class implements certain methods, but they don’t provide any implementation details themselves.

This comparison and examples should give you a clear understanding of when and how to use each in object-oriented programming.
