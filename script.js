'use strict';

/*============== DEFAULT PARAMETERS ==============/*
const bookings = [];

const createBooking = function (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers,
) {
	// ES5
	// numPassengers = numPassengers || 1;
	// price = price || 199;

	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);

/*==============HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE ==============*/

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Bravo',
//   passport: 159357147369,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH99';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 159357147369) {
//     alert('Checked in');
//   } else {
//     alert('wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // is the same as doing...

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
/*==============FUNCTIONS ACCEPTING CALLBACK FUNCTIONS ==============*/

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //HIGHER-ORDER FUNCTION

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);

//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// //JS USES CALLBACKS ALL THE TIME

// const high5 = function () {
//   console.log('😡');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Bravo', 'Adam'].forEach(high5);
// /*==============FUNCTIONS RETURNING FUNCTIONS==============*/

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hola')('Jonas');

// //CHALLENGE

// const greeterArr = greeting => name => console.log(`${greeting} ${name}`); //arrow function

// greeterArr('Hi')('Jonas');

/*==============THE CALL AND APPLY METHODS==============*/

const delta = {
  airline: 'Delta',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

delta.book(239, 'Jonas Bravo');
delta.book(258, 'Jonas Smith');

const eurowings = {
  airline: 'eurowings',
  iataCode: 'Ew',
  bookings: [],
};

const book = delta.book;

//Does not work
//book(23, 'Sarah Williams');

book.call(eurowings, 23, 'sarah Williams');
console.log(eurowings);

book.call(delta, 239, 'Mary Cooper');
console.log(delta);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply method

const flightData = [583, 'Tomb Brady'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

/*==============THE BIND METHOD ==============*/

//  The bind Method
//  book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(delta);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Bravo');
bookEW23('Mike SMith');

// With event listeners

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

//challenge

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

/*==============CODING CHALLENGE 1 ==============*/
