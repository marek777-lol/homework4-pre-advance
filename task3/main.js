class CoffeeeMake {
    constructor(on, off) {
        this.on = on;
        this.off = off;
    }
}

class Coffe extends CoffeeeMake {
    constructor(on, off, type, hasMilk, cheap) {
        super(on, off);
        this.type = type;
        this.hasMilk = hasMilk;
        this.cheap = cheap;
    }
}

let coffee1 = new Coffe(true, false, 'капельна', false, true);
let coffee2 = new Coffe(true, false, 'ріжкова', true, false);
let coffee3 = new Coffe(false, true, 'каво-машина', true, true);

console.log(coffee1);
console.log(coffee2);
console.log(coffee3); 