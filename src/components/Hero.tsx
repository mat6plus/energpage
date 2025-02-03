import React from "react";
import { ArrowDown, Leaf, Battery, Heart } from "lucide-react";
export const Hero = () => {
  const scrollToIngredients = () => {
    document.getElementById("ingredients")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div id="home" className="relative min-h-screen bg-gradient-to-b from-[#F9F5F0] to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#C4A484]/10"></div>
        <div className="absolute top-1/2 -left-20 w-64 h-64 rounded-full bg-[#C4A484]/5"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1 bg-[#C4A484]/10 rounded-full">
              <span className="text-[#C4A484] font-semibold">
                Natural Energy Boost
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-gray-900">
              Unlock Your
              <span className="block text-[#C4A484] mt-2">
                Natural Potential
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Experience the power of nature with Energamine's premium blend of
              natural ingredients, scientifically formulated for optimal
              performance and vitality.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <button onClick={scrollToIngredients} className="group flex items-center gap-2 bg-[#C4A484] text-white px-8 py-4 rounded-full hover:bg-[#B39476] transition-all transform hover:scale-105">
                Discover More
                <ArrowDown className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              {[{
              icon: <Leaf className="w-6 h-6" />,
              label: "100% Natural"
            }, {
              icon: <Battery className="w-6 h-6" />,
              label: "Energy Boost"
            }, {
              icon: <Heart className="w-6 h-6" />,
              label: "Wellness"
            }].map((item, index) => <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                  <div className="text-[#C4A484] mb-2">{item.icon}</div>
                  <span className="text-sm font-medium text-gray-600">
                    {item.label}
                  </span>
                </div>)}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A484]/20 via-[#8B4513]/10 to-transparent rounded-3xl transform scale-110"></div>
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay"></div>
            <div className="relative group">
              <img 
                src="/images/5noBKG.png" 
                alt="Energamine product" 
                className="relative z-10 w-[140%] h-auto max-w-none -ml-[20%] transform 
                  group-hover:scale-105 group-hover:-rotate-2 
                  transition-all duration-700 ease-out
                  animate-float"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(196, 164, 132, 0.4))"
                }}
              />
              <div className="absolute -bottom-12 left-1/2 w-full h-24 
                transform -translate-x-1/2 
                bg-gradient-to-r from-transparent via-[#C4A484]/20 to-transparent 
                blur-3xl rounded-full">
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/4 right-0 w-24 h-24 
                bg-gradient-to-br from-[#C4A484]/40 to-transparent 
                rounded-full blur-2xl animate-pulse">
              </div>
              <div className="absolute bottom-1/4 left-0 w-32 h-32 
                bg-gradient-to-tl from-[#8B4513]/30 to-transparent 
                rounded-full blur-2xl animate-pulse delay-1000">
              </div>
            </div>
            
            {/* Additional Glow Effects */}
            <div className="absolute -top-12 left-1/2 w-2/3 h-12 
              transform -translate-x-1/2 rotate-12
              bg-gradient-to-r from-[#C4A484]/10 via-[#8B4513]/20 to-[#C4A484]/10 
              blur-2xl">
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-[#C4A484]" />
      </div>
    </div>;
};