fetch('https://fakestoreapi.com/products')
    .then((data) => {
        return data.json();
    }).then((objectData) => {

        let tableData = "";
        objectData.map((values) => {
            tableData += ` 
            <img src="${values.image}"/></td>
           <h5> ${values.title}</h5>
              <p>${values.description}</p>
              <p>${values.price}</p>
          </tr>`;
        });
        document.getElementsByClassName('.card').innerHTML = tableData;
        
    }).catch((err) => {
        console.log(err);
    })

    $(".products").click(function (){
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(console.log);
    })

