var person = {
  firstname: 'Rahilka',
  lastname: 'Simonova',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ', arguments);
  console.log('-----------');
}

var logPersonName = logName.bind(person);
//bind creates copy of the function, without executing

logPersonName('en');

//call executes the function
logName.call(person, 'en', 'es');
//apply executes the function too
logName.apply(person, ['en', 'es']);

//THE ONLY DIFFERENCE between CALL and APPLY is
//that apply wants the argument in an array

(function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ', arguments);
  console.log('-----------');
}).apply(person, ['en', 'mk']);


//function borrowing

var person2 = {
  firstname: 'Ljubica',
  lastname: 'Simonova'
}

console.log(person.getFullName.apply(person2));


// functon currying

function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
//THE VARIABLE a WILL ALWAYS BE 2

console.log(multipleByTwo(5));
