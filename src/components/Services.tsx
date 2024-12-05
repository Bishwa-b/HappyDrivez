import { Shield, Clock, MapPin, HeartHandshake } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ServicesSkeleton } from './LoadingSkeleton';

const services = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Round-the-clock service with flexible pickup and return times to match your schedule.',
  },
  {
    icon: MapPin,
    title: 'Door-to-Door Delivery',
    description:
      'Complimentary vehicle delivery and pickup at your preferred location.',
  },
  {
    icon: Shield,
    title: 'Full Insurance',
    description:
      'Comprehensive insurance coverage included with every rental for your peace of mind.',
  },
  {
    icon: HeartHandshake,
    title: 'Concierge Service',
    description:
      'Personal concierge to assist with travel planning and special requests.',
  },
];

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ServicesSkeleton />;
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">Premium Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience unparalleled luxury and convenience
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="flex justify-center">
                <service.icon className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}