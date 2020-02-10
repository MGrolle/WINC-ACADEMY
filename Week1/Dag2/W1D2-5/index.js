const age = 26;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = "100";

if (age >= 18) {
  console.log("Je bent minimaal 18, je mag naar binnen.");
} else {
  console.log("Je bent onder de 18, je komt hier niet binnen.");
}

if (age >= 18 && age <= 25) {
  console.log("Je eerste biertje is voor de helft van de prijs vanavond!");
} else {
  console.log("Helaas geen 50% korting voor jou.");
}

if (isFemale) {
  console.log("Welkom dames!");
} else {
  console.log("Alleen vrouwen vanavond, je mag niet naar binnen.");
}

if (driverStatus === "bob") {
  console.log("100% BOB is 0% op!");
} else {
  console.log("Jij bent geen BOB, proost!");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Sarah of Bram, jij krijgt van ons een gratis biertje!");
} else {
  console.log("Helaas, je doet niet mee aan onze naams-actie.");
}

if (totalAmount >= 100) {
  console.log("Je krijgt een gratis fles champagne!");
} else if (totalAmount > 50) {
  console.log("Je krijgt gratis portie nachos!");
} else if (totalAmount > 25) {
  console.log("Je krijgt gratis bitterballen!");
} else {
  console.log("Helaas geen korting.");
}
