

  function counter(){
    var a = 0;
    return {
        add : (n)=> {a+=n},
        get:()=>a
    }
  }

  var a = counter();
  a.add(1);
  a.add(2);
  console.log(a.get());//3
  a.add(2);
  console.log(a.get());//5
