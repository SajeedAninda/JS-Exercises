// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function sum(num1,num2){
  if(num1!=num2){
    console.log(num1+num2);
  }
  else{
    console.log((num1+num2)*3);
  }
}

sum(12,10);
sum(4,4);
