'use client';

import { getStoryblokData } from "@/lib/storyblok-server";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ToursPage() {
    const [tours, setTours] = useState([]);
    const [sortedTours, setSortedTours] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const data = await getStoryblokData(
                    "cdn/stories", 
                    {
                        starts_with: "tour-info/",
                        sort_by: "created_at:desc"
                    }
                );
                const toursData = data.stories || [];
                setTours(toursData);
                setSortedTours(toursData);
                console.log('Tours array:', toursData);
            } catch (error) {
                console.error('Error fetching tours:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortOption(selectedSort);
        
        let filtered = [...tours];
        
        // First apply filtering
        if (selectedSort === 'abroad') {
            filtered = tours.filter(tour => {
                const categories = tour.content.page[0].tour_category || [];
                return categories.some(category => 
                    category.toLowerCase().includes('abroad') || 
                    category.toLowerCase().includes('international') ||
                    category.toLowerCase().includes('foreign')
                );
            });
        }
        
        // Then apply sorting
        if (selectedSort === 'low-to-high') {
            filtered.sort((a, b) => {
                const priceA = parseInt(a.content.page[0].tour_price) || 0;
                const priceB = parseInt(b.content.page[0].tour_price) || 0;
                return priceA - priceB;
            });
        } else if (selectedSort === 'high-to-low') {
            filtered.sort((a, b) => {
                const priceA = parseInt(a.content.page[0].tour_price) || 0;
                const priceB = parseInt(b.content.page[0].tour_price) || 0;
                return priceB - priceA;
            });
        }
        
        setSortedTours(filtered);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900"></div>
                    <p className="mt-4 text-gray-600">Loading tours...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-blue-900">All Tour Packages</h1>
                    <div className="relative">
                        <select 
                            value={sortOption} 
                            onChange={handleSortChange}
                            className="appearance-none bg-white border-2 border-blue-200 rounded-lg px-4 py-3 pr-10 text-gray-700 font-medium shadow-sm hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 cursor-pointer min-w-[180px]"
                        >
                            <option value="" className="text-gray-500">🔽 Filter & Sort</option>
                            <option value="low-to-high" className="text-gray-700">💰 Price: Low to High</option>
                            <option value="high-to-low" className="text-gray-700">💎 Price: High to Low</option>
                            <option value="abroad" className="text-gray-700">✈️ International Tours</option>
                        </select>
                        {/* Custom dropdown arrow */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                {sortedTours.length === 0 ? (
                <div className="text-center">
                    <p className="text-gray-500 text-lg mb-4">No tours found.</p>
                    <p className="text-gray-400 text-sm">Check the console for debugging information.</p>
                </div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedTours.map((tour) => {
                    const tourData = tour.content.page[0];
                    return (
                        <div key={tour.uuid} className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="relative">
                                <img
                                    src={tourData.tour_image?.filename}
                                    alt={tourData.tour_title}
                                    className="w-full h-48 object-cover"
                                />
                                <ul className="absolute right-2 bottom-2 flex items-center flex-wrap gap-2">
                                {tourData.tour_category?.map((cat, idx) => (
                                    <li 
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold rounded-full px-3 py-1.5 shadow-lg backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-200" 
                                        key={idx}
                                    >
                                        {cat}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold">{tourData.tour_title}</h3>
                                    <h3 className="text-sm font-bold">{tourData.tour_price} ৳</h3>
                                </div>
                                <p className="text-gray-600 line-clamp-2">{tourData.tour_details}</p>
                            </div>
                            <div>
                                <Link
                                href={`/tours/${tour.slug}`}
                                className="block bg-blue-600 text-white text-center py-3 hover:bg-blue-700 transition-colors"
                                >
                                Read More
                                </Link>
                            </div>
                        </div>
                    );
                    })}
                </div>
                )}
            </div>
        </div>
    );
}
