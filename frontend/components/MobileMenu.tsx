'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X } from 'lucide-react'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="icon" className="text-white md:hidden" onClick={() => setIsOpen(true)}>
        <span className="sr-only">Open menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 md:hidden">
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col py-6 bg-gray-900 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-white">Menu</h2>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6 text-white" />
                    </Button>
                  </div>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div className="h-full flex flex-col">
                      <div className="space-y-1">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">Home</Link>
                        <Link href="/all" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">All</Link>
                        <Link href="/actors" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">Actor&Actress</Link>
                        <Link href="/movies" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">Movies</Link>
                        <Link href="/tv-shows" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800">TV Shows</Link>
                      </div>
                      <div className="mt-6">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input 
                            type="text" 
                            placeholder="Search" 
                            className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu

