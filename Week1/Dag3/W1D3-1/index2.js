const myArray = ["rood", "blauw", "groen"];

console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);
myArray.push("paars");
console.log(myArray);
myArray.push(5);
console.log(myArray);
myArray.push({ greeting: "Hi ik ben een object" });
console.log(myArray);
console.log(myArray[myArray.length - 1].greeting);
