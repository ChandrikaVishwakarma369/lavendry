const Footer = () => {
  return (
    <footer className="bg-[#F5F3FF] text-gray-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#5B21B6]">Lavendry</h2>
          <p className="mt-4 text-sm">
            Beauty inspired by calm, confidence, and a touch of lavender.
            Premium makeup & skincare made just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-[#5B21B6] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">Shop</li>
            <li className="hover:cursor-pointer">About Us</li>
            <li className="hover:cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-[#5B21B6] mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li  className="hover:cursor-pointer">FAQ</li>
            <li className="hover:cursor-pointer">Shipping</li>
            <li className="hover:cursor-pointer">Returns</li>
            <li className="hover:cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-[#5B21B6] mb-4">Contact</h3>
          <p className="text-sm hover:cursor-pointer">support@lavendry.com</p>
          <p className="text-sm mt-2 hover:cursor-pointer">+91 98765 43210</p>
          <p className="text-sm mt-2 hover:cursor-pointer">Indore, India</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#DDD6FE] mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lavendry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
