class Myself{
    #salary = 25000;
    constructor(name) {
        this.name = name;
    }
    expense() {
        console.log(`My expenses is ${this.#salary/5} from my Salary`)
    }
}

const siam = new Myself("Siam");
siam.expense()

// console.log(siam.#salary)