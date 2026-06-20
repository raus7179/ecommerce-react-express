import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function ProductDetails() {
const { id } = useParams();
const [product, setProduct] = useState(null);

useEffect(() => {
axios
.get(`http://localhost:5000/api/products/${id}`)
.then((res) => setProduct(res.data))
.catch((err) => console.log(err));
}, [id]);

if (!product) {
return (
<> <Navbar cartCount={0} /> <h1 className="p-6 text-2xl">Loading...</h1>
</>
);
}

return (
<> <Navbar cartCount={0} />


  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {product.name}
      </h1>

      <p className="mt-4 text-lg">
        {product.description}
      </p>

      <p className="text-2xl font-bold text-green-600 mt-4">
        ₹{product.price}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Add To Cart
      </button>

    </div>
  </div>
</>


);
}

export default ProductDetails;
