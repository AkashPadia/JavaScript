const userName = "Hawkeye"
const expertise = "Archery"

console.log(`Hello my name is ${userName} and my expertise is ${expertise}.`)

const techName = new String("JavaScript")
console.log(techName);
console.log(techName[0]);
console.log(techName.__proto__);


console.log(techName.length);
console.log(techName.toLowerCase());
console.log(techName.charAt(5));
console.log(techName.indexOf('t'));

const newString = techName.substring(0, 4)
console.log(newString);

const anotherString = techName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Hulk    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://marvel.com/captain%20america"

console.log(url.replace('%20', '-'))

console.log(url.includes('captain'))

console.log(techName.split('-'));
