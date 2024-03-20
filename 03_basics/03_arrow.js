const user = {
  username: "Thor",
  weapon: "Hammer",
  welcomeMessage: function () {
    console.log(`Hello ${this.username}, Welcome to world of marvel.`);
    console.log(this);
  },
};

//user.welcomeMessage();
user.username = "Hulk";
//user.welcomeMessage();

//console.log(this);

//ways function declare

// Function declaration //traditional way
function userDetails() {
  let username = "Thor";
  console.log(this.username);
}
userDetails();

//Function Expression
const userDetails1 = function () {
  let username = "Thor";
  console.log(this.username);
};
userDetails1();

//Immediately Invoked Function Expressions
(function () {
  console.log("Welcome to Javascript");
})();

//arrow function
//return needed {}
const userDetails2 = () => {
  let username = "Thor";
  console.log(this.username);
  console.log(this);
};
userDetails2();

const userDetails3 = (firstName, lastName) => firstName + lastName;
console.log(userDetails3("Thor ", "Odinson"))

//return not needed ()
const userDetails4 = (firstName, lastName) => (firstName + lastName);
console.log(userDetails4("Thor ", "Odinson"))

const userDetails5 = () => ({name: "Thor"})
console.log(userDetails5());