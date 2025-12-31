const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 animate-pulse">

      {/* Image Placeholder */}
      <div className="w-full h-52 bg-purple-100 rounded-xl"></div>

      {/* Text */}
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-purple-100 rounded w-3/4"></div>
        <div className="h-4 bg-purple-100 rounded w-1/2"></div>

        <div className="flex justify-between items-center mt-3">
          <div className="h-5 bg-purple-200 rounded w-20"></div>
          <div className="h-4 bg-purple-200 rounded w-10"></div>
        </div>
      </div>

    </div>
  );
};

export default ProductCardSkeleton;
