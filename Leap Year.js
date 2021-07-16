// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapYear(year){
  if(year%4==0){
    console.log("It is a leap year");
  }
  else if(year%100==0){
    console.log("It is a leap year");
  }
  else if(year%400==0){
    console.log("It is a leap year");
  }
  else{
    console.log("It is not a leap year")
  }
}

leapYear(2022);
leapYear(2020);
leapYear(2012);
leapYear(2016);
