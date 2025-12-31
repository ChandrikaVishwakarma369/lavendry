const About = () => {
  return (
    <div className="min-h-screen bg-[#EDE9FE] px-6 py-16">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#5B21B6]">
            About Lavendry
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lavendry is a modern beauty brand crafted with love, elegance, and a touch of lavender-inspired calm.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Lavendry was created with one simple goal — to help everyone feel confident, beautiful, and empowered through high-quality makeup and skincare products.
            </p>

            <p>
              We carefully curate every product using skin-friendly ingredients, cruelty-free formulas, and modern beauty technology. Our lavender-themed identity reflects calm, luxury, and self-care.
            </p>

            <p>
              Whether you are looking for everyday essentials or bold glam looks, Lavendry is designed to bring out your natural beauty while keeping your skin healthy and glowing.
            </p>
          </div>

          {/* Brand Values */}
          <div className="bg-[#F5F3FF] p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-[#5B21B6] mb-6">
              Our Values
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>🌿 Clean & skin-safe ingredients</li>
              <li>🐰 Cruelty-free & ethical beauty</li>
              <li>💜 Inspired by calm & confidence</li>
              <li>✨ Designed for every skin tone</li>
              <li>🌍 Sustainable & eco-friendly packaging</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
