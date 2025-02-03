import React, { useState } from "react";
import { Menu, X } from "lucide-react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#about",
    label: "About Us"
  }, {
    href: "#ingredients",
    label: "Ingredients"
  }, {
    href: "#pharmacology",
    label: "Pharmacology"
  }, {
    href: "#testimonials",
    label: "Testimonies"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-playfair font-bold text-[#C4A484]">
              Energamine
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => <a key={item.href} href={item.href} className="text-gray-700 hover:text-[#C4A484] transition-colors">
                {item.label}
              </a>)}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems.map(item => <a key={item.href} href={item.href} className="block px-3 py-2 text-gray-700">
                {item.label}
              </a>)}
          </div>
        </div>}
    </nav>;
};