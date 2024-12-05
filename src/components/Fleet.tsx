import { Users, Gauge, Fuel, Palette, Star, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { useState, useEffect } from 'react';
import { CarCardSkeleton } from './LoadingSkeleton';

export default function Fleet() {
  const [loading, setLoading] = useState(true);
  const FeatureIcon = {
    seats: Users,
    transmission: Gauge,
    fuelType: Fuel,
    color: Palette,
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section id="fleet" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Our Premium Fleet
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose from our selection of luxury vehicles
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CarCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Our Premium Fleet
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our selection of luxury vehicles
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Link
              to={`/car/${car.id}`}
              key={car.id}
              className="bg-black rounded-lg overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 relative"
            >
              <div>
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <img
                      src={car.logo}
                      alt={`${car.name} logo`}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-amber-500">
                      {car.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-amber-500 fill-current" />
                      <span className="text-amber-500 text-lg ml-1">
                        {car.rating}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 mb-4">
                    {(
                      Object.entries(car.features) as [
                        keyof typeof FeatureIcon,
                        string
                      ][]
                    ).map(([key, value]) => {
                      const Icon = FeatureIcon[key];
                      return (
                        <div
                          key={key}
                          className="flex items-center text-gray-400"
                        >
                          <Icon className="h-5 w-5 text-blue-500 mr-2" />
                          <span>{value}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-2xl font-bold text-green-500">
                      <IndianRupee className="h-5 w-5" />
                      <span>{car.price}/day</span>
                    </div>
                    <span className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-500 transition-colors duration-300">
                      Reserve Now
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}