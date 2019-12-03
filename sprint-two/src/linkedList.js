var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create new node
    let node = Node(value);
    // If head doesn't have a value
    if (!list.head) {
      // Assign the first node to it
      list.head = node;
    }

    // If tail is not null
    if (list.tail) {
      // Assign tail next to the new node
      list.tail.next = node;
    }

    // Assign the tail to new node
    list.tail = node;
  };

  list.removeHead = function() {
    let removedNode = list.head;
    list.head = removedNode.next;

    return removedNode.value;
  };

  list.contains = function(target) {
    //  IF the tail value
    //    return true
    if (list.tail.value === target) {
      return true;
    } else {
      let currNode = list.head;
      //    While there is next
      while (currNode !== null) {
        //      Check the next of tail
        if (currNode.value === target) {
          return true;
        }

        currNode = currNode.next;
      }
    }

    return false;
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
