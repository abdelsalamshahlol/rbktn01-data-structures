var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);
    // console.log(node)
    // Check if the list tail is empty
    if ( !list.tail ) {
      list.tail = node;
    }

    // while(list.tail.next !== null){
    //   addToTail(value)
    // }
    
    // else if(!list.tail.next){
    //   list.tail.next = node;
    // }

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
