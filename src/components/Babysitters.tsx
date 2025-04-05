
import React from 'react';

const Babysitters = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Babysitters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Babysitter 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-2xl font-bold text-[#c67a9b]">Shivani Sharma</h3>
            </div>
            <p className="text-center mb-4">Experienced babysitter with a passion for childcare.</p>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span className="font-bold">Experience:</span>
                <span>5 years</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Availability:</span>
                <span>Mon-Fri, 9am-5pm</span>
              </div>
            </div>
          </div>
          
          {/* Babysitter 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-2xl font-bold text-[#c67a9b]">Saakshi Jha</h3>
            </div>
            <p className="text-center mb-4">Certified in CPR and First Aid, dedicated to child safety.</p>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span className="font-bold">Experience:</span>
                <span>3 years</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Availability:</span>
                <span>Weekends, flexible hours</span>
              </div>
            </div>
          </div>
          
          {/* Babysitter 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-2xl font-bold text-[#c67a9b]">Mahak Sharma</h3>
            </div>
            <p className="text-center mb-4">Specializes in early childhood education and development.</p>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span className="font-bold">Experience:</span>
                <span>7 years</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Availability:</span>
                <span>Mon-Fri, 10am-6pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Babysitters;
