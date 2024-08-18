class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.current = null;
        this.head = null;
        this.tail = null;
    }

    pushLast(newData) {
        const newNode = new Node(newData);

        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = this.tail = newNode;
        }

        this.current = this.tail;
    }

    moveLeft() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev
        }
    }

    moveRight() {
        if (this.current && this.current.next) {
            this.current = this.current.next
        }
    }

    removeNext() {
        if (this.current && this.current.next) {
            const nodeToRemove = this.current.next;
            if (this.current !== this.head && nodeToRemove.next) {
                this.current.prev = nodeToRemove.next;
                nodeToRemove.next.prev = this.current;
            } else if (this.current === this.head ) {
               this.current.next.prev = null;
                this.current = this.current.next;
                this.head = this.current;   
            } else {
                this.current.next = null;
                this.tail = this.current;
            }
        }
    }

    insertNode(newData) {
        const newNode = new Node(newData);
        newNode.prev = this.current;
        newNode.next = this.current.next;
        if (this.current.next) {
            this.current.next.prev = newNode;
        }
        this.current.next = newNode;
        if (this.current === this.tail) {
            this.tail = newNode;
        }
        this.current = newNode;
    }

    getString() {
        let result = '';
        let current = this.head;
        while (current) {
            result += current.data;
            current = current.next;
        }
        return result;
    }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin','utf8').trim().split('\n');

const [word_length, command_count] = input[0].split(' ');
const word = input[1];
const commands = input.slice(2,);

const dll = new DoublyLinkedList();

for (const al of word) {
    dll.pushLast(al);
}

commands.forEach((command) => {
    const [a, b] = command.split(' ');

    switch (a) {
        case 'L':
            dll.moveLeft();
            break;
        case 'R':
            dll.moveRight();
            break;
        case 'D':
            dll.removeNext();
            break;
        case 'P':
            dll.insertNode(b);
            break;
    }
})

console.log(dll.getString())