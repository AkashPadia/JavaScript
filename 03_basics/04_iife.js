//Immediately Invoked Function Expression (IIFE)

//named IIFE
(function userDetails(){
    console.log("Welcome User.");
})();

(() => {
    console.log("Welcome User.");
})();

((userName) => {
    console.log(`Welcome ${userName}.`);
})("Thor")