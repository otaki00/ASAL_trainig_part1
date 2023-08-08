class Stack {
    constructor() {
        this.items = [];
    }


    // Pushes an element onto the stack (numbers only)
    push(element) { 
        if(typeof(element) == 'number')
            this.items.push(element)
    }


    // Remove the last element from the stack and return it if exists
    pop() { 
        if(!this.isEmpty())
            this.items.pop()
    }


    // Remove the first element from the stack and return it if exists
    trim() { 
        if (!this.isEmpty())
            this.items.shift()
    }


    // Checks if the stack is empty
    isEmpty() { 
        return !this.items.length
    }


    // Return stack size
    size() { 
        if (!this.isEmpty())
            return this.items.length
        else 
        return 0
    }


    // Returns the top element of the stack if it exists
    peek() { 
        if(!this.isEmpty())
        return this.items[this.items.length-1]
    }


    // Returns a space-separated string that contains all stack elements
    displayStack(stack) { 
        return this.items.join(" ")
    }


    // Return a new stack in reverse order
    reverse_stack(stack) { 
        // this.items.reverse()
        let tempStak = this
        tempStak.items.reverse()
        return tempStak
    }


    // Return the max element in the stack (return -1 if it does not exists)
    max() { 
        let max = Number.MIN_SAFE_INTEGER
        for(let item in this.items){
            if (item > max){
                max = item
            }
        }
        return max
        // or 
        // return Math.max(this.items)
    }


    // Return the min element in the stack (return -1 if it does not exists)
    min() { 
        let min = Number.MAX_SAFE_INTEGER
        for (let item in this.items) {
            if (item < min) {
                min = item
            }
        }
        return min
        // or
        // return Math.min(this.items)
    }


    // Remove all the elements from the stack
    clear() { 
        this.items = []
    }


    // Find the element in the stack
    find(element) { 
        let itemFound = null
        this.items.map(item => {
            if (item === element){
                itemFound = item
            }
        })

        return itemFound
    }

    // Return a non-duplicated stack
    set(element) { 
        let mySet = new Set()
        this.items.map(item => {
            mySet.add(item)
        })
        let newStack = this
        newStack.items = Array.from(mySet)
        return newStack
    }


    // Return the n-th element from the top
    top(n) { 
        let lengthOfList = this.items.length 
        return this.items[lengthOfList - n ] 
    }


    // Return the n-th element from the bottom
    bottom(n) { 
        return this.items[n-1]
    }


    // Remove the element at the given index if it exists
    remove(index) { 
        this.items.splice(index-1, 1)
    }
}


let clasd = new Stack()
clasd.push(1)
clasd.push(33)
clasd.push(34)
clasd.push(34)
clasd.push(36)
console.log(clasd.displayStack());
// console.log(clasd.remove(4));
console.log(clasd.set().displayStack());