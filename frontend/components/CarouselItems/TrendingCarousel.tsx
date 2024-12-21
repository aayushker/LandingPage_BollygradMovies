"use client";

import Carousel from "../Carousel";
import { Video } from "../types/video";

const videos: Video[] = [
  {
    id: "1",
    title: "Trending Movie 1",
    description: "The hottest trending movie right now!",
    thumbnail: "/Trendings/image1.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Trending Movie 2",
    description: "Another must-watch trending film!",
    thumbnail: "/Trendings/image2.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Trending Movie 3",
    description: "A trending movie you can't miss!",
    thumbnail: "/Trendings/image3.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Trending Movie 4",
    description: "This trending movie is a must-watch!",
    thumbnail: "/Trendings/image4.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Trending Movie 5",
    description: "Don't miss this trending movie!",
    thumbnail: "/Trendings/image5.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Trending Movie 6",
    description: "A trending movie that everyone is talking about!",
    thumbnail: "/Trendings/image6.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "7",
    title: "Trending Movie 7",
    description: "This trending movie is a hit!",
    thumbnail: "/Trendings/image7.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "8",
    title: "Trending Movie 8",
    description: "The latest trending movie!",
    thumbnail: "/Trendings/image8.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function TrendingCarousel() {
  return <Carousel title="Trending" videos={videos} />;
}
