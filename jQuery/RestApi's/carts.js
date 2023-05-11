//Get all carts
// fetch("https://dummyjson.com/carts")
// .then(res => res.json())
// .then(console.log)

//get a single cart
// fetch("https://dummyjson.com/carts/1")
// .then(res => res.json())
// .then(console.log)

// Get carts of a user
// getting carts of user with id 5
// fetch("https://dummyjson.com/carts/user/5")
//     .then(res => res.json())
//     .then(console.log)

// Add a new cart 
// fetch("https://dummyjson.com/carts/add", {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         userId: 1,
//         products: [
//             {
//                 id: 1,
//                 quantity: 1,

//             }, {
//                 id: 50,
//                 quantity: 2,
//             }
//         ]
//     })
// })
//     .then(res => res.json())
//     .then(console.log)

// Update a cart 

// fetch("https://dummyjson.com/carts/1", {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         merge: true,
//         products: [
//             {
//                 id: 1,
//                 quantity: 1,

//             },
//         ]
//     })
// })
//     .then(res => res.json())
//     .then(console.log)

//delete cart
fetch("https://dummyjson.com/carts/1", {
    method: 'DELETE',
})
    .then(res => res.json())
    .then(console.log)
