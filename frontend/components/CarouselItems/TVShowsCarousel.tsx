"use client";

import Carousel from "../Carousel";
import { Video } from "../../app/types/video";

const videos: Video[] = [
  {
    id: "1",
    title: "TV Show 1",
    description:
      "A gripping TV series that will keep you on the edge of your seat!",
    thumbnail: "/TV_Shows/image1.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "TV Show 2",
    description: "An addictive TV show you won't be able to stop watching!",
    thumbnail: "/TV_Shows/image2.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "TV Show 3",
    description: "A thrilling TV show that will leave you wanting more!",
    thumbnail: "/TV_Shows/image3.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "TV Show 4",
    description: "A captivating TV show with an intriguing plot!",
    thumbnail: "/TV_Shows/image4.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "TV Show 5",
    description: "A fascinating TV show that will keep you hooked!",
    thumbnail: "/TV_Shows/image5.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "TV Show 6",
    description: "An exciting TV show with lots of twists and turns!",
    thumbnail: "/TV_Shows/image6.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "7",
    title: "TV Show 7",
    description: "A must-watch TV show with a compelling story!",
    thumbnail: "/TV_Shows/image7.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "8",
    title: "TV Show 8",
    description: "An engaging TV show that will keep you entertained!",
    thumbnail: "/TV_Shows/image8.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function TVShowsCarousel() {
  return <Carousel title="TV Shows" videos={videos} />;
}
