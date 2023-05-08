// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// A Set can hold any value of any data type.

// Set Methods
// Method	Description
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists
// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set
// Property	Description
// size	Returns the number elements in a Set

// 1) new aray set creation #1

const myarrset = new Set(["a","b","c","d"]);

//2) new aray set creation #2

const myarrset1 = new Set();

// adding values to set 
myarrset.add("p");
myarrset.add("r");
myarrset.add("a");
myarrset.add("s");
myarrset.add("a");
myarrset.add("d");
myarrset.add("p");
myarrset.add("r");
myarrset.add("a");
myarrset.add("s");
myarrset.add("a");
myarrset.add("d");

console.log(myarrset1.size);

//3) adding variables to set
let a = "hello";
let b = "world";
let c = "WWW";

const myarrset2 = new Set();

//adding variables to set

myarrset2.add(a);
myarrset2.add(b);
myarrset2.add(c);


