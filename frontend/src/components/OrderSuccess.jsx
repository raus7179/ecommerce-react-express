import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function OrderSuccess() {
return (
<> <Navbar cartCount={0} />


  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">

      <h1 className="text-4xl font-bold text-green-600">
        ✅ Order Placed Successfully!
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Thank you for shopping with ShopEasy.
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Your order has been received and is being processed.
      </p>

      <Link to="/">
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Continue Shopping
        </button>
      </Link>

    </div>
  </div>
</>


);
}

export default OrderSuccess;
