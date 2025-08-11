'use client';
import React from "react";
import opportunity from "@/app/data/cardData.json"

export default function foundationSection() {
  return(
    <>
      <div className="bg-gray-50 min-h-screen py-9">
        <div className="container mx-auto px-4 sm:px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-lg font-normal text-gray-600 mb-2">
              Become an Influential Part of
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight tracking-tight">
              The Prince Jacob Foundation
            </h1>
          </div>

          {/* Card Section */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunity.map((opportunity, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm"
              >
                {/* Icon Circle */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 ${opportunity.bgColor}`}>
                  <div className={opportunity.iconColor}>
                    {/* Dynamically render icon */}
                    {opportunity.icon.startsWith("/images") ? (
                      <img 
                        src={opportunity.icon} 
                        alt={`${opportunity.title} icon`} 
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                    ) : (
                      <i className={`text-xl sm:text-2xl ${opportunity.icon}`} aria-hidden="true"></i>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 leading-snug">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                  {opportunity.description}
                </p>
                
                {/* Action Link */}
                <div className="inline-flex items-center text-gray-800 font-medium transition-colors duration-300 hover:text-forest-green cursor-pointer group text-sm sm:text-base">
                  <span>{opportunity.action}</span>
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  )
}