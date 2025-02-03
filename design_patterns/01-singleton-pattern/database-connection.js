class DatabaseConnection {
    static dbInstance = null;

    constructor(url) {
        if(DatabaseConnection.dbInstance){
            console.log("Instance already present: ", DatabaseConnection.dbInstance)
            return DatabaseConnection.dbInstance
        }

        console.log('New database instance created.')
        this.connection = this.connectToDatabase(url);
        DatabaseConnection.dbInstance = this;
        return this;
    }

    connectToDatabase(url) {
        return { connection: true }
    }

    getDbConenction(){
        return DatabaseConnection.dbInstance;
    }

    disConnectToDataBase(){
        DatabaseConnection.dbInstance = null;
    }
}


const url = 'connectToDbUrl.com'
console.log("Create 3 instance for the database.\n")
const dbConnection = new DatabaseConnection(url); // New database instance created.
const dbConnection2 = new DatabaseConnection(url); // Instance already present:  { connection: true }
const dbConnection3 = new DatabaseConnection(url); // Instance already present:  { connection: true }

console.log("\n");
console.log("Consoling the static method: ", DatabaseConnection.dbInstance)
console.log("Checking if we have the same instance in all of the connection by dbConnection === dbConnection2: ", dbConnection === dbConnection2); // True
console.log("\n");

console.log("Dbconnection1 before disconnection: ", dbConnection.getDbConenction()); // Dbconnection1 before disconnection:  { connection: true }
console.log("Dbconnection2 before disconnection: ", dbConnection2.getDbConenction()); // Dbconnection2 before disconnection:  { connection: true }

console.log("\n Disconnect database using dbConnection!\n");
dbConnection.disConnectToDataBase();

console.log("DbConnection1 after disconnection: ", dbConnection.getDbConenction()); // DbConnection1 after disconnection:  null
console.log("DbConnection2 after disconnection: ", dbConnection2.getDbConenction()); // DbConnection2 after disconnection:  null
