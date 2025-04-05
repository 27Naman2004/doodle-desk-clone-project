
import React from 'react';
import Navbar from '../components/Navbar';

const Enroll = () => {
  return (
    <div className="min-h-screen font-comic-neue">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Enroll Your Child</h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="childName" className="block mb-2">Child's Full Name</label>
              <input 
                type="text" 
                id="childName" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter child's name"
              />
            </div>
            <div>
              <label htmlFor="childAge" className="block mb-2">Child's Age</label>
              <input 
                type="number" 
                id="childAge" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter child's age"
              />
            </div>
            <div>
              <label htmlFor="parentName" className="block mb-2">Parent/Guardian Name</label>
              <input 
                type="text" 
                id="parentName" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="program" className="block mb-2">Program</label>
              <select 
                id="program" 
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select a program</option>
                <option value="toddler">Toddler (1-2 years)</option>
                <option value="preschool">Preschool (3-4 years)</option>
                <option value="kindergarten">Kindergarten (5-6 years)</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2">Additional Information</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Any special requirements or information we should know about your child"
            ></textarea>
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              className="enroll-button"
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
