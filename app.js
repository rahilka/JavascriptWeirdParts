class Person {

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return 'Hi ' + this. firstname;
  }

}

var rahilka = new Person('Rahilka', 'Simonova');
console.log(rahilka);
console.log(rahilka.greet());

//extends set the Prototype
class InformalPerson extends Person {

  constructor(firstname, lastname) {
    //super = call the constructor of the object of my prototype
    super(firstname, lastname);
  }

  greet() {
    return 'Yo ' + firstname;
  }

}

var ljubica = new InformalPerson('Ljubica');
console.log(ljubica);
console.log(ljubica.greet());
