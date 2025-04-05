
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <footer className="w-full">
      {/* Contact Form Section */}
      <div className="bg-[#d5a6bd] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Contact Us</h2>
          <p className="text-white text-center mb-10">Feel free to contact us for any enquiry</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="md:w-1/2 max-w-md mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 rounded"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 rounded"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full p-3 rounded"
                    rows={4}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#c67a9b] hover:bg-[#b56b8c] text-white font-bold py-3 px-4 rounded transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2 max-w-md mx-auto text-white">
              <div className="flex items-center mb-6 mt-6 md:mt-0">
                <div className="w-8 h-8 mr-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>sharma.shivani9155@gmail.com</span>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 mr-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>7004675031</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 mr-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Jalandhar, Punjab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="bg-[#1a2234] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
                <img src="/lovable-uploads/eb9425ae-c7ee-4189-bb1f-dc00b6d86a19.png" alt="Logo" className="w-8 h-8" />
              </div>
              <span className="text-3xl font-bold italic text-white">Doodle Desk</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pinterest">
                  <path d="M12 2a10 10 0 0 0-3.17 19.5c-.07-.65-.13-1.66.03-2.38.14-.65.92-4.15.92-4.15s-.23-.48-.23-1.2c0-1.13.65-1.97 1.47-1.97.7 0 1.03.52 1.03 1.15 0 .7-.45 1.74-.68 2.7-.2.82.41 1.48 1.22 1.48 1.46 0 2.6-1.54 2.6-3.75 0-1.96-1.4-3.32-3.4-3.32-2.32 0-3.68 1.74-3.68 3.54 0 .7.27 1.46.6 1.87.06.08.07.15.06.24-.07.28-.2.87-.23.99-.03.15-.12.18-.27.1-1-.46-1.62-1.93-1.62-3.1 0-2.53 1.84-4.85 5.29-4.85 2.77 0 4.94 1.97 4.94 4.63 0 2.76-1.74 4.97-4.17 4.97-.8 0-1.57-.42-1.84-.92l-.5 1.9c-.18.67-.53 1.5-.8 2.01A10 10 0 1 0 12 2Z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-center pt-6">
            <p className="text-white">© 2025 Doodle Desk. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
