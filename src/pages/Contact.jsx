import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✅ Message sent successfully!");
    setForm({ name: "", email: "", message: "" }); // Form clear kar diya
  };

  return (
    <div className="min-h-screen bg-[#EDE9FE] px-6 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#5B21B6]">
            Get in Touch with Lavendry
          </h1>
          <p className="text-gray-600 mt-3">
            We'd love to hear from you. Our beauty experts are here to help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <p><strong>Email:</strong> support@lavendry.com</p>
            <p><strong>Phone:</strong> +91 98765 XXXXX</p>
            <p><strong>Address:</strong> Lavendry Beauty Studio, Indore, India</p>

            <p className="text-gray-600 mt-6">
              Have questions about products, orders, or beauty tips?  
              Our Lavendry team is always here to support you 💜
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 border border-[#DDD6FE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 border border-[#DDD6FE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            />

            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-4 border border-[#DDD6FE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#8B5CF6] text-white py-4 rounded-xl font-semibold hover:bg-[#7C3AED] transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center mt-4 font-semibold text-[#5B21B6]">
                {status}
              </p>
            )}
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
