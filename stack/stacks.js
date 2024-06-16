class Stack {
    constructor(){
        this.stack = []
    }

    // method to add data to a stack
    push(data){
        this.stack.push(data)
    }

    // method to remove data from stack -> LIFO
    pop(data){
        this.stack.pop(data)
    }

    // method that returns the top value of stack
    top(){
        return this.stack[this.stack.length -1]
    }

    // method to check if the stack is empty
    isEmpty(){
        return this.stack.length === 0
    }

    // method to check the size of stack
    size(){
        return this.stack.length
    }

    // method to empty the stack
    clear(){
        this.stack = []
    }

    // method to search for an element in stack
    contains(element){
        return this.stack.includes(element) // using built in JS method
    }

    // method to reverse the stack
    reverse(){
        this.stack.reverse()  // using built in JS method
    }

    //method to traverse
    printStack(){
        let str = ""
        let i = 0
        while(i < this.stack.length){
            str += this.stack[i] + "\n"
            i++
        }
        return str
    }
}

// Implementation using Examples

let stack1 = new Stack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(4)

stack1.pop()
stack1.reverse()
console.log(stack1.isEmpty())  // returns false because stack is not empty
console.log(stack1.contains(2)) // returns true because 2 is in the stack

console.log(stack1.printStack())  // prints the stack elements