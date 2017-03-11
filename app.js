// // function b() {
// //   // var myVar;
// //   console.log('expect: undefined', myVar)
// // }
// //
// // function a() {
// //   var myVar = 2;
// //   console.log('expect: 2', myVar);
// //
// //   //2
// //
// //
// //   b();
// //   console.log('expect: 2', myVar);
// //
// // }
// //
// // var myVar = 1;
// // console.log('expect: 1', myVar);
// //
// // //1
// //
// // a();
// // console.log('expect: 1', myVar);
// //
// //
// // //
//
// //
// // console.log(a);
// //
// // if (true) {
// //   let a = 1;
// // }
//
// // let a = 2;
//
//
//
// //a is not defined
//
// let a = 2;
// console.log(a);


//long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();

  while(new Date() < ms) {
    console.log('finished function');
  }
}

function clickHandler() {
  console.log('click event!');
}

//listen for the click event

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
