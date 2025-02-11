// MapEmbed.tsx
import React from 'react';

const MapEmbed: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full pb-[56.25%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.332250831036!2d78.54492681376081!3d17.386719977259983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb992d90366af1%3A0x68e374d709cd875f!2sHappy%20drivez!5e0!3m2!1sen!2sin!4v1739279261754!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      ></iframe>
    </div>
  );

};



export default MapEmbed;
