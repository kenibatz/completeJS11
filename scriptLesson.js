'use strict';
console.log(`\n*** Lesson 158`);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/* Functions */

// lesson 150, using the map Method
// map returns a new array

const movementsArr = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

/*
const convertedMovements = movementsArr.map(function (movement) {
  return movement * eurToUsd;
});
*/

//arrow version
const convertedMovements = movementsArr.map(movement => movement * eurToUsd);

console.log(convertedMovements);

const movementsDescriptions = movementsArr.map((movement, index) => {
  /*
  if (movement > 0) {
    return `Movement: ${index + 1}: You deposited ${movement}}`;
  } else {
    return `Movement: ${index + 1}: You withdrew ${movement}`;
  }
  */
  //using a ternary op
  return `Movement ${index + 1}: You ${
    movement > 0 ? `deposited` : `withdrew`
  } ${Math.abs(movement)} `;
});

console.log(movementsDescriptions);

// lesson 151, mapping the usernames
/*
the code block below is the prototype code that will be converted to a function below after it works

toLowerCase: makes the user's name all lowercase
split: turns the string into an array based on the space between the user's name
map: returns an array of the first character of each element of the split array
  the first map function uses an arrow method while the commented-out map function uses a traditional method syntax
join: combines the map array into a new string with no divider
*/

const user = 'Peter Benjamin Parker'; // pbp
/*
const username = user
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  // .map(function (name) {
  //   return name[0];
  // })
  .join('');
console.log(username);
*/

/*
the function below is based on the code block above
it will be converted into a new function that accepts an array
*/

/*
const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return username;
};

console.log(createUsername(user));
*/

/*
forEach is used because the existing data is to be modified. we can't use map because we don't need it to return a new array

a new property 'username' is added to the account object
*/
const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.dir(accounts);

/* 152 filter */
console.log(`\n*** L152: Filter method`);
console.log(`movements array: ${movementsArr}`);
const despositsArr = movementsArr.filter(function (mov) {
  return mov > 0;
});
console.log(`deposits array: ${despositsArr}`);
// const withdrawalsArr = movementsArr.filter(function (mov) {
//   return mov < 0;
// });

const withdrawalsArr = movementsArr.filter(mov => mov < 0);
console.log(`withdrawals array: ${withdrawalsArr}`);

/* 153 reduce */
console.log(`\n*** L153: Reduce method`);
console.log(`movements array: ${movementsArr}`);
const balance = movementsArr.reduce(function (accumulator, el, i, arr) {
  console.log(`index ${i}: ${accumulator}`);
  return accumulator + el;
}, 0);
console.log(`\nBalance: ${balance}`);

//arrow
//the initial value is set to '1' to test
const balanceArrow = movementsArr.reduce((acc, el) => acc + el, 1);
console.log(`\nbalanceArrow: ${balanceArrow}`);

/* Event Handlers */
btnLogin.addEventListener('click', function (event) {
  console.log(`btnLogin clicked`);
  event.preventDefault();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
