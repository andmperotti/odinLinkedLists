import NodeInstance from "./node_instance.js";

export default class LinkedList {
  constructor() {}

  //adds a new node containing value to the end of the list
  append(value) {
    //i think we need a way to add a first node, aka check if nodes or empty list
    if (Object.keys(this) === 0) {
      this.concat(new NodeInstance(value));
    } else {
      //iterate to end of linked list and add this value as a node
      let tempNode = this;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new NodeInstance(value);
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {}

  //returns the total number of nodes in the list
  size() {}

  //returns the first node in the list
  head() {}

  //returns the last node in the list
  tail() {}

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
    let resultString = ``;
    let currentNode = this;
    // while (currentNode.next !== null) {
    //   resultString.concat(`${currentNode.value} -> `);
    // }
    resultString.concat("null");
  }

  //that inserts a new node with the provided value at the given index.
  insertAt(value, index) {}

  //that removes the node at the given index.
  removeAt(index) {}
}
