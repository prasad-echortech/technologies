
//  Question

// console.log(mul(2)(3)(4)) // 24
// console.log(mul(1)(2)(3)) // 6

// function mul() {
//   // your code
// }
// console.log(mul(2)(3)(4))
//--------------------------------------

//own idea

// function mul(a, b, c) {
//     console.log((a * b * c));
// }
// mul(2, 3, 4);

// function mul1(a, b, c) {
//     console.log((a * b * c));
// }
// mul(1, 2, 3);

//-----------------------------------------------

function myfun(x) {
    return function (y) {
        return function (z) {
            return x * y * z;

        }
    }
}
console.log(myfun(1)(2)(3));
console.log(myfun(2)(3)(4));