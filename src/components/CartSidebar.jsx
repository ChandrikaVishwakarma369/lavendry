import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  const {
    cartItems,
    all_products,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    resetCart,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleCheckout = () => {
    setCheckoutComplete(true);
    resetCart();
  };

  const handleGoHome = () => {
    setCheckoutComplete(false);
    onClose();
    navigate("/");
  };

  // ✅ Success screen
  if (checkoutComplete) {
    return (
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full sm:w-96 flex flex-col items-center justify-center p-6`}
      >
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Successfully Ordered!
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Thank you for your purchase. Explore more products now.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full font-medium"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-full sm:w-96 flex flex-col`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 font-bold text-lg"
        >
          ✕
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 flex flex-col gap-4 flex-1 overflow-y-auto">
        {Object.keys(cartItems).length === 0 && (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        )}

        {Object.keys(cartItems).map((id) => {
          const product = all_products.find((p) => p.id === Number(id));
          if (!product) return null;
          const quantity = cartItems[id];
          const totalPrice = product.price * quantity;

          return (
            <div
              key={id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b pb-3"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                  <p className="text-sm text-purple-600 font-bold">
                    ₹{totalPrice}
                  </p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex sm:flex-col items-center gap-2 sm:gap-1">
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-green-500 hover:bg-green-600 text-white p-1.5 rounded-full"
                >
                  <FaPlus size={12} />
                </button>

                <span className="text-sm font-medium">{quantity}</span>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full"
                >
                  <FaMinus size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom total */}
      {Object.keys(cartItems).length > 0 && (
        <div className="p-4 border-t bg-white sticky bottom-0">
          <h3 className="text-lg font-bold">
            Total: ₹{getTotalCartAmount()}
          </h3>
          <button
            onClick={handleCheckout}
            className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
