import React from "react";
import { Star } from "lucide-react";
const testimonials = [{
  name: "Alex M.",
  role: "Fitness Enthusiast",
  content: "Energimin has completely transformed my workout routine. I feel more energized and focused than ever.",
  rating: 5
}, {
  name: "Sarah K.",
  role: "Wellness Coach",
  content: "I recommend Energimin to all my clients. The natural ingredients and proven results speak for themselves.",
  rating: 5
}, {
  name: "Michael R.",
  role: "Business Professional",
  content: "This product has helped me maintain high energy levels throughout my busy workday. Truly remarkable.",
  rating: 5
}];
export const Testimonials = () => {
  return <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-[#C4A484] mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-[#F9F5F0] p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#C4A484] text-[#C4A484]" />)}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};