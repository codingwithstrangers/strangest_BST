// we are building a balanced binary tree with Naruto characters
// put all teams in right places but read in alphabetical order

//  create class for data
//  class Node{
//    constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//  };
// };

class TreeNode {
  // this will establish the leader or parent with no children
  constructor(name) {
    this.name = name;
    this.left = null;
    this.right = null;
  }
}

class BalanceTree {
  constructor() {
    this.root = null;
    this.nodes = []; //this will hold all the nodes and sort at the end
  }
  // there are pros and cons to balanced no vs later read and write speed
  addNode(name) {
    this.nodes.push(name); //hokage, leader or ninja to the arrary
  }
  // the method to build a balanced tree from arrary
  buildBalanceTree() {
    // sort in alphabetical order to find best bts structure or pathway
    this.nodes.sort();
    // recursive method are counting down to a point without being promted
    this.root = this._buildBalancedTreeRecursive(
      this.nodes,
      0,
      this.nodes.length - 1
    );
  }

  // next function
  // sortedNodes will be used to arrange the array in alphabetical order
  //start will be the index of the current subarray always starts at 0
  //end the ending index of the current subarray intial minus 1
  _buildBalancedTreeRecursive(sortedNodes, start, end) {
    // the rule of cool is start is greater than end return null
    if (start > end) {
      return null;
    }

    //  we need to get the middle element to make the root for the next node
    // we need two variable one for middle and to place a node in the middle
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(sortedNodes[mid]);

    // so now check the tree recursively from left to right
    // left we minus from the Array
    node.left = this._buildBalancedTreeRecursive(sortedNodes, start, mid - 1);
    // i we gop right we add to the mid
    node.right = this._buildBalancedTreeRecursive(sortedNodes, mid + 1, end);
    // this should be the constructed left end or mid tree or null
    return node;
  }

  // setting up the path to display the tree
  inorderPathway(node, result = []) {
    if (node !== null) {
      this.inorderPathway(node.left, result);
      result.push(node.name);
      this.inorderPathway(node.right, result);
    }
    return result;
  }

  removeNode(name) {
    this.nodes = this.nodes.filter(node => node !== name);
  }
}

module.exports = { TreeNode, BalanceTree };



