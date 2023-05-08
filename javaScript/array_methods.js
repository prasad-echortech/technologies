//array methods

console.log();
const arr = [11, 32, 23, 45, 48, 699, 47, 78, 89];

//to find length of above array
console.log( "the length of the array is: " +arr.length);

console.log();

//to sort an above array
console.log("sorting of the array is " +arr.sort());

//toString()
console.log();
const arrString = ["Banana", "Orange", "Apple", "Mango"];
console.log(arrString.toString());

//The join() 
//method also joins all array elements into a string.

console.log();
console.log(arrString.join(" <> "));

//Popping pop()
// When you work with arrays, it is easy to remove elements and add new elements.
// This is what popping and pushing is:
// Popping items out of an array, or pushing items into an array.
console.log();
arrString.pop();//mango was popped or removed
console.log(arrString);

//push()
console.log();
arrString.push("push item"); // pushed "push item"
console.log(arrString);

//Shifting Elements shift()
//Shifting is equivalent to popping, but working on the first element instead of the last.
console.log();
arrString.shift();// banana removed with the help of shift()
console.log(arrString);
console.log("the length of array : "+arrString.length);
console.log();
arrString.forEach((element,index)=>{
    console.log(index)
}
)

//unshift()
console.log();
console.log(arrString.unshift("unshiftfruit"));
 console.log(arrString);

 //concat
console.log();
 let boys = ["raj","mahesh","prakash"];
 let girls = ["emma", "sam" , "jessi"];
 let myfamily1 = boys.concat(girls);
 console.log(myfamily1);
 let myfamily2 = girls.concat(boys);
 console.log(myfamily2);
 //boys.concat(girls,boys);

 //concat array with values
 let concatvalue = boys.concat("paul");
 console.log(concatvalue);
 
 // JavaScript Array splice()
 // The splice() method can be used to add new items to an array:

//  The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
console.log();
console.log("splice()");
let arrSplice = ["Banana", "Orange", "Apple", "Mango"];
arrSplice.splice(2,0, "Lemon" , "Kiwi")
console.log(arrSplice);

// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

console.log();
 arrSplice.splice(0,1);
 console.log(arrSplice);
 arrSplice.splice(0,2);
 console.log(arrSplice);
 arrSplice.splice(0,2);
 console.log(arrSplice);
 arrSplice.splice(0,1);
 console.log(arrSplice);

//slice();

// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
console.log();
const fruitsSlice = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruitsSlice.slice(1);
console.log(fruitsSlice);
console.log(citrus);

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.
console.log();
console.log(fruitsSlice)
let citrus1 = fruitsSlice.slice(1,3);
console.log(citrus1);

//reverse
fruitsSlice.reverse();
console.log(fruitsSlice);


// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

//arrays sort ascending
 console.log();
const arrnum = [40, 100, 1, 5, 25, 10];
console.log(arrnum.sort());//produces incorrect values
arrnum.sort(function(a,b){
    return a - b;
})
console.log(arrnum);

//array decending
console.log();
const arrnum1 = [40, 100, 1, 5, 25, 10];
arrnum1.sort(function(a,b){
    return b-a;
})
console.log(arrnum1);

//Sorting an Array in Random Order

const sortarr = [40, 100, 1, 5, 25, 10];
sortarr.sort(function(){
    return 0.5 - Math.random()
})
console.log(sortarr);

//finding the highest and lowest values of an array in ascending order
console.log()
const arrmaxmin1 =  [40, 100, 1, 5, 25, 10];
arrmaxmin1.sort(function(a,b){
    return a-b;
})
console.log(arrmaxmin1);
console.log("min or lowest value : "+(arrmaxmin1[0]))
console.log("max or highest value : "+(arrmaxmin1[arrmaxmin1.length-1]))

//finding the highest and lowest values of an array in descending order
console.log()
const arrmaxmin2 =  [40, 100, 1, 5, 25, 10];
arrmaxmin2.sort(function(a,b){
    return b-a;
})
console.log(arrmaxmin2);
console.log("max or highest value : "+(arrmaxmin2[0]))
console.log("min or lowest value: "+(arrmaxmin2[arrmaxmin2.length-1]))

//Using Math.max() on an Array
const arrmaxmin3 =  [40, 100, 1, 5, 25, 10];

function myArrayMax(parms){
Math.max.apply(null, parms);
console.log("iam running")
}
myArrayMax(arrmaxmin3);
