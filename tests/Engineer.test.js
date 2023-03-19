const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
  describe('Initialization', () => {
    it('Returns engineers name, id, email, and github', () => {
      const engineer = new Engineer('Troy', 4, 'email@email.com', 'lisaKjones')

      // Check to see if new object has the correct properties
      expect(engineer.name).toEqual('Troy')
      expect(engineer.id).toEqual(4)
      expect(engineer.email).toEqual('email@email.com')
      expect(engineer.github).toEqual('lisaKjones')
    })

    it('Has functions that return accurate information', () => {
      const engineer = new Engineer('Troy', 4, 'email@email.com', 'lisaKjones')

      // Check to see if the correct properties are given back
      expect(engineer.getName()).toEqual('Troy')
      expect(engineer.getId()).toEqual(4)
      expect(engineer.getEmail()).toEqual('email@email.com')
      expect(engineer.getGithub()).toEqual('lisaKjones')
      expect(engineer.getRole()).toEqual('engineer')
    })

    it('Should throw an error if provided no arguments', () => {
      const en = () => new Engineer()
      // Checks if the right error is given
      expect(en).toThrow()
    })

    it("Should throw an error if 'name' is not a string", () => {
      const en = () => new Engineer(5, 4, 'email@email.com', 'lisaKjones')
      // Defines the error message that should be thrown
      const err = new Error(
        "Expecten parameter 'name' to be a non-empty string",
      )
      // Checks if the right error is given
      expect(en).toThrowError(err)
    })

    it("Should throw an error if 'id' is not a number", () => {
      const en = () => new Engineer('Troy', '4', 'email@email.com', 'lisaKjones')
      // Defines the error message that should be thrown
      const err = new Error(
        "Expecten parameter 'id' to be a non-negative number",
      )
      // Checks if the right error is given
      expect(en).toThrowError(err)
    })

    it("Should throw an error if 'id' is less than 0", () => {
      const en = () => new Engineer('Troy', -4, 'email@email.com', 'lisaKjones')
      // Defines the error message that should be thrown
      const err = new Error(
        "Expecten parameter 'id' to be a non-negative number",
      )
      // Checks if the right error is given
      expect(en).toThrowError(err)
    })

    it("Should throw an error if 'email' is not a string", () => {
      const en = () => new Engineer('Troy', 4, 44, 'lisaKjones')
      // Defines the error message that should be thrown
      const err = new Error(
        "Expecten parameter 'email' to be a non-empty string",
      )
      // Checks if the right error is given
      expect(en).toThrowError(err)
    })
    it("Should throw an error if 'github' is not a string", () => {
        const en = () => new Engineer('Troy', 4, 'email@email.com', 23)
        // Defines the error message that should be thrown
        const err = new Error(
          "Expecten parameter 'github' to be a non-empty string",
        )
        // Checks if the right error is given
        expect(en).toThrowError(err)
      })
  })
})