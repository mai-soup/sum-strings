# sum-strings
An NPM library to sum strings and return the result as a string.

## Installation

```bash
npm install sum-strings
```

## Usage

```js
const sumStrings = require('sum-strings')

sumStrings('123', '456') // '579'

// works with "numbers" bigger than max integer or even BigInt value
sumStrings(
  '999999999999999999999999999999999999999999999999999999999', '9999999999999999999999999999999999999999999999999999999999')
// returns '1999999999999999999999999999999999999999999999999999999998'
```

## License

MIT License

Copyright (c) 2023 Maijs Garais

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
