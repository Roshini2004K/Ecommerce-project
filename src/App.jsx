import Home from "./components/Home"
import Login from "./components/Login"
import ProductDetails from "./components/ProductDetails"
import ProductList from "./components/ProductList"
import Products from "./components/Products"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import NotFound from "./components/NotFound"
import NewProduct from "./components/NewProduct"
import UpdateProduct from "./components/UpdateProduct"
import Wishlist from "./components/Wishlist"

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]))
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>

          <Route path="/login/:newuser" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App