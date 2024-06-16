// Creating Node and Linkedlist
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

// Insert at the Start
LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data, this.head)  // Create and Set the new node's next to the current head
    this.head = newNode   // Set the head to the new node

}

// Insert at the End
LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data)

    if (!this.head) {
        this.head = newNode
        return
    }

    let curr = this.head

    while (curr.next) {
        curr = curr.next
    }
    curr.next = newNode
}

// Insert at a given node
LinkedList.prototype.insertAtGivenNode = function (data, prev) {
    if (!prev) {
        console.log("The given prev node cannot be null")
        return
    }

    const newNode = new Node(data, prev.next)
    prev.next = newNode
}


// Delete from Start
LinkedList.prototype.deleteFirst = function (){

    if(!this.head){
        return
    }

    this.head = this.head.next
}


// Delete from End
LinkedList.prototype.deleteEnd = function (){

    if(!this.head){
        return  // nothing to delete if the list is empty
    }

    if(!this.head.next){
        this.head = null // if there is only one node
    }

    let secondLast = this.head

    while(secondLast.next.next){
        secondLast = secondLast.next
    }

    secondLast.next = null
}


// Delete any given node
LinkedList.prototype.deleteByKey = function(key){

    if(!this.head){
        return  // nothing to delete if the list is empty
    }

    if(this.head.data === key){
        this.head = this.head.next   // data found at head
    }

    let curr = this.head

    while(curr.next){
        if(curr.data === key){
            curr = curr.next
        }

        curr = curr.next
    }

    console.log("No node found with key: ", key)

}


// Traverse the LinkedList
LinkedList.prototype.print = function () {
    let curr = this.head
    let list = []
    while (curr) {
        list.push(curr.data)
        curr = curr.next
    }

    console.log(list.join(" -> "))
}

// Search for a node with given data
LinkedList.prototype.searchNode = function(data){
    let curr = this.head
    while(curr){
        if(curr.data === data){
            return curr
        }
        curr = curr.next
    }
    return null
}

// Reverse a Linked List
LinkedList.prototype.reverse = function(){

    let curr = this.head
    let prev = null
    let next = null

    while(curr.next){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    this.head = prev
}


// Implementation 
let l1 = new LinkedList()

l1.insertAtBeginning(1)

l1.insertAtEnd(2)
l1.insertAtEnd(3)
l1.insertAtEnd(4)
l1.insertAtEnd(5)

const prevNode = l1.searchNode(3)

l1.insertAtGivenNode(32 , prevNode)

l1.deleteFirst()
l1.reverse()

l1.print()


