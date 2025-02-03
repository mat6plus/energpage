import React from "react";
import { Leaf, Heart, Coffee } from "lucide-react";
export const About = () => {
  return <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            About Energamine
          </h2>
          <div className="w-24 h-1 bg-[#C4A484] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover the power of nature with Energamine, your premium herbal
            supplement for enhanced vitality and wellness.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair font-bold text-gray-900">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in harnessing the power of nature's
              finest ingredients to create a supplement that truly makes a
              difference in your daily life. Our unique blend of premium herbs
              is carefully sourced and scientifically formulated to provide you
              with optimal results.

              Our proprietary extracts deliver concentrated nutrients that 
              synergistically promote male performance with 98% success rate in men. 
              All ingredients are 100% natural.

              We are absolutely confident that you will enjoy benefits within days and weeks of taking Energamine.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F9F5F0] p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Natural Sourcing</h4>
                <p className="text-sm text-gray-600">
                  100% naturally sourced ingredients
                </p>
              </div>
              <div className="bg-[#F9F5F0] p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Quality Testing</h4>
                <p className="text-sm text-gray-600">
                  Rigorous quality control standards
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:ml-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4A484]/10 via-[#8B4513]/5 to-transparent rounded-3xl transform scale-105"></div>
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay rounded-3xl"></div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#C4A484]/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tl from-[#8B4513]/20 to-transparent rounded-full blur-2xl"></div>
              <img 
                src="/images/3noBKG.png" 
                alt="Energamine product showcase" 
                className="relative z-10 w-full h-auto object-contain rounded-3xl transform hover:scale-102 transition-transform duration-500"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(196, 164, 132, 0.25))",
                  maxHeight: "600px"
                }}
              />
              <div className="absolute bottom-0 left-1/2 w-4/5 h-20 
                transform -translate-x-1/2 
                bg-gradient-to-r from-transparent via-[#C4A484]/15 to-transparent 
                blur-2xl rounded-full">
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
          icon: <Leaf className="w-8 h-8 text-[#C4A484]" />,
          title: "Premium Quality",
          description: "Only the finest natural ingredients make it into our formula."
        }, {
          icon: <Heart className="w-8 h-8 text-[#C4A484]" />,
          title: "Scientifically Backed",
          description: "Research-supported benefits for your well-being."
        }, {
          icon: <Coffee className="w-8 h-8 text-[#C4A484]" />,
          title: "Pure Results",
          description: "Experience the difference of pure, natural energy."
        }].map((item, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex justify-center mb-4 bg-[#F9F5F0] p-4 rounded-full w-16 h-16 items-center mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>)}
        </div>
        {/* Enhanced Additional Content Sections */}
        <div className="mt-24 space-y-32">
          {/* Hero Section with Parallax Effect */}
          <div className="relative">
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-5xl font-playfair font-bold text-gray-900 mb-6 transform transition-all duration-700 hover:scale-105">
                Unlock Natural Energy & Vitality with
                <span className="block mt-2 bg-gradient-to-r from-[#C4A484] to-[#8B4513] text-transparent bg-clip-text">
                  ENERGAMINE Herbal Coffee
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#C4A484] to-[#8B4513] mx-auto mb-8 transform hover:scale-x-110 transition-transform duration-300"></div>
              <p className="text-gray-600 max-w-4xl mx-auto text-xl leading-relaxed font-light">
                Rediscover the vibrant, confident version of yourself with <span className="font-semibold text-[#C4A484]">ENERGAMINE</span>—a 100% organic herbal coffee blend crafted to elevate men's health, stamina, and performance. Imagine reigniting the passion and energy you deserve, all through the power of nature. Your journey to a revitalized life starts here.
              </p>
            </div>
          </div>

          {/* Science of Natural Strength Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[#F9F5F0]"></div>
              <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-br from-[#C4A484]/20 to-transparent rounded-full blur-3xl transform -rotate-12"></div>
              <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-[#8B4513]/20 to-transparent rounded-full blur-3xl transform rotate-12"></div>
              <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
            </div>
            <div className="relative z-10 py-24 px-12">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">
                  Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">ENERGAMINE</span>?
                  <span className="block mt-2 text-3xl">The Science of Natural Strength</span>
                </h3>
                <p className="text-gray-700 mb-12 text-xl max-w-4xl mx-auto text-center leading-relaxed">
                  What if the key to unlocking peak vitality was as simple as your morning brew? <span className="font-semibold">ENERGAMINE</span> isn't just a delicious herbal coffee—it's a thoughtfully formulated dietary supplement designed to nourish your body, enhance energy levels, and support healthy sexual function.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="group bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#C4A484]/10">
                    <div className="h-20 w-20 bg-gradient-to-br from-[#C4A484] to-[#8B4513] rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-3xl">⚡</span>
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513] text-center">Sustained Energy & Stamina</h4>
                    <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Fuel your day with clean, natural vigor.</p>
                  </div>
                  <div className="group bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#C4A484]/10">
                    <div className="h-20 w-20 bg-gradient-to-br from-[#C4A484] to-[#8B4513] rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-3xl">💪</span>
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513] text-center">Healthy Testosterone Levels</h4>
                    <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Support your body's hormonal balance for improved drive and performance.</p>
                  </div>
                  <div className="group bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#C4A484]/10">
                    <div className="h-20 w-20 bg-gradient-to-br from-[#C4A484] to-[#8B4513] rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-3xl">🌟</span>
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513] text-center">Overall Wellness</h4>
                    <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Enriched with antioxidants and nutrients to fortify physical and mental resilience.</p>
                  </div>
                </div>
                <div className="relative mt-16 bg-gradient-to-r from-[#C4A484]/10 to-[#8B4513]/10 py-10 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-[#C4A484]/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-gradient-to-bl from-[#8B4513]/20 to-transparent rounded-full blur-2xl"></div>
                  <p className="text-center text-2xl text-gray-700 font-light italic relative z-10 px-6">
                    <span className="block text-3xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513] mb-3">Simple. Natural. Effective.</span>
                    Crafted for simplicity, <span className="font-medium text-[#C4A484]">ENERGAMINE</span> seamlessly integrates into your daily routine.
                    <span className="block mt-2 text-xl">Just brew, savor, and let nature's potency take effect.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The ENERGAMINE Difference Section */}
          <div className="relative px-4 py-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F9F5F0]/50 to-white/50"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-playfair font-bold text-gray-900 mb-12 text-center">
                The ENERGAMINE Difference:
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">More Than Just a Coffee</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C4A484] to-[#8B4513]"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#C4A484]/5 to-transparent"></div>
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#C4A484] to-[#8B4513] rounded-lg flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                        <span className="text-white text-2xl">🎯</span>
                      </div>
                      <h4 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">Natural Testosterone Support</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Gently restore hormonal balance for heightened endurance and confidence.</p>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-5 h-5 text-[#C4A484]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Clinically Proven Results</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C4A484] to-[#8B4513]"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#C4A484]/5 to-transparent"></div>
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#C4A484] to-[#8B4513] rounded-lg flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                        <span className="text-white text-2xl">💫</span>
                      </div>
                      <h4 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">Enhanced Circulation</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Promote blood flow to critical areas, optimizing performance when it matters most.</p>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-5 h-5 text-[#C4A484]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Fast-Acting Formula</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C4A484] to-[#8B4513]"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#C4A484]/5 to-transparent"></div>
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#C4A484] to-[#8B4513] rounded-lg flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                        <span className="text-white text-2xl">✨</span>
                      </div>
                      <h4 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513]">Mental Clarity</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">Combat fatigue and stay focused, both in and out of the bedroom.</p>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-5 h-5 text-[#C4A484]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>All-Day Energy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative py-6 px-8 bg-gradient-to-r from-[#C4A484]/10 to-[#8B4513]/10 rounded-xl max-w-3xl mx-auto">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay rounded-xl"></div>
                <p className="text-center text-xl text-gray-700 font-light relative z-10">
                  Trusted by <span className="font-semibold text-[#C4A484]">thousands of men</span> worldwide, ENERGAMINE offers a safe, effective solution for those ready to reclaim their energy and passion.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="relative overflow-hidden mt-16">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F9F5F0] to-white"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-5"></div>
              <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#C4A484]/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-[#8B4513]/20 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 py-24 px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513] mb-8">
                  Ready to Transform Your Life?
                </h3>
                <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                  Don't settle for fleeting fixes or synthetic supplements. <span className="font-semibold text-[#C4A484]">ENERGAMINE</span> is your delicious, all-natural answer to lasting vitality. Whether you're seeking to rekindle intimacy, boost daily performance, or simply feel your best, this herbal coffee blend is your partner in progress.
                </p>
                <button className="group relative px-12 py-5 rounded-full text-xl font-semibold text-white mb-12 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C4A484] to-[#8B4513] transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Order ENERGAMINE Now
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <div className="border-t border-[#C4A484]/30 pt-8">
                  <p className="text-2xl font-playfair italic text-transparent bg-clip-text bg-gradient-to-r from-[#C4A484] to-[#8B4513] mb-6">
                    ENERGAMINE: Where Nature Meets Nourishment
                  </p>
                  <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
                    <div className="group flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
                      <span className="w-3 h-3 bg-gradient-to-r from-[#C4A484] to-[#8B4513] rounded-full"></span>
                      <span className="group-hover:text-[#C4A484] transition-colors duration-300">100% Organic</span>
                    </div>
                    <div className="group flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
                      <span className="w-3 h-3 bg-gradient-to-r from-[#C4A484] to-[#8B4513] rounded-full"></span>
                      <span className="group-hover:text-[#C4A484] transition-colors duration-300">Scientifically-Backed Ingredients</span>
                    </div>
                    <div className="group flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105">
                      <span className="w-3 h-3 bg-gradient-to-r from-[#C4A484] to-[#8B4513] rounded-full"></span>
                      <span className="group-hover:text-[#C4A484] transition-colors duration-300">Made for Modern Men</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};