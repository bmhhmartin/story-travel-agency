import HeroBanner from "@/components/HeroBanner";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import { getStoryblokData } from "@/lib/storyblok-server";

async function getHeroBannerData() {
  try {
    const data = await getStoryblokData("cdn/stories/banner/hero");

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
      <HeroBanner data={heroData} />
      <Services></Services>
      <Mission></Mission>
    </div>
  );
}
