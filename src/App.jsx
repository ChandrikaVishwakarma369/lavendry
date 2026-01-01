import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ShopProvider from "./context/ShopContext.jsx";
import Categories from "./pages/Categories.jsx";
import ProductDetails from "./components/categories/ProductDetails.jsx";
import Shop from "./pages/Shop.jsx";
import CartIcon from "./components/CartIcon.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CartSidebar from "./components/CartSidebar.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col overflow-x-hidden">

          <Navbar onCartClick={() => setCartOpen(true)} />
          <ScrollToTopButton/>
          {/* 👇 Only pages go inside main */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>

          <Footer />

          {/* 👇 These must be OUTSIDE layout */}
          <CartIcon />
          <CartSidebar
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
          />

        </div>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;
