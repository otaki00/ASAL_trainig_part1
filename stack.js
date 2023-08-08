class Stack {
    constructor() {
        this.items = [];
    }


    // Pushes an element onto the stack (numbers only)
    push(element) { 
        this.items.push(element)
    }


    // Remove the last element from the stack and return it if exists
    pop() { 
        this.items.pop()
    }


    // Remove the first element from the stack and return it if exists
    trim() { 
        this.items.shift()
    }


    // Checks if the stack is empty
    isEmpty() { 
        return this.items.length? false: true
    }


    // Return stack size
    size() { 
        return this.items.length
    }


    // Returns the top element of the stack if it exists
    peek() { 
        return this.items[this.items.length-1]
    }


    // Returns a space-separated string that contains all stack elements
    displayStack(stack) { 
        console.log(this.items);
    }


    // Return a new stack in reverse order
    reverse_stack(stack) { 
        this.items.reverse()
    }


    // Return the max element in the stack (return -1 if it does not exists)
    max() { 
        let max = -1
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
        let min = 9999999
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
        return this.items.map(item => {
            if (item == element){
                return item
            }
        })
    }

    // Return a non-duplicated stack
    set(element) { 
        let mySet = new Set()
        this.items.map(item => {
            mySet.add(item)
        })
        return mySet
    }


    // Return the n-th element from the top
    top(n) { 
        let lengthOfList = this.items.length + 1 
        return this.items[lengthOfList - n ] 
    }


    // Return the n-th element from the bottom
    bottom(n) { 
        return this.item[n-1]
    }


    // Remove the element at the given index if it exists
    remove(index) { 
        this.items.slice(index, 1)
    }
}


let clasd = new Stack()
clasd.push(3)
clasd.push(33)
clasd.push(34)
clasd.displayStack()
console.log(clasd.peek());