/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
function addNumbers() {
  let number1 = Number(document.querySelector('#add1').value);
  let number2 = Number(document.querySelector('#add2').value);
  
  document.querySelector('#sum').value = add(number1, number2);
}
  
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
/* Function Expression - Subtract Numbers */
  
function subtract(number1, number2) {
  return number1 - number2;
}
  
function subtractNumbers() {
  let number1 = Number(document.querySelector('#subtract1').value);
  let number2 = Number(document.querySelector('#subtract2').value);
  
  document.querySelector('#difference').value = subtract(number1, number2);
}
  
document
  .querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
/* Arrow Function - Multiply Numbers */
  
const multiply = (number1, number2) => {
  return number1 * number2;
};
  
const multiplyNumbers = () => {
  let number1 = Number(document.querySelector('#factor1').value);
  let number2 = Number(document.querySelector('#factor2').value);
  
  document.querySelector('#product').value = multiply(number1, number2);
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
 
  
/* Open Function Use - Divide Numbers */
  
const divide = (number1, number2) => {
  return number1 / number2;
};
  
const divideNumbers = () => {
  let number1 = Number(document.querySelector('#dividend').value);
  let number2 = Number(document.querySelector('#divisor').value);
  
  document.querySelector('#quotient').value = divide(number1, number2);
};
  
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
/* Decision Structure */
  
const clubmemberCheckbox = document.getElementById('clubmember');
const subtotalInput = document.getElementById('subtotal');
const getTotalDueButton = document.getElementById('getTotal');
const totalSpan = document.getElementById('total');
  
// Add event listener to the "Get Total Due" button
getTotalDueButton.addEventListener('click', function () {
  // Declare and instantiate a variable to store the numeric value entered by the user
  let subtotal = parseFloat(subtotalInput.value);

  // Check if the membership checkbox is checked
  if (clubmemberCheckbox.checked) {
    // Apply 20% discount to subtotal if checkbox is checked
    subtotal *= 80 / 100;
  }
  
  // Output the total to the total span with two decimals using template string
  totalSpan.textContent = `$${subtotal.toFixed(2)}`;
});
  
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
  
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
document.querySelector('#array').innerHTML = numbersArray
  
/* Output Odds Only Array */
  
const oddsElement = document.getElementById("odds");
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
const oddNumbersString = oddNumbers.join(", ");
oddsElement.textContent = oddNumbersString;
  
/* Output Evens Only Array */
  
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
const evensElement = document.getElementById('evens');
const evenNumbersString = evenNumbers.join(', ');
evensElement.textContent = evenNumbersString;
  
/* Output Sum of Org. Array */
  
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.textContent = sumOfArray;
  
/* Output Multiplied by 2 Array */
  
const multipliedArray = numbersArray.map(number => number * 2);
const multipliedElement = document.getElementById('multiplied');
const multipliedString = multipliedArray.join(', ');
multipliedElement.textContent = multipliedString;
  
/* Output Sum of Multiplied by 2 Array */
  
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.textContent = sumOfMultiplied;
