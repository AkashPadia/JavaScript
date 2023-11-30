/*--------------- Numbers --------------- */
const score = 400
//console.log(score);

const balance = new Number(500)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 155.3695
//console.log(otherNumber.toPrecision(4));

const tenLakhs = 1000000
//console.log(tenLakhs.toLocaleString('en-IN'));

/*--------------- Maths --------------- */

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(5.3));
console.log(Math.ceil(5.01));
console.log(Math.floor(5.6));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);