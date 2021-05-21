class SmartDevice{
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    
    charge() {
        console.log(`${this.name} is charging....`)
    }
    
    warrantee() {
        console.log("Warrantee finished")
    }
}


class Phone extends SmartDevice{
    constructor(name, price, color, ram) {
        super(name, price, color);
        this.ram = ram;
    }
    
    sendSms() {
        console.log(`${this.name} is sending sms...`)
    }

}

const samsung = new Phone("Samsung", 25000, "Black", "16gb")
samsung.sendSms();

class Laptop extends SmartDevice{
    constructor(name, price, color, hd) {
        super(name, price, color);
        this.hd = hd;
    }
}

const toshiba = new Laptop("Toshiba", 60000, "White", "1TB");
toshiba.warrantee();