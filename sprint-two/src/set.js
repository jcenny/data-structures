var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  return this._storage[item] = item;
};

setPrototype.contains = function(item) {
  var isTrue = false;
  for (var key in this._storage) {
    if (key === item) {
      isTrue = true;
    }
  }
  return isTrue;
};

setPrototype.remove = function(item) {
  if(this._storage[item]){
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
