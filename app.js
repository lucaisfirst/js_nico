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

//conditional part 3 if, else, &&, ||
// true || true === true;
// false || true === true;
// true || false === true;
// false || false === false;
// true && true === true;
// false && true === false;
// true && false === false;
// false && false === false;

// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//   console.log("Please real positive number write a number");
// } else if (age < 18) {
//   console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//   console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise");
// } else if (age > 80) {
//   console.log("You can do whatever you want.");
// } else if (age !== 100) {
//   console.log("wow you are wise");
// }

// if ((a && b) || (c && d)) {
// }

//js에서 html의 요소들을 변경하고 바꿀 수 있다는 것이다.
// document.h1 = "Hello! From JS!";
// const h1 = document.getElementById("h1");

// h1.innerText = "Got you!";

// console.log(h1.id);
// console.log(h1.className);

// //searching for elements
// const h1 = document.querySelector(".hello h1");
// h1.innerText = "hello";
// // 정리
// // - getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
// // - getElementsByTagName() : name을 할당할 수 있음(array를 반환)
// // - querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
// // 단 하나의 element를 return해줌
// // ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
// // - 첫번째 element만 가져옴
// // - 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
// // ⇒ 세개의 h1이 들어있는 array를 가져다 줌
// // - querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
// // 하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다

// //Events detect click
// const h1 = document.querySelector(".hello:first-child h1");

// function handleTitleClick() {
//   h1.style.color = "blue";
// }

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   alert("copier!");
// }

// function handleWindowOffline() {
//   alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//   alert("ALL GOOD!");
// }
// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// const h1 = document.querySelector(".hello:first-child h1");

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

//CSS in Javascript 위 예시와 동일한 기능을 수행하는 코드를 CSS와 나눠서
const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
