var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // Create new Node
  let node = new BinarySearchTree(value);

  // IF new node value < Parent node value
  if ( value < this.value ) {
    // IF node has value on left
    if ( this.left ) {
      // Call the method again on left 
      this.left.insert(value);
    } else {
      //	Place value on left
      this.left = node;
    }
    // IF new node value > Parent node value
  } else {
    // IF node has a value on right
    if ( this.right ) {
      // Call the method again right
      this.right.insert(value);
    } else {
      //  Place value on right
      this.right = node;
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // body...
};

BinarySearchTree.prototype.depthFirstLog = function(value) {
  // body...
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
