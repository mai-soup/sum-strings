const parseOrZero = n => {
  const parsed = Number.parseInt(n)
  if (isNaN(parsed)) return 0
  return parsed
}

function sumStrings(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string')
    throw new Error('Invalid arguments')

  const [shorter, longer] = a.length <= b.length ? [a, b] : [b, a]

  const shortReversed = shorter.split('').reverse()
  const longerReversed = longer.split('').reverse()

  longerReversed[longerReversed.length] = ''

  const sum = longerReversed.reduce(
    (acc, curr, i) => {
      if (i > shortReversed.length - 1) {
        shortReversed[i] = 0
      }

      const intermediateSum =
        parseOrZero(curr) +
        parseOrZero(shortReversed.at(i)) +
        (acc.carry ? 1 : 0)

      return {
        result: (intermediateSum % 10).toString() + acc.result,
        carry: intermediateSum >= 10,
      }
    },
    { result: '', carry: false }
  )

  let cleanSum = sum.result
  while (cleanSum[0] === '0') cleanSum = cleanSum.substring(1)

  return cleanSum
}

module.exports = sumStrings
