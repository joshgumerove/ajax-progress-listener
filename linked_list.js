class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    let currentHead = this.head;
    let nextHead = newNode;
    nextHead.next = currentHead;
    this.head = nextHead;
  }

  push(value) {
    const newNode = new Node(value);
    let currentTail = this.tail;
    let nextTail = newNode;
    currentTail.next = nextTail;
    this.tail = nextTail;
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode.value) {
      console.log(currentNode.value, "current");
      if (!currentNode.next) {
        console.log("this is the value of tail: ", currentNode);
        return;
      }
      let nextNode = currentNode.next;
      currentNode = nextNode;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list_one = new LinkedList();
list_one.add(5);

list_one.add(20);
console.log(list_one.head);
console.log(list_one.tail);
console.log(list_one.tail, "tail");

list_one.push(400);
list_one.push(454);
console.log(list_one.tail);
console.log(list_one);
list_one.traverse();
