var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);
    // Check if the list tail is empty
    // list.head = list.tail;
    node.next = list.head;
    list.head = node;
    list.tail = list.head;
    // list.head = list.head;
  };

  list.removeHead = function() {
    let next = list.head;
    list.head = list.next.head;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
