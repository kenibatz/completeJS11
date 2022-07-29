'use strict';

console.log(`\n*** Data Transormations with Map, Filter and Reduce`);

console.log(
  `\n*** Map creates a new array and applies an operation on each element`
);

const monthlyExpensesUSD = [10, 11, 10, 5, 8];

console.log(`monthly expenses USD: ${monthlyExpensesUSD}`);

const conversionRate = 50;

//regular function declaration
/*
const monthlyExpenses = monthlyExpensesUSD.map(function (expense, index, array) {
  return expense * conversionRate;
});
*/

//arrow function declaration
const monthlyExpenses = monthlyExpensesUSD.map(
  expense => expense * conversionRate
);

//arrow function 2
//example of the arrow function expanded
/*
const monthlyExpenses = monthlyExpensesUSD.map((expense, index) => {
  console.log(`arrow function 2 `);
  return `${index} : ${expense * conversionRate}`;
});
*/

console.log(`monthly expenses converted: ${monthlyExpenses}`);

//Filter
console.log(`\n*** Filters creates a new array based on a condition`);

//Reduce
console.log(
  `\n*** Reduce adds the elements of an array and returns a single value`
);
