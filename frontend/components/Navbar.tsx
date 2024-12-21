import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-red-600 text-2xl font-bold">
                Bollygrad Movies
              </span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/all"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  All
                </Link>
                <Link
                  href="/actors"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Actor&Actress
                </Link>
                <Link
                  href="/movies"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Movies
                </Link>
                <Link
                  href="/tv-shows"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  TV Shows
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-900 text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
