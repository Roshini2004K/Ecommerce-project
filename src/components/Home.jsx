
import React from 'react'
import useFetch from './custom-hook/usefetch'

const Home = () => {
 let {products}= useFetch("https://fakestoreapi.com/Products")
  return (
    <div>
      <h1>Home -Total Products={products.length}</h1>
    </div>
  )
}

export default Home