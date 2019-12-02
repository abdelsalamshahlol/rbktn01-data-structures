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
    // get the last value 
    var deletes = storage[key - 1]; 
    // decrease the size of storage
    delete storage[key - 1];
    key--;
    // return the last value
    return deletes;
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
