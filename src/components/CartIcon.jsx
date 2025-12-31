import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaShoppingCart } from "react-icons/fa";
import CartSidebar from "./CartSidebar";

const CartIcon = () => {
  const { getTotalCartItems, cartBounce } = useContext(ShopContext);
  const [bounce, setBounce] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const totalItems = getTotalCartItems();

  // Bounce animation
  useEffect(() => {
    if (cartBounce) {
      setBounce(true);
      const timer = setTimeout(() => setBounce(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartBounce]);

  return (
    <>
      <div
        className={`fixed bottom-5 right-5 z-50`}
      >
        <div
          onClick={() => setIsSidebarOpen(true)}
          className={`relative bg-[#8B5CF6] text-white p-4 rounded-full shadow-lg cursor-pointer transition-transform ${
            bounce ? "animate-bounce" : ""
          }`}
        >
          <FaShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <CartSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default CartIcon;
