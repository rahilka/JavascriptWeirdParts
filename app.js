//polyfill
if(!Object.create) {
  Object.create = function(obj) {
    if(arguments.length > ) {
      throw new Error('Object.create implementation only accepts the first parameter');
    }
    function F() {}
    F.prototype = obj;
    return new F();
  }
}

var person = {
  firstname: 'Rahilka',
  lastname: 'Simonova',
  greet: function () {
    return 'Hi ' + this.firstname;
  }
}

var john = Object.create(person);
john.firstname = 'Ljubica';
john.lastname = 'Simonova';
console.log(john);
