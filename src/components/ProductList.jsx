import React,{ useEffect, useState } from "react"
import { data, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FourSquare} from 'react-loading-indicators'
import useFetch from "./custom-hook/usefetch";
import { FaShoppingCart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch,useSelector } from 'react-redux'
import {addItem} from "../store/cartSlice"



const ProductList = () => {
  let navigate=useNavigate()

//let[products,setProducts] =useState([])
//let[error,setError]=useState("")
//let[isLoading,setIsLoading]=useState(true)


/*useEffect(() => {
  fetch("http://localhost:4000/products",{ method : "GET"})
  .then((response) => {
   if(response.ok){
        return response.json()

   }
   else{
    throw new Error("search proper data")
   }
  })
  .then((data) => {setProducts(data)})
  .catch((error) =>{
    setError(error.message)

  })
  .finally(() => {
    setIsLoading(false)
  })
 
},[])*/

let {products,error,isLoading,setProducts}=useFetch("http://json-server-backend-quaw.onrender.com/products")


let handleDelete=(id) =>{

  console.log(id)
  
    axios.delete(`https://json-server-backend-quaw.onrender.com/products/${id}`)
    .then(() =>{
      
     Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to undo this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
     })
    .then((result) => {
    if (result.isConfirmed) {
      // delete logic here
      Swal.fire("Deleted!", "Your item has been deleted.", "success");
    }
  });


  let newProductList=products.filter(product => product.id!==id)
   setProducts(newProductList)


    })
}
    
let dispatch= useDispatch()
  let cartState=useSelector((state) => {
    return state.cart
  })

let addItemToCart=(product)=>{
let checkProduct=cartState.some(cartProduct =>cartProduct.id===product.id)
 console.log(checkProduct)
if(!checkProduct){
   dispatch(addItem(product))
   Swal.fire({
    title: "Success",
    text: "Product added successfully!",
    icon: "success",
     })
}
  else{
   Swal.fire({
    title: "Oops",
    text: "Product already added!",
    icon: "error",
    footer:<p>Add Some other Product</p>
     })  } 
}


  if(isLoading){
    return(
      <div >
        <center>     
          <FourSquare color="#9931cc" size="large" text="Loading" textColor="#154de9" /> 
        </center>
      </div>
    )
  }
  else{
    return (
    <div>
      <article>
        <span>To  Create New Product </span>  
        <Button onClick={() =>navigate("/newProduct")}>
          Click me</Button>
      </article>
      <h1>Product List</h1>
      <section className="products">
        {
          products.map((product) =>(
            <Card key={product.id}style={{ width: '18rem' }} className="prod">
              <center>     
                 <Card.Img variant="top" 
                 src={product.image}
                  style={{width: '9rem',height:"12rem" }}/>
              </center>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text >${product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{display:"flex",justifyContent:"space-evenly",
                  alignItems:"center"}}>   
        <Card.Text >
         
        </Card.Text> 
          <Button variant="primary" onClick={() =>addItemToCart(product)}>
            <FaShoppingCart />
          </Button>
          <Button variant="secondary" onClick={()=>{navigate(`/update/${product.id}`)}}><FiEdit /></Button>
          <Button variant="danger" onClick={() =>handleDelete(product.id)}
          ><MdDelete />
           </Button>

      </Card.Footer>
     </Card>
          ))
        }
      </section>
      {
        error && <p> {error}</p>
      }
    </div>
  )
    
  }
  
}

export default ProductList