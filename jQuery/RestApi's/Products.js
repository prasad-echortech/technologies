// // GET

// fetch('https://dummyjson.com/products')
//     .then(res => {
//         if (!res.ok) {
//             console.log("problem");
//             return;
//         }
//         return res.json();
//     })

//     .then(data => {
//         console.log(data.data[2].first_name);
//     })
//     .catch(error => {
//         console.log(error);
//     })




// // POST
// const dataPost = {
//     name: 'John Doe',
//     job: 'painter',
// };

// // Send a POST request
// fetch("https://reqres.in/api/users", {
//     method: 'POST',
//     header: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(dataPost),
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


// // const newuser = {
// //     name: 'John Doe',
// //     job: 'painter',
// // };

// // // Send a PUT request
// // fetch("https://reqres.in/api/users", {
// //     method: 'PUT',
// //     header: {
// //         'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(data),
// // },)
// // .then(res => {
// //     if (!res.ok) {
// //         console.log("problem");
// //         return;
// //     }
// //     return res.json();
// // })
// // .then(data => {
// //     console.log("success");
// // })
// // .catch(error => {
// //     console.log(error);
// // })


// // // const newuser2 = {
// // //     name: 'Jd',
// // //     job: 'artist',
// // // };

// // // Send a delete request
// // fetch("https://reqres.in/api/users", {
// //     method: 'DELETE',
// // },)
// // .then(res => {
// //     if (!res.ok) {
// //         console.log("problem");
// //         return;
// //     }
// //     return res.json();
// // })
// // .then(data => {
// //     console.log("success");
// // })
// // .catch(error => {
// //     console.log(error);
// // })

// // Get all products
// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))

// // Get a single products

// fetch('https://dummyjson.com/products/1')
//     .then(res => res.json())
//     .then(json => console.log(json))

// //search products
// fetch('https://dummyjson.com/products/search?q=phone')
//     .then(res => res.json())
//     .then(json => console.log(json))

// //Limit and skip products
// fetch('https://dummyjson.com/products?limit=5&skip=15&select=title,price')
//     .then(res => res.json())
//     .then(json => console.log(json))


// //Get all products categories 
// fetch('https://dummyjson.com/products/categories')
//     .then(res => res.json())
//     .then(json => console.log(json))

// //Get all products categories 
// fetch('https://dummyjson.com/products/category/smartphones')
//     .then(res => res.json())
//     .then(json => console.log(json))

// //Add a new product
// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'BMW Pencil',
//         /* other product data */
//     })
// })
//     .then(res => res.json())
//     .then(console.log)

// // Update a product 
// fetch('https://dummyjson.com/products/1', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'iPhone Galaxy +1'
//         /* other product data */
//     })
// })
//     .then(res => res.json())
//     .then(console.log)

// Delete a product


fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
})
    .then(res => res.json())
    .then(console.log);

