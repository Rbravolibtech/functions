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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//HIGHER-ORDER FUNCTION

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);

  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

//JS USES CALLBACKS ALL THE TIME

const high5 = function () {
  console.log('😡');
};
document.body.addEventListener('click', high5);

['Jonas', 'Bravo', 'Adam'].forEach(high5);
/*==============FUNCTIONS RETURNING FUNCTIONS==============*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hola')('Jonas');

//CHALLENGE

const greeterArr = greeting => name => console.log(`${greeting} ${name}`); //arrow function

greeterArr('Hi')('Jonas');
