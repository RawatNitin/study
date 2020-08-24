class Node {
    constructor(value){
        this.value = value;
        this.next = undefined;
    }
}

class LinkedList{
    constructor(){
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if(!this.length){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.length){
            return;
        } else if(this.length === 1){
            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return this;
        }

        var current = this.head;
        var tail = this.tail;
        while(current) {
            if(current.next === this.tail) {
              current.next = undefined;
              this.length--;
            }
            current = current.next;
        }
        return tail; // Removed old tail
    }

    // Remove from begining
    shift(){
        if(!this.length) {
            return undefined;
        } else if(this.length === 1) {
            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return;
        }
        var newHead = this.head.next;
        var oldHead = this.head;
        this.head = newHead;
        this.length--;
        return oldHead;
    }

    // Add to the begining
    unShift(val){
        var node = new Node(val);
        if(!this.length){
            this.head = node;
            this.tail = node;
        } else{
            var oldHead = this.head;
            this.head = node;
            this.head.next = oldHead;
        }
        this.length++;
        return this;
    }

    // get VALUE from INDEX
    get(index){
        if(index < 0 || !this.length || index >= this.length){
            return undefined;
        }
        var counter = 0;
        var current = this.head;
        while(current){
            if(counter === index){
                return current;
            } else {
                current = current.next;
                counter++;
            }
        }
    }

    // Set VALUE at INDEX
    set(index, value) {
        if(index < 0 || index > this.length){
            return undefined;
        }
        var current = this.head;
        var counter = 0;
        while(current){
            if(counter < index) {
                current = current.next;
                counter++
            } else {
                current.value = value;
            }
        }
    }

    // Insert a new node at any position
    insert(index, val){
        if(index < 0 || index > this.length){
            return false;
        }
        
        if(index === 0){
           return this.unShift(val) ? true : false;
        } else if(index === this.length){
            this.length++;
           return this.push(val) ? true : false;
        } else {
           var newNode = new Node(val);
           var prev = this.get(index - 1);
           var temp = prev.next;
           newNode.next = temp;
           prev.next = newNode;          
           this.length++;
           return true;
        }
    }

    remove(index){
        if(index < 0 || index >= this.length){
            return false;
        }

        if(index === 0){
            this.shift(0) ? true : false;
        } else if(index === this.length - 1){
            this.pop() ? true : false;
        } else {
            let prev = this.get(index - 1);
            let removed = prev.next;
            prev.next = removed.next;
            this.length--;
            return removed;
        }

    }

    reverse(){
        if(!this.length){
            return undefined;
        }
 
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
}

var list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
// list.push(4);

list.reverse();
