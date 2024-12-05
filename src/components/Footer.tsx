import { Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-dark/95 backdrop-blur-sm z-50 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">LuxeDrive</span>
            </div>
            <p className="mt-4 text-grey">
              Luxury car rental service providing premium vehicles and
              exceptional experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#fleet"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Our Fleet
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-primary transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">24/7 Support</li>
              <li className="text-gray-400">Door-to-Door Delivery</li>
              <li className="text-gray-400">Chauffeur Service</li>
              <li className="text-gray-400">Special Events</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Luxury Lane</li>
              <li className="text-gray-400">Beverly Hills, CA 90210</li>
              <li className="text-gray-400">+1 (234) 567-8900</li>
              <li className="text-gray-400">contact@luxedrive.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} LuxeDrive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
