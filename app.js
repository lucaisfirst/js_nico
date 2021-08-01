// const a = 5;
// const b = 2;
// let myName = "hajin";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello " + myName);

// myName = "luca"
// console.log("And your name is " + myName);

// const amIFat = null;
// let something;
// console.log(something, amIFat);

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// //Get Item from Array
// console.log(daysOfWeek);

// // Add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

// const player = {
//     name: "hajin",
//     points: 10,
//     fat: false,
// };
// console.log(player);
// player.lastName = "potato";
// player.potints = player.points + 15;
// console.log(player);

//  function sayHello(nameOfPerson, age) {
//      console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
//  }
// sayHello("jin", 20);
// sayHello("luca", 21);
// sayHello("suzu", 19);

// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }
// function divide(a, b){
//     console.log(a / b);
// }

// plus(8, 60);
// divide(100, 23);

//function 이용해서 정보 보내는 방식에 대한 이해
// const player = {
//   name: "luca",
//   sayHello: function (otherPersonsName) {
//     console.log("hello " + otherPersonsName + " nice to meet you!");
//   },
// };

// console.log(player.name);
// player.sayHello("luca");

// const player = {
//   name: "suzu",
//   sayHello: function (othherPersonsNumber) {
//     console.log("hello! " + othherPersonsNumber + " is your number!");
//   },
// };

// player.sayHello(190);
// console.log(player.name);

//Recap!
// const toBuy = ["potato", "tomato", "pizza"];
// console.log(toBuy);
// toBuy[2] = "water";
// console.log(toBuy);
// toBuy.push("meat");
// console.log(toBuy);

// const player = {
//   name: "luca",
//   age: 100,
// };

// console.log(player);
// player.name = "lucaisfirst";
// console.log(player);
// player.sexy = "soon";
// console.log(player);

// function plus(a, b) {
//   console.log(a + b);
// }

// plus(3, 2);
// plus(56, 12);

// function minusFive(potato) {
//   console.log(potato - 5);
// }

// minusFive(10, 2, 3, 43, 32);

// const calculator = {
//   add: function (a, b) {
//     console.log(a + b);
//   },
// };
// calculator.add(2, 3);

// //homework
// const calculator = {
//   plus: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   times: function (a, b) {
//     console.log(a * b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   pow: function (a, b) {
//     console.log(a ** b);
//   },
// };

// calculator.plus(1, 2);
// calculator.minus(2, 1);
// calculator.times(4, 6);
// calculator.divide(12, 3);
// calculator.pow(2, 4);

// const age = 98;
// function calculateKrAge(ageOfForeigner) {
//   ageOfForeigner + 2;
//   return "hello";
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 2);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, 2);
// console.log(plusResult);
// console.log(minusResult);
// console.log(timesResult);
// console.log(divideResult);
// console.log(powerResult);

//conditionals
//parseInt로 숫자인지 아닌지 판단하는 방법을 배웠다.
// const age = parseInt(prompt("How old are you?"));
// console.log(age);

const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("Please write a number");
}
