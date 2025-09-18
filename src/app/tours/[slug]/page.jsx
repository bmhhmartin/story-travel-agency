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
            <figure>
                {tour.tour_image?.filename && (
                    <img
                    src={tour.tour_image.filename}
                    alt={tour.tour_title}
                    className="w-full max-h-[500px] max-w-[700px] mx-auto object-cover rounded-lg mb-6 shadow-lg"
                    />
                )}
            </figure>
            <ul className="absolute right-2 top-2 flex items-center flex-wrap gap-2 mb-6">
                {tour.tour_category?.map((cat, idx) => (
                    <li className="bg-purple-700 text-white text-sm rounded-sm px-2 py-1" key={idx}>{cat}</li>
                ))}
            </ul>
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold text-green-700 mb-4">
        Price: {tour.tour_price} ৳
      </p>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">{tour.tour_details}</p>
    </div>
  );
}
