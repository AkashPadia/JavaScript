//array
const myArr1 = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Hulk"]

//
const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr1[1]);

//array methods
//insert element to the end of an array
myArr1.push(6)
myArr1.push(7)

//removes last element of an array
myArr1.pop()

//insert element at the start of an array
myArr1.unshift(8)

//removes first element of an array
myArr1.shift()

//console.log(myArr1);

//console.log(myArr1.includes(8));
//console.log(myArr1.indexOf(5));

const newArr = myArr1.join()
//console.log(newArr);

//slice returns new array with in range
console.log("A ", myArr1);
const myArr3 = myArr1.slice(1, 3)
console.log(myArr3);
console.log("B ", myArr1);

//slice returns new array of range and removes from original array
const myArr4 = myArr1.splice(1, 3)
console.log("C ", myArr1);
console.log(myArr4);

