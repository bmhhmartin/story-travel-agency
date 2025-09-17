import Link from "next/link";

type HeroBannerProps = {
  data: {
    BackgroundImage?: {
      filename?: string;
      url?: string;
    };
    Title?: string;
    Subtitle?: string;
    ButtonURL?: string;
    ButtonName?: string;
  };
};

export default function HeroBanner({ data }: HeroBannerProps) {
  // Handle background image - Storyblok returns asset as object with filename/url
  const backgroundImageUrl =
    data?.BackgroundImage?.filename || data?.BackgroundImage?.url || "";

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 h-[700px] flex items-center overlay"
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto text-center relative z-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          {data.Title}
        </h2>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          {data.Subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {data.ButtonURL && (
            <Link
              href={data.ButtonURL}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              {data.ButtonName}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
