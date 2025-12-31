import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Eye Brow Pencil", slug: "browpencil" },
  { name: "Makeup Brush", slug: "brush" },
  { name: "Contour", slug: "contour" },
  { name: "Concealer", slug: "concealer" },
  { name: "Eye Shadow", slug: "eyeshadow" },
  { name: "Foundation", slug: "foundation" },
  { name: "Kajal", slug: "kajal" },
  { name: "Lipstick", slug: "lipstick" },
  { name: "Eye Liner", slug: "liner" },
  { name: "Lip Liner", slug: "lipliner" },
  { name: "Perfume", slug: "perfume" },
  { name: "Compact Powder", slug: "powder" },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {categories.map((cat) => (
        <div
          key={cat.slug}
          onClick={() => navigate(`/shop/${cat.slug}`)}
          className="cursor-pointer bg-white shadow-md p-4 rounded-xl hover:bg-purple-100 transition"
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
