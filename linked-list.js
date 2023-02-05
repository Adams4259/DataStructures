// Node containing the data and reference to next node
class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

// Class to hold our data strucure
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    //Complexity: O(1)
    prepend(value){
        const newNode = new Node(value,this.head);

        this.head = newNode;
        this.tail = this.tail ? this.tail : newNode;

        return this;
    }

    //Complexity: O(1)
    append(value){
        const newNode = new Node(value);

        // If the linked list is empty
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

            return;
        }

        //Make the last item refer to the newly added node
        this.tail.next = newNode;
        //make the newly added node the last/tail
        this.tail = newNode;
    }

    //Complexity: O(n)
    traverse(){
        let currentNode = this.head;

        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    //Complexity: O(n)
    find(value){
        let currentNode = this.head;

        while(currentNode){
            if(currentNode.data === value){
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    //Complexity: O(1)
    deleteHead(){
        if(!this.head){
            this.head = this.head.next;
        } else{
            this.head = null;
            this.tail = null;
        }
    }

    toArray(){
        const items = [];
        let currentNode = this.head;

        while(currentNode){
            items.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return items;
    }
}

const list = new LinkedList();

list.append(4);
list.append(6);
list.append(8);

console.log(list.toArray());

list.prepend(1);
console.log(list.toArray());

list.find(6);
list.deleteHead();