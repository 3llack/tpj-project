'use client';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link"
import Image from "next/image"
import Button from "./components/elements/button.jsx";
import Sponsor from "./components/layout/sponsorSection.js";
import Foundation from "./components/layout/foundationSection.js";
import Testimonial from "./components/layout/testimonialSection.js";

export default function Home() {
  return (
    <>
      <section>
        <div className="hero">
          <div className="">
            <h1 className="text-[75px] text-center"> INSERT VIDEO </h1>
          </div>
        </div>
      </section>

      <section>
        <div
          id="cta"
          className="cta bg-center bg-no-repeat bg-cover bg-fixed pt-16 pb-16"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center px-2 -mx-2">
              <h2 className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw]'>
                We are committed to providing children access
                to quality education, supporting families with
                essential needs, and offering women and girls
                the opportunity to thrive
              </h2>
            </div>
            <div className='flex flex-wrap justify-center items-center py-9'>
              <a href='/' target='_blank'>
                <span className='bg-black text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] p-[10px] rounded-full'>
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 bg-yellow-200 w-[80vw] rounded-b-[25px] shadow-[0_4px_4px_-2px_#f9f9f9] mx-auto">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:divide-x divide-black">
              {/* Counter 1 */}
              <div className="counter-item">
                <h2 className="text-[3rem] font-extrabold text-black mb-2">200+</h2>
                <p className="text-[1.125rem] text-black">Children reached</p>
              </div>

              {/* Counter 2 */}
              <div className="counter-item">
                <h2 className="text-[3rem] font-extrabold text-black mb-2">3+</h2>
                <p className="text-[1.125rem] text-black">Projects and Programmes Planned</p>
              </div>

              {/* Counter 3 */}
              <div className="counter-item">
                <h2 className="text-[3rem] font-extrabold text-black mb-2">2</h2>
                <p className="text-[1.125rem] text-black">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="csr" id="csr">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column */}
            <div className="px-4 py-9 mx-5 flex justify-center">
              <Image 
                src="/images/giphy.gif"
                width={500}
                height={375}
                alt='tpj-volunteer'
              />
            </div>
    
            {/* Right Column */}
            <div className="px-4 py-9 mx-5">
              <p className='py-6'>
                We are committed to providing children access to quality education, 
                supporting families with essential needs, and offering women and girls 
                the opportunity to thrive. Our vision is to create a community where every 
                child, regardless of background, can learn in a safe, inclusive environment 
                and acquire the skills needed to build a brighter future. We believe education 
                is the foundation of progress, so we invest in programs that supply schools 
                with essential materials, train teachers, and promote digital literacy to 
                prepare children for the modern world. <br /><br />
                For families facing economic challenges, we focus on delivering vital 
                resources such as nutritious meals, clothing, and healthcare support, 
                ensuring that no child is forced to choose between learning and survival. 
                By strengthening family units, we aim to reduce the cycles of poverty that 
                often hinder a child's ability to succeed academically and socially.
              </p>
              
              <Link href="/about">
                <Button 
                  bgColor="bg-[#3A5D57]"
                  textColor="text-[#fff]"
                  text="Read More About Us" 
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-[75px] text-center">INSERT CAROUSEL</h1>
      </section>

      <section>
        <Foundation />
      </section>

      <section>
        <Testimonial />
      </section>
      <hr className="border-0 h-[5px] text-white bg-[#c7b438]" />

      <a
        href="#"
        className="back-to-top active flex items-center justify-center"
        style={{ textDecoration: "none" }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}
