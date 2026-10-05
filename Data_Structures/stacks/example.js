class Stack {
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(!this.isEmpty()){
            return this.items.pop();
        }
        
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    isClear(){
       return this.items = [];
    }
    isSize(){
        return this.items.length;
    }

}
let stack = new Stack();
stack.push(23);
stack.push(25);
stack.push(27);
stack.push(29);
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.isSize());

