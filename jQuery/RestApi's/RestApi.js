// GET

fetch('https://reqres.in/api/users')
    .then(res => {
        if (!res.ok) {
            console.log("problem");
            return;
        }
        return res.json();
    })

    .then(data => {
        console.log(data.data[2].first_name);
    })
    .catch(error => {
        console.log(error);
    })




// // POST
// const data = {
//     name: 'John Doe',
//     job: 'painter',
// };

// // Send a POST request
// fetch("https://reqres.in/api/users", {
//     method: 'POST',
//     header: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// },)
// .then(res => {
//     if (!res.ok) {
//         console.log("problem");
//         return;
//     }
//     return res.json();
// })
// .then(data => {
//     console.log(data.data[2].first_name);
// })
// .catch(error => {
//     console.log(error);
// })

// const newuser = {
//     name: 'John Doe',
//     job: 'painter',
// };

// // Send a PUT request
// fetch("https://reqres.in/api/users", {
//     method: 'PUT',
//     header: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// },)
// .then(res => {
//     if (!res.ok) {
//         console.log("problem");
//         return;
//     }
//     return res.json();
// })
// .then(data => {
//     console.log("success");
// })
// .catch(error => {
//     console.log(error);
// })


// // const newuser2 = {
// //     name: 'Jd',
// //     job: 'artist',
// // };

// // Send a delete request
// fetch("https://reqres.in/api/users", {
//     method: 'DELETE',
// },)
// .then(res => {
//     if (!res.ok) {
//         console.log("problem");
//         return;
//     }
//     return res.json();
// })
// .then(data => {
//     console.log("success");
// })
// .catch(error => {
//     console.log(error);
// })



