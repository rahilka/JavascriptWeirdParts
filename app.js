var people = [
  {
    //rahilka object
    firstname: 'Rahilka',
    lastname: 'Simonova',
    addresses: [
      '111 Main St',
      '222 Third St'
    ]
  },
  {
    //ljubica object
    firstname: 'Ljubica',
    lastname: 'Simonova',
    addresses: [
      '333 Main St',
      '444 Third St'
    ],
    greet: function() {
      return 'Hello!';
    }
  }
];

console.log(people);
