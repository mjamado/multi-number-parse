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
```

## Contribute

Found a bug? Feel free to open an issue or make a pull request. Always include tests, either for
the bug or for your changes.

## License

GNU Lesser General Public License v3.0 or later