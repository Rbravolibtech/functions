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
/*==============HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE ==============*/
