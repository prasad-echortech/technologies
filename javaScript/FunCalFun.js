// function calling a function

function fruitCuttingMachine (fruits){
    return fruits * 5;
}

function FruitSellingShop(apples,pineapple,jackFruit){
let applePieces = fruitCuttingMachine(apples);
console.log(applePieces)
let pineapplePieces = fruitCuttingMachine(pineapple);
console.log(pineapplePieces)
let jackFruitPieces = fruitCuttingMachine(jackFruit);
console.log(jackFruitPieces)

 let orderDelivery = `your order is having apple pieces ${applePieces} and pineapple pieces ${pineapplePieces} and jackfruit pieces ${jackFruitPieces}`;
return orderDelivery;
}
let OrderStatus1 = FruitSellingShop(2,3,5);
let OrderStatus2 = FruitSellingShop(10,3,5);
let OrderStatus3 = FruitSellingShop(10,3);


console.log(OrderStatus1);
console.log(OrderStatus2);
console.log(OrderStatus3);


