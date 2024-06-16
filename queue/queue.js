class Queue{
    constructor(){
        this.queue = []
    }

    // method to add data to the queue
    enqueue(data){
        this.queue.push(data)
    }

    // method to remove data from queue
    dequeue(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        this.queue.shift()
    }

    // method to check if the queue is empty
    isEmpty(){
        return this.queue.length === 0
    }

    // method to get the peek of queue
    peek(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        return this.queue[0]
    }

    // method to get the size of queue
    size(){
        return this.queue.length
    }

    // method to empty the queue
    clear(){
        this.queue = []
    }

    // method to traverse the queue
    printQueue(){
        let str =""
        for(let i = 0 ; i <this.queue.length; i++){
            str += this.queue[i] + "\n"
        }
        return str
    }
}

// Implementation using Examples

let myqueue = new Queue()
myqueue.enqueue(1)
myqueue.enqueue(2)
myqueue.enqueue(3)
myqueue.enqueue(4)

myqueue.dequeue()

console.log(myqueue.isEmpty()) // returns false because queue is not empty
console.log(`The Size of the Queue is ${myqueue.size()}`)
console.log(myqueue.printQueue())