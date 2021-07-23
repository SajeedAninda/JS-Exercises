// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

function difference(num){
if(num<=19){
  console.log(19-num);
}
else{
  console.log((num-19)*3);
}
}

difference(23);
difference(15);
