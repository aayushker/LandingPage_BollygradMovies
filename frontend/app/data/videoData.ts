import { v4 as uuidv4 } from 'uuid';

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeLink: string;
}

export interface Genre {
  name: string;
  videos: Video[];
}

const createVideo = (title: string): Video => ({
  id: uuidv4(),
  title,
  description: `This is a ${title} video. It's an exciting watch that you won't want to miss!`,
  thumbnail: `/placeholder.svg?height=360&width=640&text=${encodeURIComponent(title)}`,
  youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
});

export const genres: Genre[] = [
  {
    name: 'Popular',
    videos: [
      createVideo('Popular Movie 1'),
      createVideo('Popular Movie 2'),
      createVideo('Popular Movie 3'),
      createVideo('Popular Movie 4'),
      createVideo('Popular Movie 5'),
    ],
  },
  {
    name: 'Trending',
    videos: [
      createVideo('Trending Movie 1'),
      createVideo('Trending Movie 2'),
      createVideo('Trending Movie 3'),
      createVideo('Trending Movie 4'),
      createVideo('Trending Movie 5'),
    ],
  },
  {
    name: 'TV Shows',
    videos: [
      createVideo('TV Show 1'),
      createVideo('TV Show 2'),
      createVideo('TV Show 3'),
      createVideo('TV Show 4'),
      createVideo('TV Show 5'),
    ],
  },
  {
    name: 'Action',
    videos: [
      createVideo('Action Movie 1'),
      createVideo('Action Movie 2'),
      createVideo('Action Movie 3'),
      createVideo('Action Movie 4'),
      createVideo('Action Movie 5'),
    ],
  },
  {
    name: 'Thriller',
    videos: [
      createVideo('Thriller Movie 1'),
      createVideo('Thriller Movie 2'),
      createVideo('Thriller Movie 3'),
      createVideo('Thriller Movie 4'),
      createVideo('Thriller Movie 5'),
    ],
  },
  {
    name: 'Comedy Movie',
    videos: [
      createVideo('Comedy Movie 1'),
      createVideo('Comedy Movie 2'),
      createVideo('Comedy Movie 3'),
      createVideo('Comedy Movie 4'),
      createVideo('Comedy Movie 5'),
    ],
  },
  {
    name: 'Horror Movie',
    videos: [
      createVideo('Horror Movie 1'),
      createVideo('Horror Movie 2'),
      createVideo('Horror Movie 3'),
      createVideo('Horror Movie 4'),
      createVideo('Horror Movie 5'),
    ],
  },
  {
    name: 'Animated Movie',
    videos: [
      createVideo('Animated Movie 1'),
      createVideo('Animated Movie 2'),
      createVideo('Animated Movie 3'),
      createVideo('Animated Movie 4'),
      createVideo('Animated Movie 5'),
    ],
  },
  {
    name: 'Love Story',
    videos: [
      createVideo('Love Story 1'),
      createVideo('Love Story 2'),
      createVideo('Love Story 3'),
      createVideo('Love Story 4'),
      createVideo('Love Story 5'),
    ],
  },
  {
    name: 'Horror Comedy',
    videos: [
      createVideo('Horror Comedy 1'),
      createVideo('Horror Comedy 2'),
      createVideo('Horror Comedy 3'),
      createVideo('Horror Comedy 4'),
      createVideo('Horror Comedy 5'),
    ],
  },
];

