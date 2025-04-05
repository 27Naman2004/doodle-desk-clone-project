
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header-nav py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
          <img src="/lovable-uploads/eb9425ae-c7ee-4189-bb1f-dc00b6d86a19.png" alt="Logo" className="w-8 h-8" />
        </div>
        <Link to="/" className="text-3xl font-bold italic">Doodle Desk</Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li><Link to="/enroll" className="hover:underline">Enroll</Link></li>
          <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
          <li><Link to="/classes" className="hover:underline">Classes</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
