// components/AboutContent.jsx
import React from 'react';
import { Leaf, Sprout, Droplets, Shield, Wind, Sun, FlaskConical, Flower2, Bug, Sparkles } from 'lucide-react';

const AboutContent = () => {
  return (
    <div className="bg-linear-to-b from-green-50 to-white">
      {/* Full Width Video Banner with Fade */}
      <div className="relative w-full h-150 md:h-175 lg:h-200 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/858332896?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] min-w-full min-h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Agricultural Video Background"
            style={{ 
              pointerEvents: 'none',
              aspectRatio: '16/9',
            }}
          ></iframe>
          
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-green-900/90 via-green-800/50 to-emerald-900/70"></div>
          
          {/* Animated particles effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-amber-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
          </div>
          
          {/* Multiple Fade Layers */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-white via-white/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-linear-to-t from-white via-white/30 to-transparent"></div>
        </div>

        {/* Banner Text Overlay */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-3xl mt-20 md:mt-0">
            {/* Animated Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Sprout className="w-4 h-4 mr-2 text-amber-300" />
              <span className="text-sm font-medium">Est. 1995 • Gujarat, India</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              PUSHP<span className="text-amber-300">RATAN</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-4 max-w-2xl leading-relaxed">
              Greens Limited
            </p>
            <div className="flex items-center gap-4">
              <div className="w-20 h-1 bg-amber-400 rounded-full"></div>
              <span className="text-amber-200 text-sm tracking-widest">SINCE 1995</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Text Section */}
      <div className="relative -mt-32 z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-100">
            
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-100 rounded-2xl">
                <Leaf className="w-8 h-8 text-green-700" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-green-600 tracking-wider">ABOUT THE COMPANY</h2>
                <div className="w-12 h-0.5 bg-green-200 mt-1"></div>
              </div>
            </div>

            {/* Main Title */}
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Nurturing Growth, 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-700 to-emerald-600 block">
                Sustaining Tomorrow
              </span>
            </h3>
            
            {/* Company Description */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
              <p className="text-xl text-gray-700 font-medium border-l-4 border-green-500 pl-6 italic">
                "Headquartered in Gujarat, India, we are a renowned Agro Chemical company committed to revolutionizing agriculture."
              </p>
              
              <p>
                <span className="font-semibold text-green-700 text-xl">PushpRatan Greens Limited</span> stands at the 
                forefront of agricultural innovation, delivering precision-engineered solutions that empower farmers 
                across the nation. Our comprehensive range of products and unwavering commitment to quality have 
                established us as a trusted partner in India's agricultural growth story.
              </p>

              <p>
                We believe in the power of sustainable innovation. Every product we develop, from pesticides to 
                plant growth regulators, is crafted with meticulous attention to environmental responsibility and 
                farmer prosperity. Our mission extends beyond business—it's about cultivating a greener, more 
                abundant future for generations to come.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="text-3xl font-bold text-green-700 mb-1">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-6 bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="text-3xl font-bold text-green-700 mb-1">150+</div>
                <div className="text-sm text-gray-600">Innovative Products</div>
              </div>
              <div className="text-center p-6 bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="text-3xl font-bold text-green-700 mb-1">50k+</div>
                <div className="text-sm text-gray-600">Farmers Empowered</div>
              </div>
              <div className="text-center p-6 bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="text-3xl font-bold text-green-700 mb-1">22</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </div>
            </div>

            {/* Product Categories - NEW SECTION */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  Our <span className="text-green-600">Premium</span> Products
                </h4>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Crafting excellence in every solution, tailored for modern agriculture
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Chemicals Card */}
                <div className="group relative bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <FlaskConical className="w-8 h-8 text-white" />
                    </div>
                    
                    <h5 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors">
                      Chemicals
                    </h5>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Our state-of-the-art facilities produce a wide range of high-quality chemicals, 
                      catering to your diverse agricultural needs.
                    </p>
                    
                    <div className="mt-6 flex items-center text-purple-600 font-medium">
                      <span>Explore Range</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Fertilizers Card */}
                <div className="group relative bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Flower2 className="w-8 h-8 text-white" />
                    </div>
                    
                    <h5 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                      Fertilizers
                    </h5>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Our specialized fertilizers are formulated to optimize plant nutrition, 
                      promoting healthy growth and robust yields for farmers.
                    </p>
                    
                    <div className="mt-6 flex items-center text-green-600 font-medium">
                      <span>Explore Range</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Pesticides Card */}
                <div className="group relative bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full -mt-10 -mr-10 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Bug className="w-8 h-8 text-white" />
                    </div>
                    
                    <h5 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                      Pesticides
                    </h5>
                    
                    <p className="text-gray-600 leading-relaxed">
                      We develop effective and environmentally responsible pesticides, 
                      safeguarding crops from pests and ensuring sustainable farming practices.
                    </p>
                    
                    <div className="mt-6 flex items-center text-amber-600 font-medium">
                      <span>Explore Range</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Understanding Your Crop Section */}
            <div className="relative mb-16">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-linear-to-r from-green-100/50 to-emerald-100/50 rounded-3xl -m-4"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-green-200 shadow-xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-green-200/20 rounded-full -mt-20 -ml-20"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-emerald-200/20 rounded-full -mb-30 -mr-30"></div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  {/* Sparkle Icons */}
                  <div className="flex justify-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-amber-500" />
                    <Sparkles className="w-8 h-8 text-green-500" />
                    <Sparkles className="w-6 h-6 text-amber-500" />
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                    We understand your <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600">crop's need</span>
                  </h4>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Nurtured in Gujarat, <span className="font-bold text-green-700">Pushpratan</span> is your trusted agrochemical companion, 
                    devoted to crafting top-tier solutions - chemicals, fertilizers, pesticides - tailored to your crop's desires. 
                    <span className="block mt-4 text-2xl font-bold text-green-600">Let's grow greatness together!</span>
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button className="px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-200 transition-all duration-300 hover:-translate-y-1">
                      Discover Our Products
                    </button>
                    <button className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold border-2 border-green-600 hover:bg-green-50 transition-all duration-300 hover:-translate-y-1">
                      Talk to Our Experts
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitment Banner */}
            <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mt-10 -mr-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-10 -ml-10"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-3">Our Commitment to Excellence</h4>
                <p className="text-white/90 max-w-3xl">
                  At PushpRatan, quality isn't just a standard—it's our foundation. Every product undergoes 
                  rigorous testing and research to ensure it meets the highest standards of efficacy and safety. 
                  We're not just creating agricultural solutions; we're cultivating trust, one farmer at a time.
                </p>
                <div className="flex gap-4 mt-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">ISO 9001:2024 Certified</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">Green India Initiative Partner</span>
                </div>
              </div>
            </div>

            {/* Footer Quote */}
            <div className="text-center border-t border-gray-200 pt-8">
              <p className="text-gray-500 italic text-lg">
                "Shaping the future of agriculture through innovation, sustainability, and unwavering dedication to the farming community."
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Leaf className="w-4 h-4 text-green-500" />
                <Leaf className="w-4 h-4 text-green-500" />
                <Leaf className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;