const Services = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our <span className="text-blue-600">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We provide comprehensive travel solutions to make your journey unforgettable. 
                        From planning to execution, we've got you covered.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Flight Bookings */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                        <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                            ✈️
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                            Flight Bookings
                        </h3>
                        <p className="text-gray-600 mb-6 text-center leading-relaxed">
                            Find the best flight deals and book your tickets with ease. We partner with major airlines to offer competitive prices.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Best Price Guarantee
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                24/7 Support
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Flexible Booking
                            </li>
                        </ul>
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
                    </div>

                    {/* Hotel Reservations */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                        <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                            🏨
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                            Hotel Reservations
                        </h3>
                        <p className="text-gray-600 mb-6 text-center leading-relaxed">
                            Discover amazing accommodations worldwide. From luxury resorts to budget-friendly stays, we have options for every traveler.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Verified Reviews
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Free Cancellation
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Exclusive Deals
                            </li>
                        </ul>
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
                    </div>

                    {/* Car Rentals */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                        <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                            🚗
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                            Car Rentals
                        </h3>
                        <p className="text-gray-600 mb-6 text-center leading-relaxed">
                            Explore your destination at your own pace with our reliable car rental service. Choose from a wide range of vehicles.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Unlimited Mileage
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Insurance Included
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                GPS Navigation
                            </li>
                        </ul>
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
                    </div>

                    {/* Tour Packages */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                        <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                            🗺️
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                            Tour Packages
                        </h3>
                        <p className="text-gray-600 mb-6 text-center leading-relaxed">
                            Experience curated tours and activities designed by local experts. Discover hidden gems and popular attractions.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Local Guides
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Small Groups
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Cultural Experiences
                            </li>
                        </ul>
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
                    </div>

                    {/* Travel Insurance */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                        <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                            🛡️
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                            Travel Insurance
                        </h3>
                        <p className="text-gray-600 mb-6 text-center leading-relaxed">
                            Protect your journey with comprehensive travel insurance coverage. Travel with confidence and peace of mind.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Medical Coverage
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Trip Cancellation
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Baggage Protection
                            </li>
                        </ul>
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
                    </div>

                    {/* 24/7 Support */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                        <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                            📞
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                            24/7 Support
                        </h3>
                        <p className="text-gray-600 mb-6 text-center leading-relaxed">
                            Our dedicated support team is available around the clock to assist you with any travel-related questions or issues.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Multi-language Support
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Emergency Assistance
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Real-time Updates
                            </li>
                        </ul>
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Let us help you plan the perfect trip. Contact our travel experts today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
                                Get Started
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;