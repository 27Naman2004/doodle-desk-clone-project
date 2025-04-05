
import React from 'react';
import { Link } from 'react-router-dom';

const ProgramIntroduction = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-6">How To Let Your Child Study At Doodle Desk?</h2>
          
          <div className="space-y-6">
            <p className="text-gray-800">
              At Doodle Desk Daycare, we understand that choosing the right place for your child is one of the most
              important decisions you'll make as a parent. That's why we're dedicated to creating a nurturing, safe, and
              engaging environment where every child feels at home.
            </p>
            
            <p className="text-gray-800">
              Our experienced caregivers and educators focus on holistic development—encouraging creativity,
              building social skills, and laying strong foundations for lifelong learning. With structured programs,
              playful activities, and personalized attention, we ensure each child grows with confidence, joy, and
              curiosity.
            </p>
            
            <p className="text-gray-800">
              More than just a daycare, we're a trusted partner in your child's early journey.
            </p>
            
            <div className="text-center mt-8">
              <Link 
                to="/enroll" 
                className="enroll-button inline-block hover:shadow-lg"
              >
                Enroll Your Child Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramIntroduction;
