var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.back = 0;
  someInstance.front = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back++] = value;
  },
  dequeue: function() {
    if ( this.size() <= 0) {
      return;
    }
    var removed = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return removed;
  },
  size: function() {
    return this.back - this.front;
  }
};


