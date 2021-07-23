// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function difference(num) {
  if(num<=13){
    console.log(13-num);
  }
  else{
    console.log((num-13)*2);
  }
}

difference(11);
difference(13);
difference(23);
