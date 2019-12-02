var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // ternary operator
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var temp = this._storage[item];
    delete this._storage[item];
    return temp;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
