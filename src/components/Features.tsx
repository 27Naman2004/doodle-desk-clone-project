
import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Why Choose Us</h2>
        <h3 className="text-2xl">Our Core Values</h3>
        <p className="mt-4 max-w-3xl mx-auto">
          With Us, we always put the quality of teaching children first, please rest assured when sending
          children at DoodleDesk.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        <FeatureCard 
          title="Learn And Play"
          description="Join the intense of playing and learning to make your child comfortable"
          imageSrc="/lovable-uploads/0a495324-bae9-400b-a559-8a95fdcc5108.png"
        />
        <FeatureCard 
          title="Nutritious Meal"
          description="Children needs meals with full of nutrition necessary for a day of life."
          imageSrc="/lovable-uploads/240f36d6-2895-449e-bac5-08a88b44f280.png"
        />
        <FeatureCard 
          title="Great Teachers"
          description="Experienced and well trained teachers help your child develop more in all aspects."
          imageSrc="/lovable-uploads/0a495324-bae9-400b-a559-8a95fdcc5108.png"
        />
        <FeatureCard 
          title="Cute Environment"
          description="The colorful environment of Kindori helps your child develop it's age, making them more comfortable."
          imageSrc="/lovable-uploads/240f36d6-2895-449e-bac5-08a88b44f280.png"
        />
      </div>
    </section>
  );
};

export default Features;
