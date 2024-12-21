import HeroSection from "../components/HeroSection";
import PopularCarousel from "../components/CarouselItems/PopularCarousel";
import TrendingCarousel from "../components/CarouselItems/TrendingCarousel";
import TVShowsCarousel from "../components/CarouselItems/TVShowsCarousel";
import ActionCarousel from "../components/CarouselItems/ActionCarousel";
import ThrillerCarousel from "../components/CarouselItems/ThrillerCarousel";
import ComedyCarousel from "../components/CarouselItems/ComedyCarousel";
import HorrorCarousel from "../components/CarouselItems/HorrorCarousel";
import AnimatedCarousel from "../components/CarouselItems/AnimatedCarousel";
import LoveStoryCarousel from "../components/CarouselItems/LoveStoryCarousel";
import HorrorComedyCarousel from "../components/CarouselItems/HorrorComedyCarousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PopularCarousel />
        <TrendingCarousel />
        <TVShowsCarousel />
        <ActionCarousel />
        {/* <ThrillerCarousel />
        <ComedyCarousel />
        <HorrorCarousel />
        <AnimatedCarousel />
        <LoveStoryCarousel />
        <HorrorComedyCarousel /> */}
      </div>
      <Footer />
    </main>
  );
}
