import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Cart({ cartItems, cartCount, removeFromCart }) {
const totalPrice = cartItems.reduce(
(total, item) => total + item.price,
0
);

return (
<> <Navbar cartCount={cartCount} />


  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">
      Cart Page ({cartCount})
    </h1>

    {cartItems.length === 0 ? (
      <p className="text-gray-600">Your cart is empty.</p>
    ) : (
      <>
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="border p-4 mb-3 rounded-lg shadow bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-2">
              {item.name}
            </h2>

            <p>{item.description}</p>

            <p className="text-green-600 font-bold">
              ₹{item.price}
            </p>

            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">
            Total: ₹{totalPrice}
          </h2>

          <Link to="/checkout">
            <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Checkout
            </button>
          </Link>
        </div>
      </>
    )}
  </div>
</>


);
}

export default Cart;
