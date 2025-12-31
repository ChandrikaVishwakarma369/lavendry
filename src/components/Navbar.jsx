import { Link, useNavigate } from "react-router-dom";
import lavendryImage from "/lavendryImage.png";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false); // Dropdown toggle
  const navigate = useNavigate();

  const { search, setSearch, setSortOrder } = useContext(ShopContext);

  const handleSortChange = (order) => {
    setSortOrder(order);
    setShowFilter(false);
  };

  return (
    <div className="w-full bg-white shadow-md shadow-purple-200 px-6 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <img
          src={lavendryImage}
          alt="logo"
          className="w-12 h-12 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {["home", "about", "categories", "contact","signIn"].map((item) => (
            <Link
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              onClick={() => setActive(item)}
              className="text-lg text-gray-600 hover:text-purple-600"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Desktop Search + Filter */}
        <div className="hidden md:flex w-80 relative">
          <div className="flex w-full items-center bg-purple-50 rounded-full px-4 py-2 border border-purple-300">
            <input
              type="text"
              placeholder="Search lipstick, eyeliner...."
              className="flex-1 bg-transparent outline-none text-purple-700"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                navigate("/shop"); // Automatically navigate to shop
              }}
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-3xl text-purple-600 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-purple-50 backdrop-blur-sm p-4 rounded-xl flex flex-col gap-3">
          {["home", "about", "shop", "contact"].map((item) => (
            <Link
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full mt-3 p-2 rounded border"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              navigate("/shop");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
