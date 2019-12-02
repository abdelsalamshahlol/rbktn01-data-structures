class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.back = 0;
    this.front = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.back++] = value;
  }

  dequeue() {
    if ( this.size() <= 0 ) {
      return;
    }
    var removed = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return removed;
  }

  size() {
    return this.back - this.front;
  }
}

