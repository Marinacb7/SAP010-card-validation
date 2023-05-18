import validator from './validator.js';
const creditCardForm = document.getElementById('creditCardForm');
const validationResult = document.getElementById('validationResult');
const maskedCardNumber = document.getElementById('maskedCardNumber');

creditCardForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const creditCardNumberInput = document.getElementById('creditCardNumber');
  const creditCardNumber = creditCardNumberInput.value;

  if (!creditCardNumber) {
    return;
  }

  const isValid = validator.isValid(creditCardNumber);
  const maskedNumber = validator.maskify(creditCardNumber);

  validationResult.textContent = isValid ? 'Cartão de Crédito Válido' : 'Cartão de Crédito Inválido';
  maskedCardNumber.textContent = `Número do Cartão: ${maskedNumber}`;
});
console.log(validator);
