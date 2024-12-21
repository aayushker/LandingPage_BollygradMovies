'use client'

import Carousel from '../Carousel'
import { Video } from '../../app/types/video'

const videos: Video[] = [
  {
    id: '1',
    title: 'Horror Movie 1',
    description: 'A terrifying horror movie that will keep you up at night!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Horror+Movie+1',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Horror Movie 2',
    description: 'Another spine-chilling horror film that will make you jump out of your seat!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Horror+Movie+2',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  // Add more videos as needed
]

export default function HorrorCarousel() {
  return <Carousel title="Horror Movies" videos={videos} />
}

