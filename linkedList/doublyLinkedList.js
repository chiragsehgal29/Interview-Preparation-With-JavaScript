// Creating Node and DoublyLinkedlist

class Node{
    constructor(data , next = null , prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
}

// Insert at Beginning
DoublyLinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data, this.head, null)

    if(this.head){
        this.head.prev = newNode

    }
    this.head = newNode
    if(!this.tail){
        this.tail = newNode
    }
}

// Insert at the End
DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data , null , this.tail)

    if(this.tail){
        this.tail.next = newNode
    }

    this.tail = newNode
    if(!this.head){
        this.head = newNode
    }
}

// Insert after a given Node
DoublyLinkedList.prototype.insertAfterNode = function(data , prevNode){
    const newNode = new Node(data , prevNode.next , prevNode.prev)

    if(!prevNode){
        console.log("The given Prev Node cannot be null")
        return
    }
    if(prevNode.next){
        prevNode.next.prev = newNode
    }
    
    prevNode.next = newNode

    if(!prevNode.next){
        this.tail = newNode
    }
}

//Delete From Start
DoublyLinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        console.log(" Doubly Linked List is Empty !!")
        return
    }

    if(this.head === this.tail){
        this.head = null
        this.tail = null
    } else{
        this.head = this.head.next
        this.head.prev = null
    }
}

// Delete From End
DoublyLinkedList.prototype.deleteLastNode = function(){
    if(!this.tail){
        console.log(" Doubly Linked List is Empty !!")
        return
    }

    if(this.head === this.tail){
        this.head = null
        this.tail = null
    } else{
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

// Reverse a Doubly Linked List
DoublyLinkedList.prototype.reverse = function(){
    let tempNode = null

    let curr = this.head
    while(curr){
        // swapping prev with next
        tempNode = curr.prev
        curr.prev = curr.next
        curr.next = tempNode

        // move to next node
        curr = curr.next
    }

    if(tempNode != null){
        this.tail = this.head
        this.head = temp.prev
    }
}
