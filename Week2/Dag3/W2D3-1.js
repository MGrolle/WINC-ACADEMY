/*
function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

let isPositive2 = number => number >= 0;

function randomNumber() {
  return Math.random;
}

let randomNumber2 = () => Math.random;

document.addEventListener("click", function() {
  console.log("Click");
});

document.addEventListener("click", () => console.log("Click"));
*/



// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions();

const ikRockArrowFunctions = () => {
    console.log("Joe, ik rock de arrow functions!");
  }
  
  ikRockArrowFunctions();

//B
const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();

const fivePlusSeven = () => 5 + 7;

  fivePlusSeven();

//C
() => 1 + 2 

//D
const myFunction = (a,b) => a + b 

//E
const addFive = a => a + 5

//F
const addFive = a => a + 5