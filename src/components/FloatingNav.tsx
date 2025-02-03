import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const navItems = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#product",
    label: "Product"
  }, {
    href: "#ingredients",
    label: "Ingredients"
  }, {
    href: "#about",
    label: "About Us"
  }, {
    href: "#testimonials",
    label: "Testimonies"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <>
      <nav className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2">
          <ul className="space-y-2">
            {navItems.map(item => <li key={item.href}>
                <a href={item.href} className="w-3 h-3 block bg-[#C4A484] rounded-full hover:scale-125 transition-transform" title={item.label} />
              </li>)}
          </ul>
        </div>
      </nav>
      <button onClick={scrollToTop} className={`fixed bottom-4 right-4 bg-[#C4A484] text-white p-3 rounded-full shadow-lg hover:bg-[#B39476] transition-all z-50 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <ChevronUp className="w-6 h-6" />
      </button>
    </>;
};