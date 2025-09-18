import { getStoryblokData } from "@/lib/storyblok-server";

export default async function Services() {
  // ✅ Await Storyblok request
  const data = await getStoryblokData("cdn/stories/", {
    starts_with: "services/service-all-cards/",
    sort_by: "created_at:desc",
  });

  const topInfo = await getStoryblokData("cdn/stories/", {
    starts_with: "services/services-info/",
    sort_by: "created_at:desc",
  });

  const services = data?.stories || [];
  const topDetails = topInfo?.stories || [];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {topDetails[0]?.content.page[0]?.title_info}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {topDetails[0]?.content.page[0]?.subtitle_info}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) =>
            service.content.page?.map((item, idx) => (
                <div
                key={`${service.uuid}-${idx}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
                >
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                    {item.service_icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {item.service_title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {item.service_details}
                </p>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
                </div>
            ))
        )}
        </div>
        
      </div>
    </section>
  );
}
