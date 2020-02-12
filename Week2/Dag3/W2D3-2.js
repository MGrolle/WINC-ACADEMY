//Deel1

//A
const addTheWordCool = function(array) {
  array.push("cool");
  return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//B
const amountOfElementsInArray = function(array) {
  return array.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));

//C
const selectBelgiumFromBenelux = function(array) {
  return array[0];
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

//D
const lastElementInArray = function(array) {
  return array[3];
};

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

//F
const stringsTogether = function(array) {
  return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));

//G
const combineArrays = function(array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));

//Deel2

//A
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];
const findSpiderMan = function(superheroes) {
  return superheroes.find(function(superhero) {
    return superhero.name === "Spiderman";
  });
};

console.log(findSpiderMan(superheroes));

//B
const doubleArrayValues = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray;
};

doubleArrayValues([1, 2, 3]);

console.log("Double 1,2,3:", doubleArrayValues([1, 2, 3]));

//C
const containsNumberBiggerThan10 = function(array) {
  return array.some(number => {
    return number > 10;
  });
};
console.log(
  "Ik ben meer dan 10:",
  containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
);

//D
function isItalyInTheGreat7(array) {
  return array.includes("Italy");
}

console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States"
  ])
);

//E
const tenfold = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 10);
  });
  return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

//F
function isBelow100(array) {
  return array.every(number => {
    return number < 100;
  });
}

console.log(
  "Onder de 100?:",
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
