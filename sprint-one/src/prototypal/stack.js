var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.key = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.key++] = value;
  },
  pop: function() {
    if (this.key <= 0) {
      return;
    }
    --this.key;
    var deletes = this.storage[this.key];
    delete this.storage[this.key];
    return deletes;
  },
  size: function() {
    return this.key;
  }
};



