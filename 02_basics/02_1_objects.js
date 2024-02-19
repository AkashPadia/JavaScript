//construtor method //singleton
//Object.create

//object literals
const symbol = Symbol("key1")

const marvelUser = {
    name:"Thor",
    "full name":"Thor Odinson",
    [symbol]: "key1",
    age:50,
    location: "Marvel Studios",
    email: "thor@marvel.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(marvelUser.name);
console.log(marvelUser["name"]);
console.log(marvelUser["full name"]);
console.log(marvelUser[symbol]);

marvelUser.age = 55
console.log(marvelUser.age);
//Object.freeze(marvelUser)
marvelUser.age = 70
console.log(marvelUser);

marvelUser.greeting=function(){
    console.log("Welcome to Marvel world.")
}

marvelUser.greeting();

marvelUser.greetingWithName=function(){
    console.log(`Welcome to Marvel world: ${this["full name"]}`)
}

marvelUser.greetingWithName();