import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-red-600 opacity-60 leading-none">
                        404
                    </h1>
                </div>
                {/* Travel-themed Message */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-2xl mx-auto">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Page Not Found
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        The page you're looking for seems to have gone on vacation. 
                        But don't worry - we'll help you find your way back to amazing destinations!
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link 
                        href="/"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
                    >
                        🏠 Go Home
                    </Link>
                    <Link 
                        href="/tours"
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        ✈️ Explore Tours
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto mb-10">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Maybe you were looking for:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        <Link 
                            href="/tours" 
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            <span className="text-2xl">🗺️</span>
                            <div>
                                <div className="font-medium text-gray-900">Tours & Destinations</div>
                                <div className="text-sm text-gray-600">Discover amazing places</div>
                            </div>
                        </Link>
                        <Link 
                            href="/about" 
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            <span className="text-2xl">ℹ️</span>
                            <div>
                                <div className="font-medium text-gray-900">About Us</div>
                                <div className="text-sm text-gray-600">Learn our story</div>
                            </div>
                        </Link>
                        <Link 
                            href="/contact" 
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            <span className="text-2xl">📞</span>
                            <div>
                                <div className="font-medium text-gray-900">Contact</div>
                                <div className="text-sm text-gray-600">Get in touch</div>
                            </div>
                        </Link>
                        <Link 
                            href="/" 
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            <span className="text-2xl">🏠</span>
                            <div>
                                <div className="font-medium text-gray-900">Home</div>
                                <div className="text-sm text-gray-600">Start your journey</div>
                            </div>
                        </Link>
                    </div>
                </div>

                
            </div>
        </div>
    );
}
