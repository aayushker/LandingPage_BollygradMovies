'use client'

import Carousel from '../Carousel'
import { Video } from '../../app/types/video'

const videos: Video[] = [
  {
    id: '1',
    title: 'Popular Movie 1',
    description: 'An exciting popular movie that you won\'t want to miss!',
    thumbnail: '/Popular/image1.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Popular Movie 2',
    description: 'Another thrilling popular movie for your entertainment!',
    thumbnail: '/Popular/image2.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Popular Movie 3',
    description: 'A must-watch popular movie that will keep you on the edge of your seat!',
    thumbnail: '/Popular/image3.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'Popular Movie 4',
    description: 'An amazing popular movie that you will love!',
    thumbnail: '/Popular/image4.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '5',
    title: 'Popular Movie 5',
    description: 'A fantastic popular movie that you should not miss!',
    thumbnail: '/Popular/image5.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '6',
    title: 'Popular Movie 6',
    description: 'An incredible popular movie that will entertain you!',
    thumbnail: '/Popular/image6.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: '7',
    title: 'Popular Movie 7',
    description: 'A wonderful popular movie that you will enjoy!',
    thumbnail: '/Popular/image7.jpg',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
]

export default function PopularCarousel() {
  return <Carousel title="Popular" videos={videos} />
}

