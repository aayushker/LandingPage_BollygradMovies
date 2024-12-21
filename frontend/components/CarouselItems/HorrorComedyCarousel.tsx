'use client'

import Carousel from '../Carousel'
import { Video } from '../../app/types/video'

const videos: Video[] = [
  {
    id: '1',
    title: 'Horror Comedy 1',
    description: 'A perfect blend of scares and laughs that you won\'t want to miss!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Horror+Comedy+1',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Horror Comedy 2',
    description: 'Another hilarious yet terrifying movie that will have you screaming with laughter!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Horror+Comedy+2',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  // Add more videos as needed
]

export default function HorrorComedyCarousel() {
  return <Carousel title="Horror Comedy" videos={videos} />
}

