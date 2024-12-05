import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Phone,
  MessageSquare,
  Users,
  Gauge,
  Fuel,
  Palette,
  IndianRupee,
  Infinity,
  Wrench,
  CreditCard,
  Clock,
  ArrowLeft,
} from 'lucide-react';
import { cars } from '../data/cars';
import { CarDetailsSkeleton } from './LoadingSkeleton';

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const fleetSection = document.getElementById('fleet');
      if (fleetSection) {
        const navbarHeight = 144; // Height of your navbar
        const offsetTop = fleetSection.offsetTop - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }, 100);
  };

  if (loading) {
    return <CarDetailsSkeleton />;
  }

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Car not found</p>
      </div>
    );
  }

  const features = [
    { icon: Users, label: 'Seats', value: car.features.seats },
    { icon: Gauge, label: 'Transmission', value: car.features.transmission },
    { icon: Fuel, label: 'Fuel Type', value: car.features.fuelType },
    { icon: Palette, label: 'Color', value: car.features.color },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-400 mb-4">
          <a
            href="#"
            onClick={handleBackClick}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:underline mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Fleet
          </a>
        </nav>

        <div className="bg-black rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute top-3 left-3">
                <img
                  src={car.logo}
                  alt={`${car.name} logo`}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-amber-500 mb-4">
                    {car.name}
                  </h1>
                  <div className="flex items-center text-3xl font-bold text-blue-400">
                    <IndianRupee className="h-6 w-8" />
                    <span>{car.price}/day</span>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0 flex space-x-4">
                  <a
                    href={`tel:${car.phoneNumber}`}
                    className="flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all transform hover:scale-110"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </a>
                  <a
                    href={`https://wa.me/${car.phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all transform hover:scale-110"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-amber-500 mb-6">
                  Vehicle Features
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {features.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center space-x-3 transition delay-150 bg-gray-700 hover:bg-gray-800 p-4 rounded feature-card"
                    >
                      <Icon className="h-6 w-6 text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-400">{label}</p>
                        <p className="text-lg text-gray-100">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-amber-500 mb-6">
                  Rental Benefits
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="bg-amber-500 text-gray-900 p-2 rounded-full">
                      <Infinity className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg text-gray-200">
                        Unlimited Kilometers
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-amber-500 text-gray-900 p-2 rounded-full">
                      <CreditCard className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg text-gray-200">
                        No Deposit Required
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-amber-500 text-gray-900 p-2 rounded-full">
                      <Wrench className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg text-gray-200">
                        24/7 Breakdown Service
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="bg-amber-500 text-gray-900 p-2 rounded-full">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg text-gray-200">Flexible Timing</h3>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-amber-500 mb-6">
                Description
              </h2>
              <p className="text-gray-200 text-lg mb-4">{car.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
