# Static Keyword & Singleton Pattern

## 1. What is the `static` Keyword?
The `static` keyword in JavaScript defines properties and methods that belong to the class itself rather than an instance of the class.

### Example:
```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 10)); // ✅ 15
const obj = new MathUtil();
console.log(obj.add(2, 3)); // ❌ TypeError: obj.add is not a function
```
- The `add` method belongs to the class and cannot be accessed through an instance.
- `static` properties/methods are shared across all instances.

---

## 2. What is the Singleton Pattern?
The Singleton Pattern ensures that a class has only **one instance** and provides a global access point to that instance.

It is commonly used for managing shared resources such as database connections, logging services, or configurations.

---

## 3. When Should You Use the Singleton Pattern?
You should use the Singleton Pattern when:
- You **need only one instance** of a class throughout the application.
- You want to **manage shared state** (e.g., configuration settings, caches).
- You want to **control access to a shared resource**, like a database connection.

---

## 4. What Happens If You Don't Use Singleton Where It’s Needed?
If you don’t use the Singleton Pattern in situations where a **single, shared instance** is required:
- **Multiple instances may be created**, leading to unexpected behavior.
- **Higher memory usage**, as each new instance consumes additional resources.
- **State inconsistencies**, as different parts of the app may use different instances with different states.
- **Performance issues**, especially when dealing with resource-intensive objects like database connections.

---

## 5. Example: Implementing Singleton Pattern
### Example 1: Database Connection Singleton
```javascript
class DatabaseConnection {
  static instance = null;

  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    console.log("New Database Connection Created");
    DatabaseConnection.instance = this;
  }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // ✅ true (Both are the same instance)
```
#### Why is this useful?
- Prevents **multiple database connections** from being created.
- Ensures a **single access point** to the database.

---

## 6. Another Example: Logging Service
### Example 2: Logger Singleton
```javascript
class Logger {
  static instance = null;
  logs = [];

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log("LOG:", message);
  }

  getLogs() {
    return this.logs;
  }
}

const logger1 = new Logger();
logger1.log("First message");

const logger2 = new Logger();
logger2.log("Second message");

console.log(logger1 === logger2); // ✅ true
console.log(logger1.getLogs()); // ✅ ['First message', 'Second message']
```
#### Why is this useful?
- Ensures a **single source of truth** for logging across the app.
- Prevents **log duplication or missing logs** from different instances.

---

## Conclusion
- The `static` keyword allows properties and methods to belong to the class rather than instances.
- The Singleton Pattern ensures that only **one instance** of a class exists, preventing unnecessary duplication.
- Using Singleton correctly **saves memory, maintains state consistency, and improves performance** in resource-intensive tasks.

