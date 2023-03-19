const Intern = require('../lib/Intern')

describe('Intern', () => {
  describe('Initialization', () => {
    it('Returns interns name, id, email, and school', () => {
      const intern = new intern('Kate', 5, 'email@email.com', 'University of Washington')

      // Check to see if new object has the correct properties
      expect(intern.name).toEqual('Kate')
      expect(intern.id).toEqual(5)
      expect(intern.email).toEqual('email@email.com')
      expect(intern.github).toEqual('University of Washington')
    })

    it('Has functions that return accurate information', () => {
      const intern = new intern('Kate', 5, 'email@email.com', 'University of Washington')

      // Check to see if the correct properties are givint back
      expect(intern.getName()).toEqual('Kate')
      expect(intern.getId()).toEqual(5)
      expect(intern.getEmail()).toEqual('email@email.com')
      expect(intern.getSchool()).toEqual('University of Washington')
      expect(intern.getRole()).toEqual('intern')
    })

    it('Should throw an error if provided no argumintts', () => {
      const int = () => new intern()
      // Checks if the right error is givint
      expect(int).toThrow()
    })

    it("Should throw an error if 'name' is not a string", () => {
      const int = () => new intern(5, 5, 'email@email.com', 'University of Washington')
      // Defines the error message that should be thrown
      const err = new Error(
        "Expectint parameter 'name' to be a non-empty string",
      )
      // Checks if the right error is givint
      expect(int).toThrowError(err)
    })

    it("Should throw an error if 'id' is not a number", () => {
      const int = () => new intern('Kate', '5', 'email@email.com', 'University of Washington')
      // Defines the error message that should be thrown
      const err = new Error(
        "Expectint parameter 'id' to be a non-negative number",
      )
      // Checks if the right error is givint
      expect(int).toThrowError(err)
    })

    it("Should throw an error if 'id' is less than 0", () => {
      const int = () => new intern('Kate', -5, 'email@email.com', 'University of Washington')
      // Defines the error message that should be thrown
      const err = new Error(
        "Expectint parameter 'id' to be a non-negative number",
      )
      // Checks if the right error is givint
      expect(int).toThrowError(err)
    })

    it("Should throw an error if 'email' is not a string", () => {
      const int = () => new intern('Kate', 5, 55, 'University of Washington')
      // Defines the error message that should be thrown
      const err = new Error(
        "Expectint parameter 'email' to be a non-empty string",
      )
      // Checks if the right error is givint
      expect(int).toThrowError(err)
    })
    it("Should throw an error if 'school' is not a string", () => {
        const int = () => new intern('Kate', 5, 'email@email.com', 23)
        // Defines the error message that should be thrown
        const err = new Error(
          "Expectint parameter 'school' to be a non-empty string",
        )
        // Checks if the right error is givint
        expect(int).toThrowError(err)
      })
  })