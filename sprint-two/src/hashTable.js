

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //Get an index for a given key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Check if index in storage is empty
  if (this._storage.get(index) === undefined){
    //Create a bucket
    var bucket = [];
    bucket.push([k,v]);
    this._storage.set(index, bucket);
  }
  var buck = this._storage.get(index)
  for (var i = 0; i < buck.length; i++){
    if (buck[i][0] === k){
      buck[i][1] = v;
    } else {
      buck.push([k,v]);
      this._storage.set(index, buck);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket.length !== undefined){
    for (var i = 0; i < bucket.length; i++){
      if(bucket[i][0] === k){
        return bucket[i][1];
        }
      }
    }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      bucket.splice (i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


