var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  someInstance.storage = storage;
  
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[back++] = value;
  };

  someInstance.dequeue = function() {
    if(someInstance.size() <= 0){
      return;
    }

    var removed = storage[front];
    delete storage[front];
    front++;
    return removed;
  };

  someInstance.size = function() {
    return back - front;
  };

  return someInstance;
};
