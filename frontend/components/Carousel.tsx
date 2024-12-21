"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoCard from "./VideoCard";
import { Video } from "../types/video";

interface CarouselProps {
  title: string;
  videos: Video[];
}

const Carousel: React.FC<CarouselProps> = ({ title, videos }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount =
        window.innerWidth < 640
          ? carousel.offsetWidth * 0.8
          : carousel.offsetWidth * 0.5;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(
              carousel.scrollWidth - carousel.offsetWidth,
              scrollPosition + scrollAmount
            );
      carousel.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
        setScrollPosition(carousel.scrollLeft);
      };
      carousel.addEventListener("wheel", handleWheel, { passive: false });
      return () => carousel.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 hidden md:flex"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-4 py-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 hidden md:flex"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
