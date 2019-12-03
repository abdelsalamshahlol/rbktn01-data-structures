var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // First create a node
  let node = new BinarySearchTree(value);

  // If new node value < parent node value
  if ( value < this.value ) {
    if ( this.left ) {
      this.left.insert(value);
    } else {
      //	Place on left
      this.left = node;
    }
    // If new node value > parent node value
  } else if ( value > this.value ) {
    if ( this.right ) {
      this.right.insert(value);
    } else {
      //  Place on right
      this.right = node;
    }
  }
  // return node;
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
