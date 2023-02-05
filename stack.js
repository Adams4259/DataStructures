class Stack{
    constructor(){
        // We can also use liked list here
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        return this.items.pop();
    }

    size(){
        return this.items.length;
    }
    peek(){
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(6);
stack.push(2);
stack.push(8);
stack.push(65);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());