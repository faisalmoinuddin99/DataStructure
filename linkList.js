class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.start = null;
    this.tn = null;
    this.size = 0;
  }
  // Append
  append(data) {
    let nn = new Node(data);

    if (this.start == null) {
      this.start = nn;
    } else {
      this.tn = this.start;
      while (this.tn.next != null) {
        this.tn = this.tn.next;
      }
      this.tn.next = nn;
    }
    this.size++;
  }
  //insert at first
  insertFirst(data) {
    this.start = new Node(data, this.start);
  }
  // inserting at index
  insertAtIndex(data, index) {
    // if position is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    // if want to insert at first
    if (index === 0) {
      this.start = new Node(data, this.start);
      return;
    }
    let nn = new Node(data);
    let tn, pre;
    //set tn to start
    tn = this.start;
    let count = 0;
    while (count < index) {
      pre = tn; // node before index
      count++;
      tn = tn.next; // node after index
    }
    nn.next = tn;
    pre.next = nn;
    this.size++;
  }

  //get Element
  getAt(index) {
    let tn = this.start;
    let count = 0;
    while (tn) {
      if (count == index) {
        console.log(tn.data);
      }
      count++;
      tn = tn.next;
    }
    return null;
  }
  // delete
  removingAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    //Remove First
    let tn = this.start;
    let pre;
    let count = 0;
    if (index === 0) {
      this.start = tn.next;
    } else {
      while (count < index) {
        count++;
        pre = tn;
        tn = tn.next;
      }
      pre.next = tn.next;
    }
    this.size--;
  }

  //clear list
  clearList() {
    this.start = null;
    this.size = 0;
  }
  //Display
  display() {
    let tn = this.start;
    if (this.start == null) {
      console.log("Linked List is empty");
      return;
    }
    console.log("The Linked List values are:");
    while (tn != null) {
      console.log(tn.data);
      tn = tn.next;
    }
  }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.removingAt(2);
//ll.insertAtIndex(50, 2);
//console.log(ll);
ll.clearList();
ll.display();
//ll.getAt(2);
