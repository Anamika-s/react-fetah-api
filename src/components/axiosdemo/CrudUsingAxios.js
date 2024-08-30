import React, { useEffect, useState } from 'react'
import axios from "axios";

export const CrudUsingAxios = () => {

const[products, setProducts] = useState(null);

useEffect(()=>
    { 
       
        axios.get("http://localhost:8000/products")
        .then((response) => setProducts(response.data)
       );
    
    },[]);

 const DeleteProduct = async(id)=>
    {
    const response =  await axios.delete("http://localhost:8000/products/"+id)
   alert("record deleted");
//    setProducts(products)
GetProductList();
    }   


const EditProduct = async(id)=>
        {

            var product=
            { 
                "id":id,
                    "title": "updated product",
                    "description": "An apple mobile which is nothing like apple",
                    "price": 549,
                    "discountPercentage": 12.96,
                    "rating": 4.69,
                    "stock": 94,
                    "brand": "Apple",
                    "images": ""
            }
        const response =  await axios.put("http://localhost:8000/products/"+id,
            product
        )
       alert("record edited");
    //    setProducts(products)
    GetProductList();
        }   
    const AddProduct=()=>
        {
            var product=
            { 
                  
                    "title": "new product added",
                    "description": "An apple mobile which is nothing like apple",
                    "price": 549,
                    "discountPercentage": 12.96,
                    "rating": 4.69,
                    "stock": 94,
                    "brand": "Apple",
                    "images": ""
            }
            axios.post("http://localhost:8000/products"
                , product)
                .then((response)=>console.log(response)

            );
        } 
   const GetProductList =()=>
    {
         axios.get("http://localhost:8000/products")
         .then((response) => {setProducts(response.data)
            console.log(response.data)}
        );
    } 
  return (
    <div>CrudUsingAxios


 <button onClick={AddProduct}> Add New Product </button>
    {products && products.length}
    <table className='table'>
        <tr>
            <th> Product Id </th>
            <th> Product Name </th>
            <th> Description </th>
            <th> Price </th>
        </tr>
    {products ? products.map((product)=>
    
    <tr>
        <td>  {product.id} </td>
        <td> {product.title}</td>
        <td> {product.description}</td>
        <td> {product.price}</td>
        <td> <button className="btn btn-success" onClick={()=>DeleteProduct(product.id)}> Delete Product </button> </td>
        <td> <button onClick={()=>EditProduct(product.id)}> Edit Product </button> </td>
    
        
    </tr>
    )
    
    : <h1> There are no records</h1> 
    }
    
    </table>
    </div>
  )
}
