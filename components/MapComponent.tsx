import React, { useState, useRef, useEffect } from 'react';

function MapComponent() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMapVisible(true);
            observer.disconnect(); // Stop observing once the map is loaded
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.05, // Adjust the threshold as needed
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <div ref={mapRef} className="h-96 w-full">
      {isMapVisible && (
        <iframe
          src="https://www.google.com/maps/embed/v1/search?q=darmouth&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      )}
    </div>
  );
}

export default MapComponent;
