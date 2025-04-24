import NodeInstance from "./node_instance.js";

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //adds a new node containing value to the end of the list
  append(value) {
    if (this.head === null) {
      //if the linked list is empty, create an instance of the NodeInstance class, and assign it to the head property of the linked list
      this.head = new NodeInstance(value);
    } else {
      //otherwise, create a temp variable and point it to the first node in the linked list, iterate over each node and point to it using that temporary variable until the last node in the linked list
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      //add a new node to the linked list by changing the last nodes next property to point to a new node instance we create with the value argument
      tempNode.next = new NodeInstance(value);
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    //if list is empty, assign  new node to the head property of the linked list
    if (this.head === null) {
      this.head = new NodeInstance(value);
    } else {
      //otherwise set up a temp variable to reference the current first node in the linked list, then change the first node in the linked list by changing the head pointer to a new node instance, and then change the next property of that new node to point to the previous head node
      let previousFirstNode = this.head;
      this.head = new NodeInstance(value);
      this.head.next = previousFirstNode;
    }
  }

  //returns the total number of nodes in the list
  size() {
    //create a variable which is a counter
    let nodeCount = 0;
    //use a while loop to iterate over nodes until you read null and increment the counter variable appropriately
    let tempNode = this.head;
    while (tempNode !== null) {
      nodeCount++;
      tempNode = tempNode.next;
    }
    //return counter after iteration has completed
    return nodeCount;
  }
  //returns the first node in the list or null if no nodes
  head() {
    return this.head;
  }

  //returns the last node in the list
  tail() {
    //if the linked list is empty return null, as in there are no nodes in the list
    if (this.head === null) {
      return null;
    } else {
      //otherwise if there are nodes, ,create a temp variable to point at the first node
      let tempNode = this.head;
      //iterate until you reach the element before the last element, and change the temp variable to the next node
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      //return the last node, which is pointing to the tail node of the linked list
      return tempNode;
    }
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
    //check if the list is empty
    if (this.head === null) {
      return null;
    } else {
      //I think we'll use iteration and build a string for each node that we'll combine to make a result string
      // parentheses if there is a value property/obj!==null, value, close parentheses, arrow, repeat unless null then null
      let stringArr = [];
      let currentNode = this.head;
      while (currentNode.next !== null) {
        stringArr.push(`(${currentNode.value}) -> `);
        currentNode = currentNode.next;
      }
      stringArr.push("null");
      return stringArr.join("");
    }
  }

  //that inserts a new node with the provided value at the given index.
  insertAt(value, index) {}

  //that removes the node at the given index.
  removeAt(index) {}
}
