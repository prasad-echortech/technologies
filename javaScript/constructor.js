class triangle {
    constructor() {
        this.name = 'triangle'
        this.age = 20;
    }
}
class building {
    constructor() {
        this.mansion = "india";
        this.price = 100 + "$"
    }
}
const tri1 = new triangle();
console.log(tri1.name);
console.log(tri1.age)
const house = new building();
console.log(house.mansion);
console.log(house.price);

class person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`hello iam prasad ${this.name}`);
    }
}
const intro = new person("Durga Prasad");
intro.introduce()



