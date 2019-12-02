class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }

  push(value) {
    this.storage[this.key++] = value;
  }

  pop() {
    if (this.key <= 0) {
      return;
    }

    --this.key;
    let deleted = this.storage[this.key];
    delete this.storage[this.key];

    return deleted;
  }

  size() {
    return this.key;
  }

}