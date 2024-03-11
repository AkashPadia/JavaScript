//const marvelUser = new Object()

const marvelUser = {};
marvelUser.name = "Thor";
marvelUser.age = 1550;
marvelUser.email = "thor@marvel.com";

console.log(marvelUser);

const obj1 = { a: 97, b: 98 };
const obj2 = { c: 99, d: 100 };

const objectCopies = Object.assign({}, obj1, obj2);
const objectCopies1 = { ...obj1, ...obj2 };
console.log(objectCopies);

console.log(Object.keys(marvelUser));
console.log(Object.values(marvelUser));
console.log(Object.entries(marvelUser));
console.log(marvelUser.hasOwnProperty("age"));

const marvelHero = {
  name: "Thor",
  fullName: "Thor Odinson",
  weapon: "Hammer",
};

console.log(marvelHero.weapon);
const { weapon } = marvelHero;
console.log(weapon);

const { fullName : fn } = marvelHero;
console.log(fn);
