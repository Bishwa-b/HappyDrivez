import { Menu, X, Car } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate('/');

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 144;
        const offsetTop = element.offsetTop - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <nav className="relative w-full bg-dark/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Left side - Logo Image */}
          <div className="flex items-center">
            <a
              onClick={() => navigate('/')}
              className="flex items-center cursor-pointer"
            >
              <img
                src="/images/happyDrivez.jpeg"
                alt="HappyDrivez"
                className="h-16 w-auto sm:h-20 md:h-20 lg:h-20 rounded transition-all duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Center - Brand Name and Icon */}
          <div className="hidden lg:flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <a
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <Car className="h-8 w-8 md:h-12 md:w-12 text-amber-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-500 transition-colors duration-300 group-hover:text-amber-400">
                HappyDrivez
              </span>
            </a>
          </div>

          {/* Right side - Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('fleet')}
              className="text-lg xl:text-xl text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Cars
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-lg xl:text-xl text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg xl:text-xl text-gray-300 hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-lg xl:text-xl text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-3 bg-primary text-dark px-6 py-3 rounded-md hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 font-semibold text-lg xl:text-xl"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-dark-light transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-8 w-8 transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Menu className="h-8 w-8 transition-transform duration-300 hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
            <button
              onClick={() => {
                scrollToSection('fleet');
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-lg sm:text-xl text-gray-300 hover:text-primary hover:bg-dark-light rounded-md transition-colors duration-300"
            >
              Cars
            </button>
            <button
              onClick={() => {
                scrollToSection('services');
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-lg sm:text-xl text-gray-300 hover:text-primary hover:bg-dark-light rounded-md transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => {
                scrollToSection('about');
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-lg sm:text-xl text-gray-300 hover:text-primary hover:bg-dark-light rounded-md transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection('contact');
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-lg sm:text-xl text-gray-300 hover:text-primary hover:bg-dark-light rounded-md transition-colors duration-300"
            >
              Contact
            </button>
            <a
              href="tel:+1234567890"
              className="block w-full text-center px-4 py-3 text-lg sm:text-xl text-primary font-medium hover:bg-primary hover:text-dark rounded-md transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
