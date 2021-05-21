class Dictionary{
    constructor() {
        this.dictionary = {}
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key]
    }
}

const word = new Dictionary()
word.add("a", "ant");
word.add("b", "big");
word.add("c", "cat");
word.add("d", "dog");
word.add("e", "egg");
word.add("f", "fog");

console.log(word.dictionary)

const getD = word.get("d");
console.log(getD)
const getA = word.get("a");
console.log(getA)
const getF = word.get("f");
console.log(getF)





class Phonebook{
    constructor(){
        this.phonebook = {}
    }
    
    newContact(name,number){
        this.phonebook[name] = number
    }
    
    getContact(name) {
        return this.phonebook[name]
    }

}

const myPhonebook = new Phonebook();
myPhonebook.newContact("Rifat", "01956585989");
myPhonebook.newContact("Aysha", "01684231234");
myPhonebook.newContact("Sunny", "01984881884");
myPhonebook.newContact("Siam", "01777809397");

console.log(myPhonebook.phonebook);
const myNum = myPhonebook.getContact("Siam");
console.log(myNum)