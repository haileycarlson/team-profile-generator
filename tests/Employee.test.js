const Employee = require('../lib/Employee')

describe('Employee', () => {
  describe('Initialization', () => {
    it('Returns employees name, id, and email', () => {
      const employee = new Employee('Lisa', 3, 'email@email.com')

      // Check to see if new object has the correct properties
      expect(employee.name).toEqual('Lisa')
      expect(employee.id).toEqual(3)
      expect(employee.email).toEqual('email@email.com')
    })

    it('Has functions that return accurate information', () => {
      const employee = new Employee('Lisa', 3, 'email@email.com')

      // Check to see if the correct properties are given back
      expect(employee.getName()).toEqual('Lisa')
      expect(employee.getId()).toEqual(3)
      expect(employee.getEmail()).toEqual('email@email.com')
      expect(employee.getRole()).toEqual('Employee')
    })

  //   it('Should throw an error if provided no arguments', () => {
  //     const ed = () => new Employee()
  //     // Checks if the right error is given
  //     expect(ed).toThrow()
  //   })

  //   it("Should throw an error if 'name' is not a string", () => {
  //     const ed = () => new Employee(5, 3, 'email@email.com')
  //     // Defines the error message that should be thrown
  //     const err = new Error(
  //       "Expected parameter 'name' to be a non-empty string",
  //     )
  //     // Checks if the right error is given
  //     expect(ed).toThrowError(err)
  //   })

  //   it("Should throw an error if 'id' is not a number", () => {
  //     const ed = () => new Employee('Lisa', '3', 'email@email.com')
  //     // Defines the error message that should be thrown
  //     const err = new Error(
  //       "Expected parameter 'id' to be a non-negative number",
  //     )
  //     // Checks if the right error is given
  //     expect(ed).toThrowError(err)
  //   })

  //   it("Should throw an error if 'id' is less than 0", () => {
  //     const ed = () => new Employee('Lisa', -3, 'email@email.com')
  //     // Defines the error message that should be thrown
  //     const err = new Error(
  //       "Expected parameter 'id' to be a non-negative number",
  //     )
  //     // Checks if the right error is given
  //     expect(ed).toThrowError(err)
  //   })

  //   it("Should throw an error if 'email' is not a string", () => {
  //     const ed = () => new Employee('Lisa', 3, 44)
  //     // Defines the error message that should be thrown
  //     const err = new Error(
  //       "Expected parameter 'email' to be a non-empty string",
  //     )
  //     // Checks if the right error is given
  //     expect(ed).toThrowError(err)
  //   })
  })
})
