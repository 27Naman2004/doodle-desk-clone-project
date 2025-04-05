
import React from 'react';
import Navbar from '../components/Navbar';

const Gallery = () => {
  // Sample gallery images - would be replaced with actual images
  const galleryImages = [
    { id: 1, src: "/lovable-uploads/0a495324-bae9-400b-a559-8a95fdcc5108.png", alt: "Children playing" },
    { id: 2, src: "/lovable-uploads/240f36d6-2895-449e-bac5-08a88b44f280.png", alt: "Art activities" },
    { id: 3, src: "/lovable-uploads/eb9425ae-c7ee-4189-bb1f-dc00b6d86a19.png", alt: "Outdoor activities" },
    { id: 4, src: "/lovable-uploads/0a495324-bae9-400b-a559-8a95fdcc5108.png", alt: "Learning activities" },
    { id: 5, src: "/lovable-uploads/240f36d6-2895-449e-bac5-08a88b44f280.png", alt: "Story time" },
    { id: 6, src: "/lovable-uploads/eb9425ae-c7ee-4189-bb1f-dc00b6d86a19.png", alt: "Meal time" },
  ];

  return (
    <div className="min-h-screen font-comic-neue">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Our Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
