import React from "react";
import { Send } from "lucide-react";
export const Contact = () => {
  return <section id="contact" className="py-24 bg-[#F9F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Want to know more?
          </h2>
          <div className="w-24 h-1 bg-[#C4A484] mx-auto mb-8"></div>
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates, exclusive offers, and wellness tips.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#C4A484]" />
            <button type="submit" className="group flex items-center justify-center bg-[#C4A484] text-white px-8 py-3 rounded-full hover:bg-[#B39476] transition-colors">
              Subscribe
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>;
};