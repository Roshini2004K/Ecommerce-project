import React, { useId } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { removeItem } from '../store/cartSlice';





const Wishlist = () => {
    let cartProducts=useSelector((state) =>{return state.cart})
    console.log(cartProducts)
    
    let  dispatch=useDispatch()

    let handleDelete=(reduxItemId) =>{
        dispatch(removeItem(reduxItemId))
    }
  return (
    <div>
      
      <h1>Product List</h1>
      {cartProducts.length!==0 ? (
        <section className="products">
        {
          cartProducts.map((product) =>(
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
          <Button variant="danger"
           onClick={() =>handleDelete(product.id)}
          ><MdDelete />
           </Button>

      </Card.Footer>
     </Card>
          ))
        }
      </section>
    ): <center><h3>Please Parchase<br/> Something </h3></center>
}
      
    </div>
  )
}

export default Wishlist