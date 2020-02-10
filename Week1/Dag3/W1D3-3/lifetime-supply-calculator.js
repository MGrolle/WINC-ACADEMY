const calculateSupply = function(age, numPerDay) {
  const maxAge = 100;
  const totalNeeded = numPerDay * 365 * (maxAge - age);
  let message =
    "You will need " +
    totalNeeded +
    " sandwiches to last you until the ripe old age of " +
    maxAge;
  console.log(message);
};

calculateSupply(21, 1);
calculateSupply(21, 3);
calculateSupply(21, 100);
