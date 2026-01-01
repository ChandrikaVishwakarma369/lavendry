import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // thoda scroll hone par hi dikhe
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 left-4 z-50 bg-black/40 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-black/60 transition"
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollToTopButton;
