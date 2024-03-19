function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(2, 3);

const result = addTwoNumbers(4, 3);
console.log("Result:", result);

function addThreeNumbers(number1, number2, number3) {
  let result = number1 + number2 + number3;
  return result;
}

let result1 = addThreeNumbers(1, 2, 3);
console.log("Result: ", result1);

function loggedInUserMessage(username) {
  if (!username) {
    console.log("Please provide username.");
    return;
  }
  return `${username} just logged in.`;
}

console.log(loggedInUserMessage("Thor"));

function calculateCartValue(...num1) {
  return num1;
}

//function with rest operator
console.log(calculateCartValue(100, 200, 300));
