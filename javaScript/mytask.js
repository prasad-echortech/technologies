let n = 5;

let a = 0;
let b = 1;
let c = a + b;

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let s = 1; s <= n - i; s++) {
        str += " ";
    }
    for (let j = 1; j <= i; j++) {
        str += ` ${c}`;
        c = a + b;
        a = b;
        b = c;
    }
    console.log(str);
}

