const inquire = require('inquirer')

class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getName, getId, getEmail 
    getName () {
        return this.name
    }

    getId () {
        return this.id
    }

    getEmail() {
        return this.email
    }
    // Returns 'Employee'
    getrole () {
        return "Employee"
    }
    printInfo() {
        console.log(`This is the name ${this.name} the id ${this.id} and email ${this.email}`)
    }
    }
    
    module.exports = Employee;
    