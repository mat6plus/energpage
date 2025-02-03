import React from "react";
const ingredients = [{
  name: "Tongkat ali",
  scientific: "Eurycoma longifolia",
  description: "An Asian tree growing in Indonesia and Malaysia. Known for its sexual enhancement features and ability to boost natural testosterone. Its ability to boost natural testosterone allows it to increase libido, muscle mass, energy and sports performance.",
  image: "/images/Tongkat ali.png"
}, {
  name: "Guarana",
  scientific: "Paullinia cupana",
  description: "A sacred plant from the Amazon rainforest containing guaranine, similar to caffeine. Contains theobromine, theophylline, tannins, and other compounds that improve endurance and cognitive abilities.",
  image: "/images/Guarana.png"
}, {
  name: "Maca",
  scientific: "Lepidium meyenii",
  description: "A tuber that grows in Latin America, composed of proteins, minerals, vitamins, and amino acids. Known to have tonic effects on the immune system and fertility.",
  image: "/images/Maca.png"
}, {
  name: "Stevia",
  scientific: "Stevia rebaudiana",
  description: "A natural sweetener native to South America. Contains sterol and antioxidant compounds, helping control cholesterol and blood pressure.",
  image: "/images/Stevia.png"
}, {
  name: "Coffee",
  scientific: "Organic",
  description: "A stimulating psychotropic energy drink with proven positive effects on cognitive function and physical performance. Contains beneficial compounds that support overall wellness.",
  image: "/images/Coffee.png"
}, {
  name: "Non-dairy Milk",
  scientific: "Natural cream",
  description: "Contains essential dairy proteins that support nutritional balance without the use of artificial additives.",
  image: "/images/Non-dairy cremes.png"
}];

export const Ingredients = () => {
  return <section id="ingredients" className="py-24 bg-[#F9F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Natural Ingredients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C4A484] to-[#8B4513] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Each ingredient in Energamine is carefully selected for its unique
            properties and scientifically proven benefits.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A484]/10 via-[#8B4513]/5 to-transparent"></div>
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name} 
                  className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  style={{
                    filter: "drop-shadow(0 4px 6px rgba(196, 164, 132, 0.1))"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C4A484] to-[#8B4513] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <h3 className="text-2xl font-semibold mb-1 text-gray-900 group-hover:text-[#C4A484] transition-colors duration-300">
                  {ingredient.name}
                </h3>
                <p className="text-sm text-[#C4A484] italic mb-4 font-medium">
                  {ingredient.scientific}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {ingredient.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};