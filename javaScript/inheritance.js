//single in heritance
class Father {
    showFatherMoney() {
        return "Fathers Money"
    }
}
class Son extends Father {
    showSonMoney() {
        return "Son's Money"
    }
}

let son = new Son();//obj creation for Son class
console.log(son.showFatherMoney());
console.log(son.showSonMoney());

let father = new Father();//obj creation foe Father class
console.log(father.showFatherMoney());
// console.log(father.showSonMoney()); father dont have chils mones but child does

console.log("*****************************");
//multilevel in heritance
class GreatFather {
    showGreatFatherMoney() {
        return "GreatFather Money"
    }
}
class Son1 extends GreatFather {
    showSon1Money() {
        return "Son's Money"
    }
}
class Grandson extends Son1 {
    showGrandsonMoney() {
        return "Grands Son's Money"
    }
}

let son1 = new Son1();//obj creation for Son class
console.log(son1.showSon1Money());
console.log(son1.showGreatFatherMoney());


let grandSon = new Grandson();//obj creation for GrandSon class
console.log(grandSon.showGrandsonMoney());
console.log(grandSon.showSon1Money());
console.log(grandSon.showGreatFatherMoney());


