import React, { useState } from "react";
import { motion } from "framer-motion";

const ConnectUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 sm:p-8 lg:p-12">
      {/* Page Title with animation */}
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-indigo-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Connect with Us
      </motion.h1>

      {/* Social Media Links with animation */}
      <motion.div
        className="social-links text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-xl sm:text-2xl font-medium mb-4 text-indigo-400">Follow Us</h2>
        <ul className="flex flex-wrap justify-center gap-8">
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-blue-400 hover:text-blue-600"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-pink-400 hover:text-pink-600"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-red-400 hover:text-red-600"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="mailto:contact@company.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-gray-400 hover:text-gray-600"
            >
              Gmail
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Form Section with animation */}
      <motion.div
        className="contact-form bg-zinc-950 bg-opacity-50 backdrop-blur-sm border border-indigo-800 shadow-indigo-900 p-6 sm:p-8 lg:p-10 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-medium mb-6 text-center text-indigo-400">
          Submit Your Query
        </h2>
        {formSubmitted && (
          <motion.div
            className="text-green-500 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <p>Thank you for reaching out! We'll get back to you soon.</p>
          </motion.div>
        )}
        <form onSubmit={handleSubmit}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.2 }}
          >
            <label htmlFor="name" className="block text-base sm:text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900 text-white"
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.2 }}
          >
            <label htmlFor="email" className="block text-base sm:text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900 text-white"
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.2 }}
          >
            <label htmlFor="message" className="block text-base sm:text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900 text-white"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full flex justify-center items-center py-3 border-2 border-indigo-600 text-white text-lg sm:text-2xl rounded-md hover:border-indigo-400 focus:outline-none group"
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 group-hover:from-indigo-500 group-hover:via-indigo-400 group-hover:to-violet-400 bg-clip-text text-transparent w-fit font-medium">Submit</div>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ConnectUs;
