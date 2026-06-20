import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Checkout() {
const navigate = useNavigate();

return (
<> <Navbar cartCount={0} />


  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border p-3 rounded mb-4"
      />

      <input
        type="text"
        placeholder="Address"
        className="w-full border p-3 rounded mb-4"
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="w-full border p-3 rounded mb-4"
      />

      <button
        onClick={() => navigate("/success")}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
      >
        Place Order
      </button>

    </div>
  </div>
</>


);
}

export default Checkout;
