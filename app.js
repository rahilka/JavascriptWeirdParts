function makeGreeting(language) {

  return function(firstname, lastname) {

    if(language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }

    if(language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }

  }

}


var greetEnglish = makeGreeting('en')('Rahilka', 'Simonova');
var greetSpanish = makeGreeting('es')('Ljubica', 'Simonova');
