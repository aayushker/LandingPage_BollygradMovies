'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Video } from '../types/video'

interface VideoCardProps {
  video: Video
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="relative w-32 sm:w-48 md:w-64 aspect-video rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105 flex-shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image 
            src={video.thumbnail} 
            alt={video.title}
            layout="fill"
            objectFit="cover"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
              <p className="text-white text-xs sm:text-sm text-center">{video.description}</p>
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-black border-gray-800">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${new URL(video.youtubeLink).searchParams.get('v')}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default VideoCard

