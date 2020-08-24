class Node{
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

class BinraySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root){
           this.root = newNode;
        } else {
            let current = this.root;
            while(current) {
                if(val === current.value) return undefined;
                if(val < current.value) {
                    if(current.left){
                      current = current.left;
                    } else {
                       current.left = newNode;
                       return this;
                    }
                } else if(val > current.value) {
                    if(current.right){
                        current = current.right
                    } else {
                        current.right = newNode;
                        return this;
                    }
                }
            }
        }
        return this;
    }

    contains(val){
        if(!this.root){
            return false;
        }
        let current = this.root;
        while(current){
            if(val === current.value){
                return true;
            } else if(val < current.value){
                if(current.left){
                     current = current.left;
                }else{
                    return false;
                }
            } else if(val > current.value){
                if(current.right){
                     current = current.right;
                }else{
                    return false;
                }
            }
        }
    }
	
	BFS = () => {
        const queue = [], data = [], current = null;
        queue.push(this.root)
        while (queue.length) {
            current = queue.shift();
            data.push(current.value);
            if(current.left) queue.push(current.left);
            if(data.right) queue.push(current.right);
        }
        return data;
    }

    // self -> all left -> all right 
    DFSPreOrder = () => {
        const data = [];
        function tra (node){
            data.push(node.value);
            if(node.left) tra(node.left);
            if(node.right) tra(node.right);
        }
        tra(this.root);
        return data;
    }

    // all left -> all right -> self
    DFSPostOrder = () => {
        const data = [];
        function tra(node){
            if(node.left) tra(node.left);
            if(node.right) tra(node.right);
            data.push(node.value)
        }
        tra(this.root);
        return data;
    }

    // all left -> self -> all right
    DFSInOrder = () => {
        const data = [];
        function tra(node){
            if(node.left) tra(node.left);
            data.push(node.value)
            if(node.right) tra(node.right);
        }
        tra(this.root);
        return data;
    }
}

let binarySearchTree = new BinraySearchTree();
binarySearchTree.insert(11);
binarySearchTree.insert(22);
binarySearchTree.insert(14);
binarySearchTree.insert(2);
binarySearchTree.insert(7);
