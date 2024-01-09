const marvel_heros = ["hulk", "ironman", "thor"]
const dc_heros = ["superman", "batman", "flash"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

//combine two or more arrays and retuns new array without modifying existing array
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const allHeros1 = [...marvel_heros, ...dc_heros]
console.log(allHeros1);

const array1 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 1]]]
//returns new array with all sub-array element concatinated into specified depth
const flat_array = array1.flat(Infinity)
console.log(flat_array);

//check if provided argument is array or not
console.log(Array.isArray("hulk"));

//create an array from argument
console.log(Array.from("hulk"));
console.log(Array.from({name: "hulk"}));//tricky

let num1 = 10
let num2 = 20
let num3 = 30
//returns new array from set of elements
console.log(Array.of(num1, num2, num3));