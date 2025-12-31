import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductCard = ({ id }) => {
  const { all_products } = useContext(ShopContext);
  const navigate = useNavigate();

  const product = all_products.find((p) => p.id === id);
  if (!product) return null;

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition cursor-pointer"
    >
      <div className="w-full h-52 flex items-center justify-center bg-purple-50 rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-800">
          {product.name}
        </h3>

        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-[#6D28D9]">
            ₹{product.price}
          </p>
          <div>⭐ {product.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
