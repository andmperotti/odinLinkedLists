import NodeInstance from "./node_instance.js";

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //adds a new node containing value to the end of the list
  append(value) {
    if (Object.keys(this).length === 0) {
      //if the linked list is empty, create an instance of the NodeInstance class, and assign in the properties of that node
      Object.assign(this, new NodeInstance(value));
    } else {
      //otherwise we need to iterate to find the last node in the linked list
      let tempNode = this;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      //change the next property value of the last node(or even first if only one node exists), to point to a new node
      tempNode.next = new NodeInstance(value);
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    //if list is empty, assign in properties of new Node instance
    if (Object.keys(this).length === 0) {
      Object.assign(this, new NodeInstance(value));
    } else {
      //otherwise replace the first node's value property value with the value arguments data, and change its first node to point at the previously first node
      let previousFirstNode = structuredClone(this);
      this.value = value;
      this.next = previousFirstNode;
    }
  }

  //returns the total number of nodes in the list
  size() {
    //create a variable which is a counter
    let nodeCount = 0;
    //use a while loop to iterate over nodes until you read null and increment counter
    let tempNode = this;
    while (tempNode !== null) {
      nodeCount++;
      tempNode = tempNode.next;
    }
    //return counter after iteration has completed
    return nodeCount;
  }

  //returns the first node in the list
  head() {
    return this;
  }

  //returns the last node in the list
  tail() {
    let tempNode = this;
    //iterate until you reach the element before the last element, and change the temp variable to the next node
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }

  //returns the node at the given index
  at(index) {}

  //removes the last element from the list
  pop() {}

  //returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {}

  //returns the index of the node containing value, or null if not found.
  find(value) {}

  //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    //I think we'll use iteration and build a string for each node that we'll combine to make a result string
    // parentheses if there is a value property/obj!==null, value, close parentheses, arrow, repeat unless null then null
    let stringArr = [];
    let currentNode = this;
    while (currentNode.next !== null) {
      stringArr.push(`(${currentNode.value}) -> `);
      currentNode = currentNode.next;
    }
    stringArr.push("null");
    return stringArr.join("");
  }

  //that inserts a new node with the provided value at the given index.
  insertAt(value, index) {}

  //that removes the node at the given index.
  removeAt(index) {}
}
