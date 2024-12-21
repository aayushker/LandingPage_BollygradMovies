'use client'

import Carousel from '../Carousel'
import { Video } from '../types/video'

const videos: Video[] = [
  {
    id: '1',
    title: 'Thriller Movie 1',
    description: 'A suspenseful thriller that will keep you guessing until the end!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Thriller+Movie+1',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Thriller Movie 2',
    description: 'Another nail-biting thriller that will have you on the edge of your seat!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Thriller+Movie+2',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  // Add more videos as needed
]

export default function ThrillerCarousel() {
  return <Carousel title="Thriller" videos={videos} />
}

