// var person = new Object();
//
// person["firstname"] = "Rahilka";
// person["lastname"] = "Simonova";
//
// var firstNameProperty = "firstname";
//
// console.log(person);
// console.log(person[firstNameProperty]);
// console.log(person.firstname);
//
// person.address = new Object();
//
// person.address.street = "Manco Maliminov";
//
// var person = {
//    firstname: 'Rahilka',
//    lastname: 'Simonova',
//    address: {
//      street: "Manco Maliminov",
//      city: "Negotino",
//      state: "Macedonia"
//    }
// };
//
// function greet(person) {
//   console.log('Hi ' + person.firstname);
// }
//
// greet(person);
//
// greet({
//   firstname: "Vlatko",
//   lastname: "Jordanov"
// });
//
// console.log(person);
//
// var greet = 'Hello!';
// var greet = 'Hola!';
//
// console.log(greet);
//
// var english = {
//   greetings: {
//     basic: 'Hello!'
//   }
// };
// var spanish = {};
//
// english.greetings.greet = 'Hello!';
// spanish.greet = 'Hola!';
//
// console.log(english);
// console.log(spanish);
//
// var objectLiteral = {
//   firstname: 'Rahilka',
//   isAProgrammer: true
// };
//
// console.log(JSON.stringify(objectLiteral));
//
// var jsonValue = JSON.parse('{"firstname": "Rahilka", "age": 23}')
// console.log(jsonValue);
// greet();
//
// function greet() {
//   console.log('hi');
// };
//
// var anonymous = function() {
//   console.log('hi');
// };
//
// anonymous();
//
//
// function log(a) {
//     a();
// }
//
// log(function () {
//   console.log('hi');
// });


 //by value - primitives

//  var a = 3;
//  var b;
//
//  b = a;
//  a = 2;
//
//  console.log(a);
//  console.log(b);
//
//  //by reference - all objects (including function)
//
//
//  var c = {
//
//    greeting: 'hi'
//
//  };
//
// var d;
//
// d = c;
//
// c.greeting = 'hello';
//
// console.log(c);
// console.log(d);
//
// //by reference (even as parameters)
//
// function changeGreeting(obj) {
//   obj.greeting = 'Hola';
// }
//
// changeGreeting(d);
// console.log(c);
// console.log(d);
//
// //equals operator sets up new memory space
// // (new address)
//
// c = { greeting: 'howdy' };
// console.log(c);
// console.log(d);

function a() {
  console.log(this);
  this.newVariable = 'hello';
}

var b = function() {
  console.log(this);
}

a();

console.log(newVariable);

b();

var c = {

  name: 'The c object',
  log: function() {
    var self = this;

    self.name = 'Update c object';
    console.log(self);

    var setName = function(newName) {
        self.name = newName;
    }

    setName('updated again the c object');
    console.log(self);

  }

}


c.log();
