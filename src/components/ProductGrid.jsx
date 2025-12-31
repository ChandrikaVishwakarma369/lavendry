import React, { useState, useEffect, useContext } from "react";
import all_products from "../assets/all.products";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { ShopContext } from "../context/ShopContext";

const ProductGrid = () => {
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(""); // "high" or "low"
  const [filteredProducts, setFilteredProducts] = useState(all_products);

  const { search, setSearch } = useContext(ShopContext);

  useEffect(() => {
    // fake API delay (jaise backend se aa raha ho)
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // Filter by search
    let temp = all_products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    // Sort by price
    if (sortOrder === "high") {
      temp.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "low") {
      temp.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(temp);
  }, [search, sortOrder]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Search + Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <select
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/4"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="high">Price: High to Low</option>
          <option value="low">Price: Low to High</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {loading
          ? [...Array(8)].map((_, i) => <ProductCardSkeleton key={i} />)
          : filteredProducts.map((item) => (
              <ProductCard key={item.id} id={item.id} product={item} />
            ))}

        {!loading && filteredProducts.length === 0 && (
          <p className="text-gray-500 text-center col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
