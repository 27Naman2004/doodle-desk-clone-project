
import React from 'react';
import Navbar from '../components/Navbar';

const Classes = () => {
  const classPrograms = [
    {
      id: 1,
      title: "Toddler Program",
      ageRange: "1-2 years",
      description: "Our toddler program focuses on early development, sensory exploration, and basic social skills."
    },
    {
      id: 2,
      title: "Preschool Program",
      ageRange: "3-4 years",
      description: "The preschool program introduces early literacy, numeracy, and creative expression through structured play."
    },
    {
      id: 3,
      title: "Kindergarten Readiness",
      ageRange: "5-6 years",
      description: "This program prepares children for kindergarten with a focus on academic foundations, social skills, and independence."
    },
    {
      id: 4,
      title: "After-School Program",
      ageRange: "6-10 years",
      description: "Our after-school program provides homework support, enrichment activities, and supervised play."
    }
  ];

  return (
    <div className="min-h-screen font-comic-neue">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-4">Our Classes</h1>
        <p className="text-center max-w-2xl mx-auto mb-12">
          At Doodle Desk, we offer age-appropriate programs designed to nurture your child's development at every stage.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classPrograms.map((program) => (
            <div key={program.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-sm card-primary text-white inline-block px-3 py-1 rounded-full mb-4">Ages: {program.ageRange}</p>
              <p>{program.description}</p>
              <button className="mt-4 enroll-button text-sm">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
