const validator = {
  isValid: function (creditCardNumber) {
    if (!creditCardNumber) {
      return false;
    }
    const reversedNumber = creditCardNumber.split('').reverse().join('');
    let sum = 0;

    for (let i=0; i < reversedNumber.length; i++) {
      let digit = parseInt(reversedNumber.charAt(i), 10);

      if (i % 2 !== 0) {
        digit *= 2;

        if (digit > 9) {
          digit -= 9;
        }    
      }
      sum += digit;
    }
    return sum % 10 === 0;
  },

  maskify: function (creditCardNumber) {
    if (!creditCardNumber) {
      return '';
    }
    const lastFourDigits = creditCardNumber.slice(-4);
    const maskedDigits = creditCardNumber.slice(0, -4).replace(/./g, '#');

    return maskedDigits + lastFourDigits;
  }
};

export default validator;
