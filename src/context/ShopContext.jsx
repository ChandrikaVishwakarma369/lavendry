import { createContext, useState } from "react";
import all_products from "../assets/all.products";

export const ShopContext = createContext(null);

const ShopProvider = ({ children }) => {

  // 🛒 Cart state
  const [cartItems, setCartItems] = useState({});

  // 🔍 Search state
  const [search, setSearch] = useState("");

  // 🛒 Add to cart
  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  // ShopContext.jsx
const resetCart = () => {
  setCartItems({});
};

  // 🛒 Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  // 🧮 Total cart amount
  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = all_products.find(p => p.id === Number(itemId));
      if (product) {
        total += product.price * cartItems[itemId];
      }
    }
    return total;
  };

  // 🧮 Total cart items
  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  // 🛎️ Cart bounce state for animation
  const [cartBounce, setCartBounce] = useState(false);

  // Function to trigger bounce animation
  const triggerCartBounce = () => {
    setCartBounce(true);
    setTimeout(() => setCartBounce(false), 500);
  };

  // Updated addToCart to trigger bounce
  const handleAddToCart = (id) => {
    addToCart(id);
    triggerCartBounce();
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart: handleAddToCart, // updated function with bounce
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    search,
    setSearch,
    cartBounce, // for CartIcon animation
     resetCart, 
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
