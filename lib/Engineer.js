const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubName)  {
        super(name, id, email);
        this.gitHubName = gitHubName;
    }
    getgitHubName () {
        return this.gitHubName;
    }
    
    // getRole() Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }
}


module.exports = Engineer;