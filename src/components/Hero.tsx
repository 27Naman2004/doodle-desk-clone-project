
import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "Safe and Engaging Environment",
    description: "Building strong foundations for lifelong learning."
  },
  {
    title: "Nurturing Care",
    description: "Supporting every child's unique journey."
  },
  {
    title: "Creative Learning",
    description: "Encouraging curiosity and exploration."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section flex flex-col items-center justify-center text-white relative">
      <div className="text-center py-24">
        <h1 className="text-5xl font-bold mb-4">{slides[currentSlide].title}</h1>
        <p className="text-xl">{slides[currentSlide].description}</p>
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
