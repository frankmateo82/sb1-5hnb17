import React, { useState } from 'react';
import { Menu, Mail, Phone, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full p-6 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-16">
          <img 
            src="/logo.png" 
            alt="Complex Simplicity Media" 
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6 text-sm tracking-wider">
            <a href="#" className="text-white hover:text-gray-300 transition-colors uppercase">Work</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors uppercase">Services</a>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="mailto:complexsimplcitymedia@gmail.com" 
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden lg:inline">complexsimplcitymedia@gmail.com</span>
            </a>
            <a 
              href="tel:+14243330799" 
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">(424) 333-0799</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-transform duration-300
          flex flex-col items-center justify-center space-y-8 md:hidden
          ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}
        `}>
          <div className="h-20">
            <img 
              src="/logo.png" 
              alt="Complex Simplicity Media" 
              className="h-full w-auto object-contain"
            />
          </div>
          <a href="#" className="text-white text-xl uppercase" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href="#" className="text-white text-xl uppercase" onClick={() => setIsMenuOpen(false)}>Services</a>
          <div className="flex flex-col items-center space-y-4 mt-8">
            <a 
              href="mailto:complexsimplcitymedia@gmail.com" 
              className="flex items-center space-x-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="w-5 h-5" />
              <span>complexsimplcitymedia@gmail.com</span>
            </a>
            <a 
              href="tel:+14243330799" 
              className="flex items-center space-x-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span>(424) 333-0799</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}