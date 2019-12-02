var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = new Array();
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);

  return node;
};

treeMethods.contains = function(target) {
  // If value equal target return true
  if (this.value === target) {
    return true;
  }
  // Else loop children 
  for (var i = 0; i < this.children.length; i++) {
    // call the function on the children
    var check = this.children[i].contains(target);
    if (check) {
      return check;
    }
    // console.log(this.children[i], t) // for debugging purpose
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
