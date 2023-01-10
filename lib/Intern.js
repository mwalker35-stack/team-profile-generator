const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school,)  {
        super(name, id, email);
        this.school = school;
    }
    gitHubName () {
        return this.school;
    }
    
     // getRole() Overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
}


module.exports = Intern;