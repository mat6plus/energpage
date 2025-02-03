import React from "react";
const products = [{
  name: "Energizing Blend",
  description: "A revitalizing mix of herbs for natural energy",
  price: "$24.99",
  image: "/images/5.png"
}, {
  name: "Calming Chamomile",
  description: "Soothing blend for relaxation and peace",
  price: "$22.99",
  image: "/images/3.png"
}, {
  name: "Wellness Tonic",
  description: "Daily boost for your immune system",
  price: "$26.99",
  image: "/images/5.png"
}];
export const Products = () => {
  return <section id="products" className="py-24 bg-[#F9F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <div className="w-24 h-1 bg-[#C4A484] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-4">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#C4A484] font-bold">
                      {product.price}
                    </span>
                    <button className="bg-[#C4A484] text-white px-4 py-2 rounded-full hover:bg-[#B39476] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};