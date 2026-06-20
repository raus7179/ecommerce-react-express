import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
return ( <div className="bg-white rounded-xl shadow-lg overflow-hidden">


  <Link to={`/product/${product._id}`}>
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />

    <div className="p-4">
      <h2 className="text-xl font-semibold">
        {product.name}
      </h2>

      <p className="text-gray-600 mt-2">
        {product.description}
      </p>

      <p className="text-2xl font-bold text-green-600 mt-3">
        ₹{product.price}
      </p>
    </div>
  </Link>

  <div className="p-4 pt-0">
    <button
      onClick={addToCart}
      className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
    >
      Add To Cart
    </button>
  </div>

</div>


);
}

export default ProductCard;
