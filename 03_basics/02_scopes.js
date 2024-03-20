//global scope
let a = 300;

if (true) {
  //block scope
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Block Scope: ", a);
}

console.log("Global scope: ", a);
//console.log(b);
console.log(c);

function parentFunction() {
  //global scope from childFunction
  const parentVariable = "parent";

  function childFunction() {
    const childVariable = "child";
    console.log(parentVariable);
  }
  //local scope in childFunction
  //console.log(childVariable);
  childFunction();
}
parentFunction();
