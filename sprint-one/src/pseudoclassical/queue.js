var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.back = 0;
  this.front = 0;
  this.storge = {};
};

Queue.prototype.enqueue = function(value) {
  this.storge[this.back++] = value;
};

Queue.prototype.dequeue = function(value) {
  if (this.size() <= 0) {
    return;
  }
  var removed = this.storge[this.front];
  delete this.storge[this.front];
  this.front++;
  return removed;
};

Queue.prototype.size = function(value) {
  return this.back - this.front;
};

