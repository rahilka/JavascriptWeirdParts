String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}

console.log("Jogn".isLengthGreaterThan(3));


Number.prototype.isPositive = function() {
  return this>0;
}
