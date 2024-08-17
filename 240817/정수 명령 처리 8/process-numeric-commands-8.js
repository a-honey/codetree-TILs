class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.nodeNum = 0;
    }

    pushFront(newData) {
        const newNode = new Node(newData);
        newNode.next = this.head;

        if (this.head != null) {
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.prev = null;

        this.nodeNum += 1;
    }

    pushBack(newData) {
        const newNode = new Node(newData);
        newNode.prev = this.tail;

        if (this.tail != null) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode; 
            this.tail = newNode;
        }
        newNode.next = null;

        this.nodeNum += 1;
    }

    popFront() {
        if (this.head === null) {
            console.log("List is empty");
        } else if (this.head.next == null) {
            const temp = this.head;

            this.head = null;
            this.tail = null;
            this.nodeNum = 0;

            return temp.data;
        } else {
            const temp = this.head;
            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;

            this.nodeNum -= 1;
            return temp.data;
        }
    }

    popBack() {
        if (this.tail == null) {
            console.log("List is empty");
        } else if (this.tail.prev == null) {
            const temp = this.tail;
            
            this.head = null;
            this.tail = null;
            this.nodeNum = 0;

            return temp.data;
        } else {
            const temp = this.tail;
            temp.prev.next = null;
            this.tail = temp.prev;
            temp.prev = null;

            this.nodeNum -= 1;
            return temp.data;
        }
    }

    size() {
        return this.nodeNum;
    }

    empty() {
        return this.nodeNum == 0 ? 1 : 0;
    }

    front() {
        if (this.head == null) {
            console.log("List is empty")
        } else {
            return this.head.data;
        }
    }

    back() {
        if (this.tail == null) {
            console.log('List is empty')
        } else {
            return this.tail.data;
        }
    }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const commands = input.slice(1,);

const l = new DoublyLinkedList();

commands.forEach((command)=>{
    const row = command.split(' ');

    const action = row[0];
    const payload = row[1];

    switch (action) {
        case 'push_front':
            l.pushFront(payload);
            break;
        case 'push_back':
            l.pushBack(payload);
            break;
        case 'pop_front':
            console.log(l.popFront());
            break;
        case 'pop_back':
            console.log(l.popBack());
            break;
        case 'front':
            console.log(l.front());
            break;
        case 'back':
            console.log(l.back());
            break;
        case 'size':
            console.log(l.size());
            break;
        case 'empty':
            console.log(l.empty());
            break;
    }
})