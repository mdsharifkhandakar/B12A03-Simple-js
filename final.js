/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var rahim = area / 2;
var karim = area / 2;
console.log(rahim);
console.log(karim);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate ");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
var day = 1;

while (day <= lastDay) {
  if (day % 3 === 0) {
    console.log(day + " -medicine");
  } else {
    console.log(day + " -rest");
  }
  day++;
}
