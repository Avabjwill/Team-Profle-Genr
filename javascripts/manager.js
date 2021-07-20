const Employee = require('./employee')

class Manager {
    constructor ( name,id, email, Number){
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = officeNumber;
    }
    getName() {
        return this.name
    };
    getID() {
        return this.id
    };
    getEmail() {
        return this.email
    };
    getNumber() {
        return this.number
    };
    getRole() {
        return "Manager"
    };
    getOfficeNumber() {
        return this.number
    }
}

module.exports = Manager;