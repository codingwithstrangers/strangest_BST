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
    constructor(){
        this.root = null;
        this.nodes = []; //this will hold all the nodes and sort at the end
    }
    // there are pros and cons to balanced no vs later read and write speed
    addNode(name){
        this.nodes.push(name); //hokage, leader or ninja to the arrary
    }
    // the method to build a balanced tree from arrary
    buildBalanceTree(){
        // sort in alphabetical order to find best bts structure or pathway
        this.nodes.sort();
        // recursive method are counting down to a point without being promted
        this.root = this._buildBalancedTreeRecursive(this.nodes, 0, this.nodes.length - 1);

    }

    // next function 
    _buildBalancedTreeRecursive(???){

        returns null; //because it will build tree other wise
    }
}



//*******************************************

// this is how the root is established and pointed to
class TheVillage {
    constructor(){
        this.root = null
    }
    // method to insert Hokage as the root
    insertHokage(hokage){
        // this should be inserted into all empty trees? 
        if(this.root === null){
            this.root = new TreeNode(hokage)
        }
    }

    //now to put the hokage in the village 
    insertLeader(hokage, leader){
        // attach leader to hokage (parent)
        const hokagNode = this.findLeader(this.root, hokage)
        // now that hokge which is the parent is know we can
        // attach children aka leader 
        if(hokagNode){
            hokagNode.left = this.insertTeamLead(hokagNode.left, leader);
        }
    }
}

