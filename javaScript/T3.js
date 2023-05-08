
// -> for numbers in 1 to 100
//    - if number is divisible by 3 print fizz
//    - if number is divisible by 5 print buzz
//    - if number is divisible by 3 and 5 print fizzbuzz


for(let i = 1; i<= 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i+" fizzbuzz");
    }else if(i%3 == 0){
        console.log(i+ " fizz");
    }
    else if(i%5 == 0){
        console.log(i +" buzz");
    }
    
}