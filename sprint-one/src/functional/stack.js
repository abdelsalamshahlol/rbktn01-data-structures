var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  someInstance.storage = storage;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key++] = value;
  };

  someInstance.pop = function() {
    if (key <= 0) {
      return;
    }
    // get the last value 
    key--;
    var deletes = storage[key]; 
    // decrease the size of storage
    delete storage[key];
    // return the last value
    return deletes;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
