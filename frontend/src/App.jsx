import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";

function App() {
const [products, setProducts] = useState([]);
const [cartCount, setCartCount] = useState(0);
const [cartItems, setCartItems] = useState([]);
const [search, setSearch] = useState("");

const addToCart = (product) => {
setCartItems([...cartItems, product]);
setCartCount(cartCount + 1);
};

const removeFromCart = (index) => {
const updatedCart = cartItems.filter((_, i) => i !== index);


setCartItems(updatedCart);
setCartCount(updatedCart.length);


};

useEffect(() => {
axios
.get("http://localhost:5000/api/products")
.then((res) => setProducts(res.data))
.catch((err) => console.log(err));
}, []);

return ( <Routes>
<Route
path="/"
element={
<> <Navbar
           cartCount={cartCount}
           search={search}
           setSearch={setSearch}
         />


        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-4xl font-bold text-center mb-8">
            E-Commerce Store
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((product) =>
                product.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  addToCart={() => addToCart(product)}
                />
              ))}
          </div>
        </div>
      </>
    }
  />

  <Route
    path="/cart"
    element={
      <Cart
        cartItems={cartItems}
        cartCount={cartCount}
        removeFromCart={removeFromCart}
      />
    }
  />

  <Route
    path="/product/:id"
    element={<ProductDetails />}
  />

  <Route
  path="/checkout"
  element={<Checkout />}
/>

<Route
  path="/success"
  element={<OrderSuccess />}
/>
</Routes>



);
}

export default App;
