const sumStrings = require('./index')
const chance = require('chance').Chance()

const getValidNumber = () =>
  chance.integer({ min: 0, max: Number.MAX_SAFE_INTEGER }).toString()

it('should return a string when passed two valid strings', () => {
  const result = sumStrings(getValidNumber(), getValidNumber())
  expect(typeof result).toBe('string')
})

it('should throw an error when at least one argument is not a string', () => {
  expect(() => sumStrings(getValidNumber(), 1)).toThrow()
  expect(() => sumStrings(1, getValidNumber())).toThrow()
  expect(() => sumStrings(1, 1)).toThrow()
})
