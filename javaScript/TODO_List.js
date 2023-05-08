const addUserBtn = document.getElementById('addUser');//add-TODO
const btnText = addUserBtn.innerText;
const TODOTextField = document.getElementById('username');//input box
const recordsDisplay = document.getElementById('records');//<tbody id="records">
let userArray = [];
let edit_id = null;

let objStr = localStorage.getItem('users');//#1

if (objStr != null) {
   userArray = JSON.parse(objStr);//#2
}

DisplayInfo();//#hoisting was happening function calling
addUserBtn.onclick = () => {
   //get user's name from TODO-text field
   const name = TODOTextField.value;
   if (edit_id != null) {
      //Edit action
      userArray.splice(edit_id, 1, {
         'name': name 
      });//hold
      edit_id = null;
   } else {
      //insert action
      userArray.push({
         'name': name
      });
   }

   SaveInfo(userArray);
   TODOTextField.value = '';
   addUserBtn.innerText = btnText;
}

// store todo's in local storage
function SaveInfo(userArray) {
   let str = JSON.stringify(userArray);
   localStorage.setItem('users', str);
   DisplayInfo();//#hold //hoisting
}

// display todo's's name DisplayInfo() function
function DisplayInfo() {
   let statement = '';
   //user, i are parameters
   userArray.forEach((user, i) => {
      statement += `<tr>
           <th scope="row">${i+1}</th>
           <td>${user.name}</td>
           <td> <button type="button" class="btn btn-success btn-sm" onclick='EditInfo(${i})'>Edit</button> <button type="button" class="btn btn-danger btn-sm" onclick='DeleteInfo(${i})'>Delete</button></td>
         </tr>`;
   });

   recordsDisplay.innerHTML = statement;
}

// edit todo's name
function EditInfo(id) {
   edit_id = id;
   TODOTextField.value = userArray[id].name;
   addUserBtn.innerText = 'SAVE';
}

//delete user's name
function DeleteInfo(id) {
   userArray.splice(id, 1);
   SaveInfo(userArray);

}