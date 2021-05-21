class Pen{
    constructor(name, color, price) {
        
        this.name = name;
        this.color = color;
        this.price = price || 5;

    }

}


const econo = new Pen("Econo Dx", "white", 5);
const matador = new Pen("Matador", "Red", 10);

// console.log(econo);
console.log(matador);

