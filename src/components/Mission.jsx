const Mission = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our <span className="text-blue-600">Mission</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. 
                        Our mission is to make extraordinary journeys accessible to everyone.
                    </p>
                </div>

                {/* Main Mission Statement */}
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                            "To inspire and enable meaningful travel experiences that connect people, cultures, and destinations around the world."
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Every journey begins with a dream, and we're here to turn those dreams into unforgettable realities. 
                            Through personalized service, expert guidance, and innovative solutions, we craft travel experiences that go beyond the ordinary.
                        </p>
                    </div>
                </div>

                {/* Core Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Excellence */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Excellence
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            We strive for perfection in every detail, from the initial planning stages to the moment you return home with incredible memories.
                        </p>
                    </div>

                    {/* Innovation */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Innovation
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            We embrace cutting-edge technology and creative solutions to enhance your travel experience and make planning effortless.
                        </p>
                    </div>

                    {/* Authenticity */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Authenticity
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            We connect you with genuine local experiences and cultural immersion that reveal the true spirit of each destination.
                        </p>
                    </div>

                    {/* Sustainability */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Sustainability
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            We promote responsible tourism practices that protect the environment and support local communities for future generations.
                        </p>
                    </div>

                    {/* Trust */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Trust
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            We build lasting relationships through transparency, reliability, and unwavering commitment to your satisfaction and safety.
                        </p>
                    </div>

                    {/* Passion */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Passion
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            Our love for travel and exploration drives everything we do, inspiring us to create extraordinary experiences for every traveler.
                        </p>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-white mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
                        <p className="text-blue-100 text-lg">Numbers that reflect our commitment to excellence</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                            <div className="text-blue-100">Happy Travelers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">120+</div>
                            <div className="text-blue-100">Destinations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                            <div className="text-blue-100">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                            <div className="text-blue-100">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Join Our Journey
                        </h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Be part of a community that values meaningful travel experiences. Let's explore the world together, one adventure at a time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg">
                                Start Your Adventure
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg">
                                Learn More About Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
