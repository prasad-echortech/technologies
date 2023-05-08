const body = document.body;
//we can append strings + elements
body.append("Helloworld sarella sai" , " hello" , " wledgb");
const divele = document.createElement('div');
body.append(divele);
divele.innerText = "echor tech";
// divele.textContent = "uppal x road";


//we canot appendChild() strings only elements
// body.appendChild("Helloworld sarella sai"); //we canot
// body.appendChild("Helloworld sarella sai" , " hello" , " wledgb"); //we canot
// body.appendChild(divele);//ok
// divele.innerText = "uppal";//ok

const div = document.querySelector('div');
console.log(div.innerText);
console.log(div.textContent);
