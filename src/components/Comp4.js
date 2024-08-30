import React, { useEffect, useState } from 'react'

export const Comp4 = () => {
const [products, setProducts] = useState(null);
const [product, setproduct]= useState(
    { 
        "title": "new product",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "images": ""
//     },
}
);
// useEffect(()=>
// {
//     fetch("https://reqres.in/api/products?page=2")
//     .then((res) => res.json())
//     .then((response) => console.log(response.data));
   
// },[]);

const GetproductsList = () => {
  return fetch("http://localhost:8000/products").then((result) => {
      if (result.status == 200) {
          return Promise.resolve(result.json());
      } else {
          return Promise.reject("Unable to retrieve the movie list");
      }
  }).then(resultMovie => {
     setProducts(resultMovie)
      // createMovieList();
      // return movieItems;
  }).catch(error => {
      throw new Error(error);
  })
}
 const Addproduct = ()=>
 {
  fetch("http://localhost:8000/products",
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

  const DeleteProduct=()=>
  {
    fetch("http://localhost:8000/products/6",
      {
      method:'DELETE'
     
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
   <button onClick={DeleteProduct}> Delete Product</button>
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
