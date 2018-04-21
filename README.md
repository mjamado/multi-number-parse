# Multi-Number Parse _(multi-number-parse)_

[![npm package](https://nodei.co/npm/multi-number-parse.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/multi-number-parse/)

[![Build status](https://img.shields.io/travis/mjamado/multi-number-parse/master.svg?style=flat-square)](https://travis-ci.org/mjamado/multi-number-parse)

> Library for parsing numbers in any **valid** format.

This library was motivated by the need to support a wide range of number formats from users. Users
sometime paste prices, percentages and whatnot from spreadsheets or websites, and we couldn't
force them to always use either the international format ("12345.67") or the specific user locale.

## Install

```shell
npm install multi-number-parse --save-prod
```

## Usage

This library always returns a number, even if that number is `Number.NaN`. Usage is very simple:

```js
import parse from 'multi-number-parse';

parse('2,543.56'); // returns 2543.56
parse('10 654.1234'); // returns 10654.1234
parse('2.654$10'); // returns 2654.1
parse('2,45EUR'); // extra suff at the end is stripped, returns 2.45
parse('-2,543.56'); // negative numbers are OK, returns -2543.56
parse('10 345,234.21'); // returns NaN, too many different separators
parse('1.123.234,534,234'); // returns NaN, impossible to detect the decimal separator
parse('10.4,2'); // returns NaN, malformed digit groups
parse('1.123.2'); // returns NaN, also malformed digit groups
```

### Ambiguity

What happens if a number like `1.234` is passed? What about `1,234`? It's an ambiguous situation,
because the library can't detect if it's an integer or a float - at least not automatically.

That's why there's a second parameter, in which you can hint at what the standard decimal separator
should be. By default, that separator is `.` (dot).

```js
parse('1.234'); // returns 1.234
parse('1,234'); // returns 1234
parse('1.234', ','); // returns 1234
parse('1,234', ','); // returns 1.234
```

## Contribute

Found a bug? Feel free to [open an issue](https://github.com/mjamado/multi-number-parse/issues) or
make a pull request. Always include tests, either for the bug or for your changes.

## License

GNU Lesser General Public License v3.0 or later