class Animal{
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    
    speak() {
        console.log(`I am ${this.name}.  ${this.sound} ${this.sound}`)
    }
}


const dog = new Animal("Doggy", "Gheu");
const cat = new Animal("Billy", "Meaw");
const cow = new Animal("Cow", "Hamba");
const goat = new Animal("Goat", "Bhee");


dog.speak()
cat.speak()
cow.speak()
goat.speak()