// app/tours/page.jsx
import { getStoryblokData } from "@/lib/storyblok-server";
import Link from "next/link";

export default async function ToursPage() {

    const data = await getStoryblokData(
        "cdn/stories", 
        {
        starts_with: "tour-info/",
        sort_by: "created_at:desc"
        }
    );

    const tours = data.stories || [];
    
    console.log('Tours array:', tours);
    
    // Log tour titles specifically

    return (
        <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">All Tour Packages</h1>
            {tours.length === 0 ? (
            <div className="text-center">
                <p className="text-gray-500 text-lg mb-4">No tours found.</p>
                <p className="text-gray-400 text-sm">Check the console for debugging information.</p>
            </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tours.map((tour) => {
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
                                <li className="bg-orange-700 text-white text-sm rounded-sm px-2 py-1" key={idx}>{cat}</li>
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
