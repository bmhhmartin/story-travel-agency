const ToursPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center pt-20">
          <h1 className="text-5xl font-bold mb-6">Discover Amazing Tours</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore the world's most beautiful destinations with our carefully curated tour experiences
          </p>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tour Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop"
                alt="Paris City Explorer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Paris City Explorer
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Discover the magic of Paris with our comprehensive city tour. Visit iconic landmarks and hidden gems.
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>

          {/* Tour Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop"
                alt="Rome Ancient Wonders"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Rome Ancient Wonders
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Step back in time and explore the eternal city's ancient monuments and rich history.
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>

          {/* Tour Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop"
                alt="Tokyo Cultural Journey"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tokyo Cultural Journey
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Immerse yourself in Japanese culture with temples, gardens, and traditional experiences.
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>

          {/* Tour Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop"
                alt="New York City Lights"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                New York City Lights
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Experience the energy of the Big Apple with our guided tour of Manhattan's highlights.
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>

          {/* Tour Card 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
                alt="London Royal Heritage"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                London Royal Heritage
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Explore London's royal history and modern attractions in this comprehensive city tour.
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>

          {/* Tour Card 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop"
                alt="Barcelona Art & Architecture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Barcelona Art & Architecture
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Discover Gaudí's masterpieces and Barcelona's vibrant culture on this artistic journey.
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have experienced the world with us
          </p>
          <button className="bg-white text-gray-800 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            View All Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;