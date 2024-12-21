'use client'

import Carousel from '../Carousel'
import { Video } from '../../app/types/video'

const videos: Video[] = [
  {
    id: '1',
    title: 'Love Story 1',
    description: 'A heartwarming romance that will make you believe in love!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Love+Story+1',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Love Story 2',
    description: 'Another touching love story that will tug at your heartstrings!',
    thumbnail: '/placeholder.svg?height=360&width=640&text=Love+Story+2',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  // Add more videos as needed
]

export default function LoveStoryCarousel() {
  return <Carousel title="Love Stories" videos={videos} />
}

