class Queue{
    constructor(){
      this.items = [];
    }
    enqueue(element){
        return this.items.push(element);
    }
    dequeue(){
        if(!this.isEmpty()){
            return this.items.shift();
        }
    }
    front(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    isSize(){
        return this.items.length;
    }
}
let queue = new Queue();
queue.enqueue("Amila");
queue.enqueue("John");
queue.enqueue("Jack");
queue.dequeue();
console.log(queue.front());
