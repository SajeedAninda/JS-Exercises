// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function integers(num1, num2) {
  if ((num1 < 0 && num2 > 0) || num1 > 0 && num2 < 0) {
    console.log("It is positive");
  }
  else {
    console.log("It is Negative");
  }
}

integers(10,-2);
integers(-1,-8);
integers(-3,6);
