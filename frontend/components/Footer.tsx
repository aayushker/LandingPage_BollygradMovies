"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const mockViews = 568;
    setViews(mockViews);
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/movies" className="hover:text-white">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/tv-shows" className="hover:text-white">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="/action" className="hover:text-white">
                  Action
                </Link>
              </li>
              <li>
                <Link href="/trending" className="hover:text-white">
                  Trending
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">About Bollygrad Movies</h3>
            <p className="text-sm">
              Bollygrad Movies is your go-to platform for the latest movies, TV shows,
              and trending content. Enjoy unlimited streaming anytime, anywhere.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Total Views</h3>
            <p className="text-2xl font-bold">{views.toLocaleString()}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; 2024Bollygrad Movies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
