
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen font-comic-neue">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">About Doodle Desk</h1>
        
        <div className="max-w-3xl mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Doodle Desk was founded in 2015 with a simple mission: to provide a nurturing environment where children can thrive and grow. 
              What started as a small daycare with just five children has blossomed into a respected early education center serving over 100 families in our community.
            </p>
            <p>
              Our founder, an early childhood education specialist, created Doodle Desk based on the belief that every child deserves 
              a joyful, enriching early learning experience that builds a foundation for lifelong success.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
            <p>
              At Doodle Desk, we believe in a holistic approach to early childhood education. Our philosophy is rooted in the understanding 
              that children learn best through play and exploration in a safe, supportive environment. We emphasize:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Child-led, teacher-guided learning experiences</li>
              <li>Social-emotional development as the foundation of all learning</li>
              <li>Respect for each child's unique pace and learning style</li>
              <li>Partnership with families to support each child's growth</li>
              <li>A balanced approach that nurtures the whole child—mind, body, and heart</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p>
              Our educators are the heart of Doodle Desk. All of our teachers are experienced professionals with degrees in early childhood 
              education and a passion for working with young children. Our staff participates in ongoing professional development to stay 
              current with best practices in early education.
            </p>
          </section>
          
          <div className="text-center mt-8">
            <button className="enroll-button">Contact Us Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
