'use client';
import React from 'react';
import navLinks from '@/app/data/footerData.json'

export default function Footer(){
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Logo, Description, Button */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center">
                <img src='/images/logo.png' className="w-32 h-32 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">The Prince Jacob</h3>
                <p className="text-sm text-gray-600 tracking-wider">Foundation</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-800 text-lg leading-relaxed max-w-lg">
              A non-profit organization with the idea of fostering entrepreneurial skills, independence and community development.
            </p>

            {/* Donate Button */}
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-8 py-3 rounded-full transition-colors duration-300">
              <a href=''>Donate Now</a>
            </button>
          </div>

          {/* Right Section - Navigation Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-forest-green p-8 lg:p-12 w-full max-w-sm footer-card">
              <nav className="space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="block text-white text-xl lg:text-2xl font-normal hover:text-gray-200 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Follow Us Section */}
                <div className="pt-4">
                  <p className="text-white text-xl lg:text-2xl font-normal mb-2">
                    Follow Us:{' '}
                    <a 
                      href='https://www.instagram.com/prince.jacob.foundation?igsh=MXQ4NmJqcjV0bjJ3Nw==' 
                      target='_blank'
                      className='text-white'
                    >prince.jacob.foundation</a>
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            The Prince Jacob Foundation © 2025 | Built by{' '}
            <span className="font-medium"><a href='https://266labs.netlify.app' target='_blank'>266Labs</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};