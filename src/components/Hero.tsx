import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { HeroSkeleton } from './LoadingSkeleton';

export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <HeroSkeleton />;
  }

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
            Experience Luxury on Your Terms
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl">
            Premium car rental service offering the finest selection of luxury
            vehicles for your distinguished travel needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#fleet"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary-hover transition"
            >
              View Our Cars
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}