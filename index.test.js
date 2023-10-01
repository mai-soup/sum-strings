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

it('should return the string representation of sum of two numbers when passed two valid strings', () => {
  const a = getValidNumber()
  const b = getValidNumber()
  const result = sumStrings(a, b)
  expect(result).toBe((Number(a) + Number(b)).toString())
})

it('should not have leading zeroes when passed at least one number with leading zeroes', () => {
  const a = '0' + getValidNumber()
  const b = getValidNumber()
  const result = sumStrings(a, b)
  expect(result[0]).not.toBe('0')

  const result2 = sumStrings(b, a)
  expect(result2[0]).not.toBe('0')

  const c = '0' + getValidNumber()
  const result3 = sumStrings(a, c)
  expect(result3[0]).not.toBe('0')
})

it('should be able to sum two numbers larger than Number.MAX_SAFE_INTEGER', () => {
  const a = Number.MAX_SAFE_INTEGER.toString() + getValidNumber() + 1
  const b = getValidNumber()
  const result = sumStrings(a, b)
  expect(result).toBe((BigInt(a) + BigInt(b)).toString())

  const result2 = sumStrings(b, a)
  expect(result2).toBe((BigInt(a) + BigInt(b)).toString())

  const result3 = sumStrings(a, a)
  expect(result3).toBe((BigInt(a) + BigInt(a)).toString())
})
