import React from "react";
import '../components/Home.css'
import useFetch from "./custom-hook/useFetch";
import hero_image from "../assets/Assets/Frontend_Assets/hero_image.png";
import hand_icon from "../assets/Assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../assets/Assets/Frontend_Assets/arrow.png";
import {useNavigate} from "react-router-dom";


const Home = () => {
  let { products } = useFetch(
    "https://json-server-backend-quaw.onrender.com/products",
  );
 
  let navigate=useNavigate()
  return (
    <div className="hero">
      <h1>Home - Total Products = {products.length}</h1>
      <div className="left">
        <h1>NEW ARRIVALS ONLY</h1>
        <div>
          <div className="hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" className="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="btn-btn">
          <span onClick={()=>navigate('/products')}>Latest Collection</span><br/>
          <img src={arrow_icon} alt="" className="" />
        </div>
      </div>
      <div className="right">
        <img src={hero_image} alt="" className="" />
      </div>
    </div>
  );
};

export default Home;
