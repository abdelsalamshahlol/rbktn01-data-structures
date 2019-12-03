var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // First create a node
  let node = arguments[1] || new BinarySearchTree(value);
  let x = arguments[1];

  if (x === undefined) {
    console.log(this, node, x);
    return;
  }

  // If new node value < parent node value
  if ( value < this.value ) {
    //	Place on left
    this.left = node;
    // If new node value > parent node value
  } else if ( value > this.value ) {
    // 	Place on right
    this.right = node;
  }
  this.insert(value, this);
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
