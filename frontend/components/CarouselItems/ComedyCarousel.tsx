'use client'

import Carousel from '../Carousel'
import { Video } from '../../app/types/video'

const videos: Video[] = [
  {
    id: '1',
    title: 'Comedy Movie 1',
    description: 'A hilarious comedy that will have you laughing from start to finish!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Comedy+Movie+1',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Comedy Movie 2',
    description: 'Another side-splitting comedy that\'s guaranteed to brighten your day!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Comedy+Movie+2',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  // Add more videos as needed
]

export default function ComedyCarousel() {
  return <Carousel title="Comedy Movies" videos={videos} />
}

