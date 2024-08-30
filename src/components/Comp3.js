import React, { useEffect, useState } from 'react'

export const Comp3 = () => {
const [products, setProducts] = useState(null);
const [product, setproduct]= useState(
    {
        name:"Ajay",
        job:"manager"
    }
);
// useEffect(()=>
// {
//     fetch("https://reqres.in/api/products?page=2")
//     .then((res) => res.json())
//     .then((response) => console.log(response.data));
   
// },[]);

// const GetproductsList =()=>
// {
//     fetch("http://localhost:8000/products")
//     .then((res) => res.json())
//     .then((response) => 
//         {
//             // console.log(response.data)
//             setProducts(response.data)
//             // console.log({products})
// });
// }

const GetproductsList = () =>
  {
    fetch("http://localhost:8000/products")
    .then(result => 
      {
        
        result.json()
        .then(data => {setProducts(data)
        console.log(data)
      }
        
        )
        .catch(error =>
          {
            console.log("Some error occurred", error)
          })
      
      })
      .catch(error=>
        {
console.log(error)
        })

  }

 const Addproduct = ()=>
 {
  fetch("https://reqres.in/api/products",
    {
    method:'POST',
     headers:
     {
        'Accept':'Appication/json',
        'Content-Type':'Applicaton/json'
     },
     body: JSON.stringify(product)
 })
 .then((res)=> res.json())
 .then((response) =>  console.log(response))
 }
  return (
    <div>Comp3
      {products && console.log(products.length)}
      {products && <h1> {products.length} </h1>}
      {products ? products.map((product)=>
      <li> {product.id} - {product.title} - {product.description} </li>)
       : <h1> There are no records</h1> }
        <button onClick={GetproductsList}> Get products List </button>
   <button onClick={Addproduct}> Add product </button>
    </div>
  )
}

// id": "1",
//         "title": "iPhone 9",
//         "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//         "discountPercentage": 12.96,
//         "rating": 4.69,
//         "stock": 94,
//         "brand": "Apple",
//         "images": ""
//     },
