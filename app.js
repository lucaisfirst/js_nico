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
const player = {
  name: "luca",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("luca");
