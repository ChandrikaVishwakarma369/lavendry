import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { category } = useParams(); // category slug from route
  const { all_products, search } = useContext(ShopContext);
  const navigate = useNavigate();

  // Optional: List of categories (slug should match product.category)
  const categories = [
    { name: "All", slug: "" },
    { name: "Lipstick", slug: "lipstick" },
    { name: "Eye Shadow", slug: "eyeshadow" },
    { name: "Foundation", slug: "foundation" },
    { name: "Brush", slug: "brush" },
  ];

  // Filter products based on category and search term
  const filteredProducts = all_products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} id={p.id} />)
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
