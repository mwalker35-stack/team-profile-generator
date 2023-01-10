const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber)  {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    gitHubName () {
        return this.officeNumber;
    }
    

     // getRole() Overridden to return 'Manager'
    getRole() {
        return "Manager";
    }
}


module.exports = Manager;