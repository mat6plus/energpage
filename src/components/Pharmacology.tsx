import React from "react";
import { Activity, Clock, AlertTriangle, Zap, Brain, Dumbbell } from "lucide-react";
export const Pharmacology = () => {
  return <section id="pharmacology" className="relative py-24 bg-gradient-to-b from-white to-[#F9F5F0]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C4A484]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C4A484]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-[#C4A484]/10 rounded-full mb-4">
            <Activity className="w-6 h-6 text-[#C4A484]" />
          </div>
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Scientific Research
          </h2>
          <div className="w-24 h-1 bg-[#C4A484] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the scientifically proven benefits and carefully researched
            formulation behind Energamine's powerful natural supplement.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-[#C4A484]" />
                  Pharmacological Action
                </h3>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#C4A484] to-transparent rounded-full"></div>
                    <div className="pl-6">
                      <p className="text-gray-600 leading-relaxed">
                        Under the special action of Tongkat ali (eurycoma longifolio), testosterone sequestered in the blood is released and becomes active and usable testosterone by lowering SHBG (mandatory globulin, sex hormone) by an average of 30%. It also increases the metabolism of tissues associated with sexual functions to 60%.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-[#F9F5F0] p-6 rounded-xl">
                      <Brain className="w-6 h-6 text-[#C4A484] mb-4" />
                      <h4 className="font-semibold mb-2">
                        Cognitive Enhancement
                      </h4>
                      <p className="text-sm text-gray-600">
                        Improves mental clarity, focus, and concentration skills
                      </p>
                    </div>
                    <div className="bg-[#F9F5F0] p-6 rounded-xl">
                      <Dumbbell className="w-6 h-6 text-[#C4A484] mb-4" />
                      <h4 className="font-semibold mb-2">
                        Physical Performance
                      </h4>
                      <p className="text-sm text-gray-600">
                        Enhances strength, endurance, and vitality
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="text-gray-600 mb-4 italic">
                      Energamine is an aphrodisiac organic dietary coffee and stimulant used against general asthenia.
                      Improves erectile dysfunction, premature ejaculation, male and female sexual functions.
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#C4A484] rounded-full"></div>
                        <span>Boosts testosterone naturally</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#C4A484] rounded-full"></div>
                        <span>Improve endurance and concentration skills</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#C4A484] rounded-full"></div>
                        <span>Reinforces overall wellness</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#C4A484] rounded-full"></div>
                        <span>Stimulates natural energy</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#C4A484] rounded-full"></div>
                        <span>Cholesterol Control (Natural Sweetener)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#C4A484]/10 rounded-full">
                  <Clock className="w-6 h-6 text-[#C4A484]" />
                </div>
                <h3 className="text-xl font-semibold">Dosage Protocol</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-[#F9F5F0] rounded-xl">
                  <p className="font-medium mb-2">Attack Phase</p>
                  <p className="text-sm text-gray-600">
                    One bag every 1-2 days (First 12 days)
                  </p>
                </div>
                <div className="p-4 bg-[#F9F5F0] rounded-xl">
                  <p className="font-medium mb-2">Maintenance</p>
                  <p className="text-sm text-gray-600">
                    One bag every 2-3 days
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#C4A484]/10 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-[#C4A484]" />
                </div>
                <h3 className="text-xl font-semibold">Important Notice</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Not recommended for children, pregnant or breastfeeding women,
                or patients with advanced heart conditions. Consult healthcare
                provider before use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};