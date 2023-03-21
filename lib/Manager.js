const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email, office)
    this.officeNumber = officeNumber
  }

  getRole() {
    return 'Manager'
  }
}

module.exports = Manager