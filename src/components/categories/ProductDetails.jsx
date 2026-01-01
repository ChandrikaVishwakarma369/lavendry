import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
const ProductDetails = () => {
  const { id } = useParams();
  const { all_products, addToCart } = useContext(ShopContext);
  const [addedMessage, setAddedMessage] = useState(false); 
  const product = all_products.find((p) => p.id === Number(id));
  const navigate = useNavigate();
  if (!product)
    return <div className="text-center py-20 text-xl">Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product.id);

    // Show success message
    setAddedMessage(true);

    // Hide message after 2 seconds
    setTimeout(() => setAddedMessage(false), 2000);
  };

  return (
    <div className="bg-[#faf7ff] py-10 px-4 sm:py-16 sm:px-6 relative">
      {/* 🔙 Mobile Back Button */}
      <button
  onClick={() => navigate(-1)}
  className="md:hidden fixed top-4 left-4 z-50 bg-white shadow-lg p-3 rounded-full"
>
  <IoArrowBack size={20} />
</button>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">

        {/* LEFT — Product Image */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-10 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-3/4 sm:w-full max-w-md object-contain"
          />
        </div>

        {/* RIGHT — Product Info */}
        <div className="flex flex-col gap-4 sm:gap-6">

          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="text-xl sm:text-3xl font-semibold text-[#8B5CF6]">
            ₹{product.price}
          </p>

          <div className="flex items-center gap-2 text-sm sm:text-base">
            <span className="text-yellow-500">⭐ {product.rating}</span>
            <span className="text-gray-500">(Customer Reviews)</span>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4 sm:mt-6">
            <button
              onClick={handleAddToCart} // ✅ updated
              className="bg-[#8B5CF6] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-medium transition"
            >
              Add to Cart
            </button>

            <button
              className="border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-medium transition"
            >
              Buy Now
            </button>
          </div>

        </div>
      </div>

      {/* Success Message */}
      {addedMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in">
          Product added to cart successfully!
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
