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
  // IF value equal this node value return true
  if ( value === this.value ) {
    return true;
  // Else IF value > node value AND right is defined
  } else if ( value > this.value && this.right ) {
  // call method on the right 
    return this.right.contains(value);
  // Else IF value < node value AND right is defined
  }else if ( value < this.value && this.left ) {
    return this.left.contains(value);
  }
  
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  let node = arguments[1] || this;
  callback(this.value);

  if ( !node.left && !node.right ) {
    return;
  }

  if ( node.left ) {
    this.left.depthFirstLog(callback);
  }else if ( node.right ) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
