import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0d7377] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white">MedKit</Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 font-medium transition-colors">Home</Link>
            <Link to="/find-doctor" className="text-white hover:text-gray-200 font-medium transition-colors">Find a doctor</Link>
            <Link to="/about" className="text-white hover:text-gray-200 font-medium transition-colors">About us</Link>
            <Link to="/client-zone" className="px-5 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-teal-700 font-medium transition-all">Client zone</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0d7377] border-t border-teal-600">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-white hover:text-gray-200 font-medium">Home</Link>
            <Link to="/find-doctor" className="block px-3 py-2 text-white hover:text-gray-200 font-medium">Find a doctor</Link>
            <Link to="/about" className="block px-3 py-2 text-white hover:text-gray-200 font-medium">About us</Link>
            <Link to="/client-zone" className="block px-3 py-2 text-white font-medium">Client zone</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
