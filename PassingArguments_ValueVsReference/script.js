"use strict";

const flight = "LH234";
const dima = {
  name: "Dmytro Filonenko",
  passport: 2354435432,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 2354435432) {
    alert("Check in");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, dima);
console.log(flight);
console.log(dima);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(dima);
checkIn(flight, dima);
