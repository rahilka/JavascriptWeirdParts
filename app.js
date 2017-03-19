Array.prototype.myCustom = 'cool';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
  console.log('-----------');
}


for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
