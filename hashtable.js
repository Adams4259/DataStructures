class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class Table{
    constructor(size){
        this.cells = new Array(size);
    }

    hash(key){
        let total = 0;

        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }

        return total % this.cells.length;
    }

    insertAtPosition(key, value){
        const hash = this.hash(key);

        if(!this.cells[hash]){
            this.cells[hash] = new Node(key, value);
        }else{
            let node = this.cells[hash];

            while(node.next){
                if(node.next.key === key){
                    node.next.value = value;
                    return;
                }

                node = node.next;
            }

            node.next = new Node(key, value);
        }
    }

    get(key){
        const hash = this.hash(key);
        if(!this.cells[hash]){
            return null;
        }

        let node = this.cells[hash];

        while(node){
            if(node.key === key){
                return node.value;
            }

            node = node.next;
        }

        return null;
    }

    getAll(){
        const table = [];

        for(let i = 0; i < this.length; i++){
            const cell = [];

            let node = this.cells[i];

            while(node){
                cell.push(node.value);
                node = node.next;
            }

            table.push(cell);
        }

        return table;
    }
}

const table = new Table(5);
table.insert("Mil", 1);
table.insert("Bil", 2);
table.insert("Tril", 3);
table.insert("Qui", 4);
table.insert("Zil", 5);

console.log(table.get('bil'));
console.log(table.size());