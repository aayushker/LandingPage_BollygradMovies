'use client'

import Carousel from '../Carousel'
import { Video } from '../types/video'

const videos: Video[] = [
  {
    id: '1',
    title: 'Action Movie 1',
    description: 'An adrenaline-pumping action movie full of thrills!',
    thumbnail: '/Action/image1.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Action Movie 2',
    description: 'Non-stop action that will keep you at the edge of your seat!',
    thumbnail: '/Action/image2.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Action Movie 3',
    description: 'Explosive action scenes and breathtaking stunts!',
    thumbnail: '/Action/image3.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'Action Movie 4',
    description: 'A high-octane adventure that never lets up!',
    thumbnail: '/Action/image4.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '5',
    title: 'Action Movie 5',
    description: 'Heart-pounding action from start to finish!',
    thumbnail: '/Action/image5.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '6',
    title: 'Action Movie 6',
    description: 'An action-packed journey with unforgettable moments!',
    thumbnail: '/Action/image6.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '7',
    title: 'Action Movie 7',
    description: 'A relentless action thriller that keeps you hooked!',
    thumbnail: '/Action/image7.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '8',
    title: 'Action Movie 8',
    description: 'An epic action saga with stunning visuals!',
    thumbnail: '/Action/image8.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
]

export default function ActionCarousel() {
  return <Carousel title="Action" videos={videos} />
}

