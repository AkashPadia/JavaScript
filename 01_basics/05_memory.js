// Stack (Primitive), Heap (Non-Primitive)

let fruitName1 = "Apple"
let fruitName2 = fruitName1
fruitName2 = "Grapes"

console.log(fruitName1);
console.log(fruitName2);

let userDetails1 = {
    name:"abc",
    email: "abc@gmail.com"
}

let userDetails2 = userDetails1
console.log(userDetails1.email);

userDetails2.email = "xyz@gmail.com"

console.log(userDetails1.email);
console.log(userDetails2.email);