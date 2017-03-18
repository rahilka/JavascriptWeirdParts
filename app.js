function greet(whatToSay) {

  return function(name) {
    console.log(whatToSay + ' ' + name);
  }


}

var sayHi = greet('HI');
sayHi('Rahilka');
