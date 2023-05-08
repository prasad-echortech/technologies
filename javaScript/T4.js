function createAdder(base) {
return function(x){
 console.log(base + x);
}
  }
  
  const tenAdder = createAdder(10)
  tenAdder(2) // 12
  tenAdder(0) // 10
  
  const twoAdder = createAdder(2)
  twoAdder(2) // 4
  twoAdder(10) // 12


//   function math(a,b) {
// return (a+b);
//   }
//  console.log(math(10,20));