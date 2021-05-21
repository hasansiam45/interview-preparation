class Stack{

    constructor(){
        this.stack = []
    }
    add(item) {
        this.stack.push(item);
    }
    
    remove() {
        if (this.stack.length > 0) {
        return this.stack.pop()
        }
    }
    

}

const friends = new Stack();
friends.add("Jahid");
friends.add("Hasan");
friends.add("Siam");
console.log(friends.stack)
const vip = friends.remove();
console.log(vip);
console.log(friends.stack)

