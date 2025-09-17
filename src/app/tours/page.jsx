// app/tours/page.jsx
import { getStoryblokData } from "@/lib/storyblok-server";

export default async function ToursPage() {
  const data = await getStoryblokData(
    "cdn/stories", 
    {
      starts_with: "tour-info/",
      sort_by: "created_at:desc"
    }
  );

  const tours = data.stories || []; // make sure we use stories array
  
  console.log('Tours array:', tours);
  
  // Log tour titles specifically

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {tours.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 text-lg mb-4">No tours found.</p>
            <p className="text-gray-400 text-sm">Check the console for debugging information.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => {
              const tourData = tour.content?.page?.[0] || {};
              return (
                <div key={tour.uuid} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={tourData.tour_image?.filename || "https://via.placeholder.com/400x300"}
                    alt={tourData.tour_title || "Tour"}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{tourData.tour_title || 'No title'}</h3>
                    <p className="text-gray-600">{tourData.tour_details || 'No description available'}</p>
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
