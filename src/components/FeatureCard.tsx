
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="card-primary p-6 text-center">
      <img src={imageSrc} alt={title} className="feature-image mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default FeatureCard;
