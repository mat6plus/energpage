import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-[#C4A484] mb-4">
              Energamine
            </h3>
            <p className="text-gray-600">
              Bringing wellness to your daily routine through the power of
              premium herbal teas.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#C4A484]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-600 hover:text-[#C4A484]">
                  Products
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-[#C4A484]">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#C4A484]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>798 Burton Avenue</li>
              <li>Sudbury, ON P3C4L4</li>
              <li>contact@energamine.com</li>
              <li>(786) 663-1242</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#C4A484]">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#C4A484]">
                <Twitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#C4A484]">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Energamine. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};