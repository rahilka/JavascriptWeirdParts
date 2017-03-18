//function statement
function greet(name) {
  console.log('Hello ' + name);
}

greet('Rahilka');

//using a function expression
var greetFunc = function(name) {
  console.log('Hello ' + name);
};

greetFunc('Rahilka');

//using and Immediately Invoked FUnction expression// IIFE
var greeting = function(name) {

  return ('Hello ' + name);

}('Rahilka');

console.log(greeting);




(function(name) {

  var greetings = 'Hello ';
  console.log(greetings + name);

}('Rahilka'));  //IIFE
