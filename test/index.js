import { assert } from 'chai';

import numberParse from '../src';

const correctNumbers = [
  '10.5', '10,5', '1.235,76', '2,543.56', '10 654.1234', '2.654$10',
  '5.435.123,645', '2,566,765.234', '2,432,123$23', '2,45EUR', '4.78€',
];

const incorrectNumbers = [
  '10 345,234.21', // too many separators
  '1.123.234,534,234', // more than a decimal separator
  '10.4,2', // bad divisions
  '1.123.2', // bad trailing
];

describe('Test numbers', () => {
  correctNumbers.forEach((item) => {
    it(`numberParse(${item}) should return a number: ${numberParse(item)}`, (done) => {
      assert.isNotNaN(numberParse(item));

      done();
    });
  });

  incorrectNumbers.forEach((item) => {
    it(`numberParse(${item}) should return NaN: ${numberParse(item)}`, (done) => {
      assert.isNaN(numberParse(item));

      done();
    });
  });
});
