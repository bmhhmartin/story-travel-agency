import Link from "next/link";

export default function HeroBanner({ data }) {
  const backgroundImageUrl =
    data?.BackgroundImage?.filename || data?.BackgroundImage?.url || "";

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 h-[700px] flex items-center overlay"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto text-center relative z-20">
        {data?.Title && (
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {data.Title}
          </h2>
        )}

        {data?.Subtitle && (
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            {data.Subtitle}
          </p>
        )}

        {data?.ButtonURL && data?.ButtonName && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={data.ButtonURL}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              {data.ButtonName}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
