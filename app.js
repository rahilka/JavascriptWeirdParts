function sayHiLater() {

  var greeting = 'Hi!';

  setTimeout(function() {

    console.log(greeting);

  }, 3000);

}

sayHiLater();

//jQuery uses function expressions and first class functions!
// $("button").click(function() {
//
// });


function tellMeWhenDone(callback) {

  var a = 1000;
  var b = 2000;

  callback();

}

tellMeWhenDone(function() {

  console.log('Im done');

});


tellMeWhenDone(function() {

  console.log('All done..');

});
