/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let icon = ["&spades;", "&hearts;", "&clubs;", "&diams;"];

  let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  let randomIcon = icon[Math.floor(Math.random() * icon.length)];

  let topicon = document.querySelector(".top-icon");
  let boticon = document.querySelector(".bot-icon");
  let num = document.querySelector(".number");

  topicon.innerHTML = randomIcon;
  boticon.innerHTML = randomIcon;
  num.innerHTML = randomNumbers;

  if (randomIcon === "&hearts;" || randomIcon === "&diams;") {
    topicon.style.color = "#FF0000";
    boticon.style.color = "#FF0000";
  }
};

// let generateRandomNumber = () => {
//   let numbers = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A"
//   ];
//   let indexNumbers = Math.floor(Math.random() * numbers.length);
//   return numbers[indexNumbers];
// };
// let generateRandomIcon = () => {
//   let icon = ["&spade", "&heart", "&club", "&diamond"];
//   let indexIcon = Math.floor(Math.random() * icon.length);
//   return icon[indexIcon];
// };
