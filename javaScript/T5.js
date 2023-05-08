function stack() {
  let arr = [];
  return {
    push: function (value) {
      arr.push(value);
    },
    pop: function () {
      if (arr.length == 0) {
        throw "should be error";
      }
      return arr.pop();
    }
  }
}
const a = stack()
a.push(5)
a.push(2)
console.log(a.pop(), 'should be 2')
console.log(a.pop(), 'should be 5')
try {
  console.log(a.pop(), 'this line should not print');
} catch (e) {
  console.log(e.message, 'should be error')
}
