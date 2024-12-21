'use client'

import Carousel from '../Carousel'
import { Video } from '../types/video'

const videos: Video[] = [
  {
    id: '1',
    title: 'Animated Movie 1',
    description: 'A delightful animated adventure for all ages!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Animated+Movie+1',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Animated Movie 2',
    description: 'Another charming animated film filled with wonder and excitement!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Animated+Movie+2',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  // Add more videos as needed
]

export default function AnimatedCarousel() {
  return <Carousel title="Animated Movies" videos={videos} />
}

