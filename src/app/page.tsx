import HeroBanner from "@/components/HeroBanner";
import { getStoryblokData } from "@/lib/storyblok-server";
import Link from "next/link";

async function getHeroBannerData() {
  try {
    const data = await getStoryblokData("cdn/stories/banner/hero");
    console.log("Hero banner info:", data.story?.content || "No content found");

    const heroContent = data.story?.content?.page?.[0] || null;
    return heroContent;
  } catch (error) {
    console.error("Error fetching hero banner data:", error);
    return null;
  }
}

export default async function Home() {
  const heroData = await getHeroBannerData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-lg absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-indigo-600">Travel Agency</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Tours</Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* ✅ Pass data */}
      <HeroBanner data={heroData} />
    </div>
  );
}
