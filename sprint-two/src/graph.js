
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //Creating an empty object
  var obj = {};
  //Setting the empty object's properties to value/edges
  //value property will be the input "node"
  obj.value = node;
  //edges property will be set to an empty array
  obj.edges = {};
  //Add said object to graph.nodes array
  this.nodes.push(obj);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var isTrue = false;
  for (var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].value === node){
      isTrue = true;
      break;
    }
  }
  return isTrue;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //Go through each node
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i,1);
    }
    if(this.nodes[i]){
      if (this.nodes[i].edges[node]){
        delete this.nodes[i].edges[node];
      }
  }
  }
  //Check if target is the same as the node value we are looking at
  //If it is the same, then remove it (splicing)
  //
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var isTrue = false;
  for (var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].value === fromNode && this.nodes[i].edges[toNode]){
      isTrue = true;
    }
  }
  return isTrue;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++){
    if (this.nodes[i].value === fromNode){
      this.nodes[i].edges[toNode] = toNode;
    }
    if (this.nodes[i].value === toNode){
      this.nodes[i].edges[fromNode] = fromNode;
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode && this.nodes[i].edges[toNode]) {
      delete this.nodes[i].edges[toNode];
    }
    if (this.nodes[i].value === toNode && this.nodes[i].edges[fromNode]) {
        delete this.nodes[i].edges[fromNode];
    }
  }
 };
 // Pass in a callback which will be executed on each node of the graph.
 Graph.prototype.forEachNode = function(cb) {
   for (var i = 0; i < this.nodes.length; i++) {
     cb(this.nodes[i].value);
   }
 };