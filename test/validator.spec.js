import validator from '../src/validator';

const assert = require('assert');

describe('validator', () => {
  describe('isValid', () => {
    it('should return true for a valid credit card number', () => {
      const creditCardNumber = '45320151128336';

      const result = validator.isValid(creditCardNumber);

      assert.strictEqual(result, true);
    });

    it('should return false for an invalid credit card number', () => {
      const creditCardNumber = '45320151128337';

      const result = validator.isValid(creditCardNumber);

      assert.strictEqual(result, false);
    });

    it('should return false for an empty credit card number', () => {
      const creditCardNumber = '';

      const result = validator.isValid(creditCardNumber);

      assert.strictEqual(result, false);
    });
  });

  describe('maskify', () => {
    it('should mask the credit card number and keep the last four digits', () => {
      const creditCardNumber = '45320151128336';
      const expected = '##########8336';

      const result = validator.maskify(creditCardNumber);

      assert.strictEqual(result, expected);
    });

    it('should return an empty string for an empty credit card number', () => {
      const creditCardNumber = '';
      const expected = '';

      const result = validator.maskify(creditCardNumber);

      assert.strictEqual(result, expected);
    });

    it('should return the credit card number itself if it has less than 4 digits', () => {
      const creditCardNumber = '123';
      const expected = '123';

      const result = validator.maskify(creditCardNumber);

      assert.strictEqual(result, expected);
    });
  });
});
