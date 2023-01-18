function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutesFromHours = convertHoursToMinutes(2);
console.log(minutesFromHours);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var aamResult = addAndMultiplyBy5(10, 5);
console.log(aamResult);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var madResult = multiplyAndDivideBy5(35, 10);
console.log(madResult);

function subtractTwoNumber(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumber(22, 7);
console.log(difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(num1) {
  return num1 * num1 * num1;
}
var cubed = cube(5);
console.log(cubed);
