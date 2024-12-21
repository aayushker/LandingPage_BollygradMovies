import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <video
        className="w-full h-full object-cover mt-2.5" 
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Neeya</h1>
          <p className="text-lg md:text-xl mb-6">
            The story revolves around Sarva, whose horoscope dangers the person
            he marries since he has Naga dhosham. Divya has been following Sarva
            for three years, and he always rejects her confession{" "}
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            <Play className="mr-2 h-5 w-5" /> Play
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
