const Manager = require('../lib/Manager')

describe('Manager', () => {
  describe('Initialization', () => {
    it('Returns managers name, id, email, and office number', () => {
      const manager = new Manager(
        'Kate',
        5,
        'email@email.com',
        12,
      )

      // Check to see if new object has the correct properties
      expect(manager.name).toEqual('Kate')
      expect(manager.id).toEqual(5)
      expect(manager.email).toEqual('email@email.com')
      expect(manager.officeNumber).toEqual(12)
    })

    it('Has functions that return accurate information', () => {
      const manager = new Manager(
        'Kate',
        5,
        'email@email.com',
      )

      // Check to see if the correct properties are given back
      expect(manager.getName()).toEqual('Kate')
      expect(manager.getId()).toEqual(5)
      expect(manager.getEmail()).toEqual('email@email.com')
      expect(manager.getRole()).toEqual('manager')
    })

    it('Should throw an error if provided no argummnts', () => {
      const mn = () => new Manager()
      // Checks if the right error is given
      expect(mn).toThrow()
    })

    it("Should throw an error if 'name' is not a string", () => {
      const mn = () =>
        new Manager(5, 5, 'email@email.com', 12)
      // Defines the error message that should be thrown
      const err = new Error(
        "Expectmn parameter 'name' to be a non-empty string",
      )
      // Checks if the right error is given
      expect(mn).toThrowError(err)
    })

    it("Should throw an error if 'id' is not a number", () => {
      const mn = () =>
        new Manager('Kate', '5', 'email@email.com', 12)
      // Defines the error message that should be thrown
      const err = new Error(
        "Expectmn parameter 'id' to be a non-negative number",
      )
      // Checks if the right error is given
      expect(mn).toThrowError(err)
    })

    it("Should throw an error if 'id' is less than 0", () => {
      const mn = () =>
        new Manager('Kate', -5, 'email@email.com', 12)
      // Defines the error message that should be thrown
      const err = new Error(
        "Expectmn parameter 'id' to be a non-negative number",
      )
      // Checks if the right error is given
      expect(mn).toThrowError(err)
    })

    it("Should throw an error if 'email' is not a string", () => {
      const mn = () => new Manager('Kate', 5, 55, 12)
      // Defines the error message that should be thrown
      const err = new Error(
        "Expectmn parameter 'email' to be a non-empty string",
      )
      // Checks if the right error is given
      expect(mn).toThrowError(err)
    })
    it("Should throw an error if 'office number' is not a number", () => {
      const mn = () => new Manager('Kate', 5, 'email@email.com', "12")
      // Defines the error message that should be thrown
      const err = new Error(
        "Expectmn parameter 'office number' to be a non-empty number",
      )
      // Checks if the right error is given
      expect(mn).toThrowError(err)
    })
  })
})