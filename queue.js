class Queue{
    constructor() {
        this.queue = []
    }
    
    add(item) {
        this.queue.push(item)
    }
    
    remove() {
        if (this.queue.length) {
            return this.queue.shift()
        }
    }
}

const friends = new Queue();
friends.add("Neamot");
friends.add("Ara");
friends.add("Rayhana");
friends.add("Dilshat");
friends.add("Srabony");
console.log(friends.queue)
const firstPerson = friends.remove();
console.log(firstPerson);
console.log(friends.queue)