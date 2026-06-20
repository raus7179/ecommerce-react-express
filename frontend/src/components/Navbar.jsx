import { Link } from "react-router-dom";

function Navbar({ cartCount, search, setSearch }) {
return ( <nav className="bg-blue-600 text-white p-4 rounded-lg mb-6"> <div className="container mx-auto flex justify-between items-center">


    <Link to="/" className="text-2xl font-bold">
      ShopEasy
    </Link>

    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="px-3 py-2 rounded text-black"
    />

    <Link to="/cart" className="text-lg">
      🛒 Cart ({cartCount})
    </Link>

  </div>
</nav>


);
}

export default Navbar;
