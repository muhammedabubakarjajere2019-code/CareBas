import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-teal-700">MedKit</Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-teal-600 font-medium">Home</Link>
            <Link to="/find-doctor" className="text-gray-700 hover:text-teal-600 font-medium">Find a doctor</Link>
            <Link to="/about" className="text-gray-700 hover:text-teal-600 font-medium">About us</Link>
            <Link to="/client-zone" className="px-4 py-2 border border-teal-600 text-teal-600 rounded-full hover:bg-teal-50 font-medium">Client zone</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-teal-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">Home</Link>
            <Link to="/find-doctor" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">Find a doctor</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">About us</Link>
            <Link to="/client-zone" className="block px-3 py-2 text-teal-600 font-medium">Client zone</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
