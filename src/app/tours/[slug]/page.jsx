import { getStoryblokData } from "@/lib/storyblok-server";

export default async function TourPage({ params }) {
  const data = await getStoryblokData(`cdn/stories/tour-info/${params.slug}`, {
    version: "draft",
  });

  const tour = data.story?.content?.page?.[0];

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-red-600">Tour not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-[700px] mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        {tour.tour_title}
      </h1>

      {/* Image */}
      <div className="relative">
            <figure className="relative">
                {tour.tour_image?.filename && (
                    <img
                    src={tour.tour_image.filename}
                    alt={tour.tour_title}
                    className="w-full max-h-[500px] max-w-[700px] mx-auto object-cover rounded-lg mb-6 shadow-lg"
                    />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-center px-6 py-2 rounded-bl-lg rounded-br-lg shadow-lg border-t border-blue-800">
                    <div className="text-[20px] font-bold text-blue-300">
                        Package Price: 
                        <span className="text-[16px] font-semibold text-blue-200"> {tour.tour_price} ৳</span>
                        <span className="text-[14px] text-blue-100 font-light"> (2 persons)</span>
                    </div> 
                </div>
            </figure>
            <ul className="absolute right-2 top-2 flex items-center flex-wrap gap-2 mb-6">
                {tour.tour_category?.map((cat, idx) => (
                    <li className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold rounded-full px-3 py-1.5 shadow-lg backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-200" key={idx}>{cat}</li>
                ))}
            </ul>
      </div>


      {/* Description */}
      <p className="text-gray-700 leading-relaxed">{tour.tour_details}</p>
    </div>
  );
}
