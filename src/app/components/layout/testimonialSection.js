'use client';
import React from "react";
import testimonials from "@/app/data/testimonialData.json"

export default function testimonialCards () {
  return (
    <><div className="testimonialSection py-9">
        <div className="max-w-7xl mx-auto">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-full mb-6 flex-shrink-0"></div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {testimonial.text}
                </p>
                
                {/* Author Info */}
                <div className="border-t pt-4">
                  <h4 className="text-gray-900 font-bold text-base sm:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base font-normal">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}