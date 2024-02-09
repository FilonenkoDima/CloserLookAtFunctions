"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Dima");
greeterHey("Steven");

greet("Hello")("Dima");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hey")("Dima");
