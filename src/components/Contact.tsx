import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ContactSkeleton } from './LoadingSkeleton';
import MapEmbed from './MapEmbed';

export default function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ContactSkeleton />;
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch with our luxury car specialists to plan your perfect
              journey.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-600">+91 (934) 691-2387</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-600">
                  omvamshi2001@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-600">
                  Sri Ramanapuram Colony, Ramanthapur, HYD, TG-500013
                </span>
              </div>
            </div>
          </div>

          <MapEmbed/>
        </div>
      </div>
    </section>
  );
}