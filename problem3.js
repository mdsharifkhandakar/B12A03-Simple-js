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
