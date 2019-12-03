var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple = [k, v];
  
  if ( !bucket ) {
  	bucket = [];
  }
  // if (bucket)
  bucket.unshift(tuple);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i ++) {
    if ( k === bucket[i][0] ) {
      	return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
  	if ( k === bucket[i][0] ) {
  		delete bucket[i][0];
  	}
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */


