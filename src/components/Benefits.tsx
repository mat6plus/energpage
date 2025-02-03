import React from "react";
import { Brain, Heart, Moon, Sun, Battery, Shield, ArrowRight } from "lucide-react";
export const Benefits = () => {
  const benefits = [{
    icon: <Brain />,
    title: "Enhanced Mental Clarity",
    description: "Sharpen focus and cognitive function for peak mental performance",
    color: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100"
  }, {
    icon: <Heart />,
    title: "Heart Health Support",
    description: "Natural compounds that promote cardiovascular wellness",
    color: "from-red-50 to-pink-50",
    iconBg: "bg-red-100"
  }, {
    icon: <Moon />,
    title: "Quality Sleep",
    description: "Improve natural sleep patterns for better rest and recovery",
    color: "from-purple-50 to-indigo-50",
    iconBg: "bg-purple-100"
  }, {
    icon: <Sun />,
    title: "Natural Energy Boost",
    description: "Sustainable energy without the crashes of artificial stimulants",
    color: "from-yellow-50 to-orange-50",
    iconBg: "bg-yellow-100"
  }, {
    icon: <Battery />,
    title: "Enhanced Vitality",
    description: "Boost daily energy levels and overall physical performance",
    color: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100"
  }, {
    icon: <Shield />,
    title: "Immune Support",
    description: "Strengthen natural defense systems for better health",
    color: "from-teal-50 to-cyan-50",
    iconBg: "bg-teal-100"
  }];
  return <section id="benefits" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#C4A484]/5"></div>
        <div className="absolute top-1/2 -left-20 w-64 h-64 rounded-full bg-[#C4A484]/5"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#C4A484]/10 rounded-full text-[#C4A484] font-semibold mb-4">
            Wellness Benefits
          </span>
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Natural Benefits for Your Body
          </h2>
          <div className="w-24 h-1 bg-[#C4A484] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the comprehensive benefits of our carefully formulated
            blend, designed to enhance every aspect of your well-being.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="group relative bg-gradient-to-br rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" style={{
          background: `linear-gradient(135deg, ${benefit.color})`
        }}>
              <div className="absolute inset-0 bg-white opacity-90"></div>
              <div className="relative p-8">
                <div className={`${benefit.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-[#C4A484]">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C4A484] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="flex items-center text-[#C4A484] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};