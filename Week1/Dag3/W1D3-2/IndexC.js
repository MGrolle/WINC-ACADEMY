const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};
console.log(calculateDiscountedPrice(25, 4));
