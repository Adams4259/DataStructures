class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        return this.items.shift();
    }

    size(){
        return this.items.length;
    }

    peek(){
        return this.items[0];
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(7);
queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(56)
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());